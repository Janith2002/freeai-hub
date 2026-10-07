import type { LucideIcon } from "lucide-react";
import { Bot, Cloud, Code2, Cpu, Globe2, MessageCircle, Network, Sparkles } from "lucide-react";

export type ProviderStatus = "Demo" | "Available" | "Not Connected" | "Coming Soon";
export type ModelStatus = ProviderStatus;
export type Capability = "Chat" | "Coding" | "Writing" | "Research" | "Vision" | "Files" | "Tools";

export interface Provider { id: string; name: string; modelCount: number; status: ProviderStatus; icon: LucideIcon; tone: "orange" | "blue" | "purple" | "green" | "gold"; }
export interface Model { id: string; name: string; provider: string; type: string; capabilities: Capability[]; context: string; status: ModelStatus; availability: string; favorite: boolean; icon: LucideIcon; tone: "orange" | "blue" | "purple" | "green" | "gold"; }

export const providers: Provider[] = [
  { id: "freeai", name: "FreeAI Demo", modelCount: 2, status: "Demo", icon: Sparkles, tone: "orange" },
  { id: "gemini", name: "Google Gemini", modelCount: 2, status: "Available", icon: Globe2, tone: "blue" },
  { id: "openrouter", name: "OpenRouter", modelCount: 1, status: "Not Connected", icon: Network, tone: "purple" },
  { id: "cloudflare", name: "Cloudflare AI", modelCount: 1, status: "Coming Soon", icon: Cloud, tone: "orange" },
  { id: "qwen", name: "Qwen", modelCount: 1, status: "Coming Soon", icon: Bot, tone: "green" },
  { id: "custom", name: "Custom Provider", modelCount: 0, status: "Not Connected", icon: Cpu, tone: "gold" },
];

export const models: Model[] = [
  { id: "freeai-chat", name: "FreeAI Demo Chat", provider: "FreeAI Demo", type: "General Chat", capabilities: ["Chat", "Writing", "Research"], context: "Demo", status: "Demo", availability: "Local demo", favorite: true, icon: MessageCircle, tone: "orange" },
  { id: "freeai-code", name: "FreeAI Demo Code", provider: "FreeAI Demo", type: "Coding Assistant", capabilities: ["Chat", "Coding", "Tools"], context: "Demo", status: "Demo", availability: "Local demo", favorite: false, icon: Code2, tone: "orange" },
  { id: "gemini-flash", name: "Gemini Demo Flash", provider: "Google Gemini", type: "Multimodal", capabilities: ["Chat", "Coding", "Vision", "Files"], context: "Demo", status: "Available", availability: "Connection required", favorite: true, icon: Sparkles, tone: "blue" },
  { id: "gemini-pro", name: "Gemini Demo Pro", provider: "Google Gemini", type: "Advanced Chat", capabilities: ["Chat", "Coding", "Research", "Vision"], context: "Demo", status: "Available", availability: "Connection required", favorite: false, icon: Sparkles, tone: "blue" },
  { id: "openrouter-demo", name: "OpenRouter Demo Model", provider: "OpenRouter", type: "Model Router", capabilities: ["Chat", "Coding", "Writing"], context: "Demo", status: "Not Connected", availability: "Provider required", favorite: false, icon: Network, tone: "purple" },
  { id: "cloudflare-demo", name: "Cloudflare Demo LLM", provider: "Cloudflare AI", type: "Open Model", capabilities: ["Chat", "Coding"], context: "Demo", status: "Coming Soon", availability: "Coming later", favorite: false, icon: Cloud, tone: "orange" },
  { id: "qwen-demo", name: "Qwen Demo Chat", provider: "Qwen", type: "Open Model", capabilities: ["Chat", "Coding", "Writing"], context: "Demo", status: "Coming Soon", availability: "Coming later", favorite: false, icon: Bot, tone: "green" },
];

export const modes = ["Chat", "Coding", "Writing", "Research", "Image", "File Analysis", "Agent"];