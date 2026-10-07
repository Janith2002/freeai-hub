import type {
  AIModel,
  AIModelCapabilities,
  AIProvider,
  AIRequest,
  AIResponse,
  AIUsage,
  AIProviderStatus,
} from "../types";

const capabilities: AIModelCapabilities = {
  chat: true,
  code: true,
  vision: false,
  imageGeneration: false,
  webSearch: false,
  fileAnalysis: false,
  agent: false,
};

const models: AIModel[] = [
  {
    id: "openrouter/free",
    providerId: "openrouter",
    providerName: "OpenRouter",
    displayName: "OpenRouter Free",
    capabilities,
    status: "not_configured",
    isFree: true,
    description: "A free model route for general chat and coding tasks.",
  },
];

export class OpenRouterProvider implements AIProvider {
  readonly id = "openrouter" as const;
  readonly name = "OpenRouter";

  async getModels(): Promise<AIModel[]> {
    return models;
  }

  async sendMessage(request: AIRequest, model: AIModel): Promise<AIResponse> {
    void request;
    void model;
    throw new Error("OpenRouter is not configured. No request was sent.");
  }

  async getCapabilities(): Promise<AIModelCapabilities> {
    return capabilities;
  }

  async getUsage(): Promise<AIUsage | null> {
    return null;
  }

  async getStatus(): Promise<AIProviderStatus> {
    return "not_configured";
  }
}

export const openRouterProvider = new OpenRouterProvider();