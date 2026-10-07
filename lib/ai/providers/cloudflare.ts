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
    id: "@cf/meta/llama-3.1-8b-instruct",
    providerId: "cloudflare",
    providerName: "Cloudflare AI",
    displayName: "Llama 3.1 8B Instruct",
    capabilities,
    status: "not_configured",
    isFree: true,
    description: "An efficient open model for everyday chat and coding.",
  },
];

export class CloudflareProvider implements AIProvider {
  readonly id = "cloudflare" as const;
  readonly name = "Cloudflare AI";

  async getModels(): Promise<AIModel[]> {
    return models;
  }

  async sendMessage(request: AIRequest, model: AIModel): Promise<AIResponse> {
    void request;
    void model;
    throw new Error("Cloudflare AI is not configured. No request was sent.");
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

export const cloudflareProvider = new CloudflareProvider();