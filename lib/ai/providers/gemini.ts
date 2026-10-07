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
  vision: true,
  imageGeneration: false,
  webSearch: false,
  fileAnalysis: true,
  agent: false,
};

const models: AIModel[] = [
  {
    id: "gemini-2.5-flash",
    providerId: "gemini",
    providerName: "Gemini",
    displayName: "Gemini 2.5 Flash",
    capabilities,
    status: "not_configured",
    isFree: true,
    description: "Fast multimodal model for chat, coding, and file analysis.",
  },
];

export class GeminiProvider implements AIProvider {
  readonly id = "gemini" as const;
  readonly name = "Gemini";

  async getModels(): Promise<AIModel[]> {
    return models;
  }

  async sendMessage(request: AIRequest, model: AIModel): Promise<AIResponse> {
    void request;
    void model;
    throw new Error("Gemini is not configured. No request was sent.");
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

export const geminiProvider = new GeminiProvider();