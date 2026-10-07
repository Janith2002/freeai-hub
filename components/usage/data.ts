import type { LucideIcon } from "lucide-react";
import { Bot, Cloud, Code2, FileText, Image, MessageCircle, Network, Search, Sparkles } from "lucide-react";

export interface ProviderUsageItem { name: string; requests: string; tokens: string; status: string; icon: LucideIcon; tone: "orange" | "blue" | "purple" | "green"; }
export interface ModelUsageItem { name: string; provider: string; requests: string; tokens: string; status: string; icon: LucideIcon; tone: "orange" | "blue" | "purple" | "green"; }
export interface LimitItem { name: string; usage: number; status: string; tone: "orange" | "blue" | "purple" | "green"; }

export const providerUsage: ProviderUsageItem[] = [
  { name: "FreeAI Demo", requests: "Demo: 540", tokens: "Demo: 210K", status: "Demo", icon: Sparkles, tone: "orange" },
  { name: "Google Gemini", requests: "Demo: 320", tokens: "Demo: 120K", status: "Not Connected", icon: Search, tone: "blue" },
  { name: "OpenRouter", requests: "Demo: 180", tokens: "Demo: 70K", status: "Not Connected", icon: Network, tone: "purple" },
  { name: "Cloudflare AI", requests: "Demo: 140", tokens: "Demo: 50K", status: "Not Connected", icon: Cloud, tone: "orange" },
  { name: "Qwen", requests: "Demo: 104", tokens: "Demo: 32K", status: "Coming Soon", icon: Bot, tone: "green" },
];

export const modelUsage: ModelUsageItem[] = [
  { name: "FreeAI Demo Chat", provider: "FreeAI Demo", requests: "Demo: 390", tokens: "Demo: 150K", status: "Demo", icon: MessageCircle, tone: "orange" },
  { name: "FreeAI Demo Code", provider: "FreeAI Demo", requests: "Demo: 150", tokens: "Demo: 60K", status: "Demo", icon: Code2, tone: "orange" },
  { name: "Gemini Demo Flash", provider: "Google Gemini", requests: "Demo: 320", tokens: "Demo: 120K", status: "Not Connected", icon: Sparkles, tone: "blue" },
  { name: "OpenRouter Demo Model", provider: "OpenRouter", requests: "Demo: 180", tokens: "Demo: 70K", status: "Not Connected", icon: Network, tone: "purple" },
  { name: "Cloudflare Demo LLM", provider: "Cloudflare AI", requests: "Demo: 140", tokens: "Demo: 50K", status: "Coming Soon", icon: Cloud, tone: "orange" },
];

export const limits: LimitItem[] = [
  { name: "FreeAI Demo", usage: 54, status: "Demo", tone: "orange" },
  { name: "Google Gemini", usage: 32, status: "Not Connected", tone: "blue" },
  { name: "OpenRouter", usage: 21, status: "Not Connected", tone: "purple" },
  { name: "Cloudflare AI", usage: 16, status: "Coming Soon", tone: "orange" },
];

export const chartValues = [28, 42, 35, 56, 47, 68, 52, 76, 61, 80, 66, 92, 74, 84, 70, 97, 78, 89, 64, 82, 73, 94, 80, 88];
export const activity = [
  ["Chat request completed", "2 min ago · Demo Model · DEMO", MessageCircle], ["Code generation completed", "18 min ago · Demo Code · DEMO", Code2], ["Research task completed", "42 min ago · Demo Model · DEMO", Search], ["Image generation requested", "1 hour ago · Demo Image · DEMO", Image], ["File analysis completed", "2 hours ago · Demo Model · DEMO", FileText], ["Agent task completed", "3 hours ago · Demo Agent · DEMO", Bot],
] as const;