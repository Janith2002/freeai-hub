export type AIProviderId = "gemini" | "openrouter" | "cloudflare";

export type AIProviderStatus =
  | "available"
  | "degraded"
  | "unavailable"
  | "not_configured";

export type AIMessageRole = "system" | "user" | "assistant";

export type AIRequestMode =
  | "chat"
  | "coding"
  | "writing"
  | "research"
  | "image"
  | "file"
  | "agent";

export interface AIModelCapabilities {
  chat: boolean;
  code: boolean;
  vision: boolean;
  imageGeneration: boolean;
  webSearch: boolean;
  fileAnalysis: boolean;
  agent: boolean;
}

export interface AIModel {
  id: string;
  providerId: AIProviderId;
  providerName: string;
  displayName: string;
  capabilities: AIModelCapabilities;
  status: AIProviderStatus;
  isFree: boolean;
  description: string;
}

export interface AIMessage {
  role: AIMessageRole;
  content: string;
}

export interface AIRequest {
  messages: AIMessage[];
  mode: AIRequestMode;
  modelId?: string;
  requiredCapabilities?: Partial<AIModelCapabilities>;
  temperature?: number;
  maxTokens?: number;
}

export interface AIUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  requestCount?: number;
  periodStart?: string;
  periodEnd?: string;
}

export interface AIResponse {
  message: AIMessage;
  providerId: AIProviderId;
  modelId: string;
  usage?: AIUsage;
  finishReason?: "stop" | "length" | "tool_call" | "error";
}

export interface AIProvider {
  readonly id: AIProviderId;
  readonly name: string;
  getModels(): Promise<AIModel[]>;
  sendMessage(request: AIRequest, model: AIModel): Promise<AIResponse>;
  getCapabilities(): Promise<AIModelCapabilities>;
  getUsage(): Promise<AIUsage | null>;
  getStatus(): Promise<AIProviderStatus>;
}