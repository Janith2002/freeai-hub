import type { LucideIcon } from "lucide-react";
import { Bot, Cloud, Globe2, KeyRound, Network } from "lucide-react";

export type KeyStatus = "Demo" | "Connected" | "Not Connected" | "Coming Soon" | "Inactive";
export interface ApiKeyRecord { id: string; provider: string; label: string; status: KeyStatus; masked: string; created: string; lastUsed: string; notes: string; favorite: boolean; disabled: boolean; icon: LucideIcon; tone: "orange" | "blue" | "purple" | "green" | "gold"; }
export interface ProviderRecord { name: string; status: KeyStatus; icon: LucideIcon; tone: "orange" | "blue" | "purple" | "green" | "gold"; }

export const providers: ProviderRecord[] = [
  { name: "Google Gemini", status: "Not Connected", icon: Globe2, tone: "blue" },
  { name: "OpenRouter", status: "Not Connected", icon: Network, tone: "purple" },
  { name: "Cloudflare AI", status: "Coming Soon", icon: Cloud, tone: "orange" },
  { name: "Qwen", status: "Coming Soon", icon: Bot, tone: "green" },
  { name: "Custom Provider", status: "Not Connected", icon: KeyRound, tone: "gold" },
];

export const demoKeys: ApiKeyRecord[] = [
  { id: "gemini-demo", provider: "Google Gemini", label: "Personal Gemini Key", status: "Demo", masked: "••••••••••••DEMO", created: "Demo date", lastUsed: "Demo", notes: "Temporary frontend demo record", favorite: true, disabled: false, icon: Globe2, tone: "blue" },
  { id: "openrouter-demo", provider: "OpenRouter", label: "OpenRouter Main", status: "Not Connected", masked: "Not configured", created: "Demo date", lastUsed: "Demo", notes: "", favorite: false, disabled: false, icon: Network, tone: "purple" },
  { id: "cloudflare-demo", provider: "Cloudflare AI", label: "Cloudflare AI", status: "Coming Soon", masked: "Not configured", created: "Demo date", lastUsed: "Demo", notes: "", favorite: false, disabled: false, icon: Cloud, tone: "orange" },
  { id: "qwen-demo", provider: "Qwen", label: "Qwen API", status: "Not Connected", masked: "Not configured", created: "Demo date", lastUsed: "Demo", notes: "", favorite: false, disabled: false, icon: Bot, tone: "green" },
];