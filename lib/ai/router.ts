import { cloudflareProvider } from "./providers/cloudflare";
import { geminiProvider } from "./providers/gemini";
import { openRouterProvider } from "./providers/openrouter";
import type {
  AIModel,
  AIModelCapabilities,
  AIProvider,
  AIRequest,
  AIRequestMode,
} from "./types";

const providers: AIProvider[] = [geminiProvider, openRouterProvider, cloudflareProvider];

const modeCapabilities: Record<AIRequestMode, Partial<AIModelCapabilities>> = {
  chat: { chat: true },
  coding: { code: true },
  writing: { chat: true },
  research: { chat: true, webSearch: true },
  image: { imageGeneration: true },
  file: { fileAnalysis: true },
  agent: { agent: true },
};

export interface AIRouteCandidate {
  provider: AIProvider;
  model: AIModel;
  reason: "compatible" | "provider_unavailable";
}

export interface AIRouteResult {
  provider: AIProvider | null;
  model: AIModel | null;
  candidates: AIRouteCandidate[];
  requiredCapabilities: Partial<AIModelCapabilities>;
}

function supportsCapabilities(
  model: AIModel,
  requiredCapabilities: Partial<AIModelCapabilities>,
): boolean {
  return Object.entries(requiredCapabilities).every(
    ([capability, required]) =>
      required !== true || model.capabilities[capability as keyof AIModelCapabilities] === true,
  );
}

export async function getRegisteredProviders(): Promise<AIProvider[]> {
  return providers;
}

export async function getAvailableModels(): Promise<AIModel[]> {
  const modelGroups = await Promise.all(providers.map((provider) => provider.getModels()));
  return modelGroups.flat();
}

export async function routeRequest(request: AIRequest): Promise<AIRouteResult> {
  const requiredCapabilities = {
    ...modeCapabilities[request.mode],
    ...request.requiredCapabilities,
  };
  const candidates: AIRouteCandidate[] = [];

  for (const provider of providers) {
    const status = await provider.getStatus();
    const models = await provider.getModels();
    const matchingModels = models.filter(
      (model) =>
        (!request.modelId || model.id === request.modelId) &&
        supportsCapabilities(model, requiredCapabilities),
    );

    for (const model of matchingModels) {
      candidates.push({
        provider,
        model,
        reason: status === "available" ? "compatible" : "provider_unavailable",
      });
    }
  }

  const selected = candidates.find((candidate) => candidate.reason === "compatible");
  return {
    provider: selected?.provider ?? null,
    model: selected?.model ?? null,
    candidates,
    requiredCapabilities,
  };
}