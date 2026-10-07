import type { LucideIcon } from "lucide-react";
import { Code2, FileText, Lightbulb, PenLine, Search } from "lucide-react";

export type ConversationGroup = "Today" | "Yesterday" | "Previous 7 days";

export interface Conversation {
  id: string;
  title: string;
  timestamp: string;
  group: ConversationGroup;
}

export interface Suggestion {
  title: string;
  prompt: string;
  icon: LucideIcon;
  tone: "orange" | "blue" | "yellow" | "green" | "purple";
}

export const conversations: Conversation[] = [
  { id: "renewable-energy", title: "Explain renewable energy", timestamp: "10:42 AM", group: "Today" },
  { id: "php-login", title: "Fix PHP login error", timestamp: "9:18 AM", group: "Today" },
  { id: "smart-school", title: "Smart School project", timestamp: "Yesterday", group: "Yesterday" },
  { id: "professional-email", title: "Write a professional email", timestamp: "Yesterday", group: "Yesterday" },
  { id: "research-models", title: "Research AI models", timestamp: "Monday", group: "Previous 7 days" },
  { id: "landing-page", title: "Landing page copy ideas", timestamp: "Sunday", group: "Previous 7 days" },
];

export const suggestions: Suggestion[] = [
  { title: "Explain a concept", prompt: "Explain quantum computing in simple words", icon: Lightbulb, tone: "yellow" },
  { title: "Help me code", prompt: "Help me build a responsive navigation bar", icon: Code2, tone: "blue" },
  { title: "Write something", prompt: "Write a concise professional introduction", icon: PenLine, tone: "orange" },
  { title: "Analyze a file", prompt: "Help me understand this document", icon: FileText, tone: "purple" },
  { title: "Research a topic", prompt: "Research the latest trends in AI", icon: Search, tone: "green" },
];

export const modelOptions = ["Automatic (Best Available)", "Gemini 2.5 Flash", "OpenRouter Free", "Llama 3.1 8B"];

export const currentModel = {
  name: "Gemini 2.5 Flash",
  provider: "Google Gemini",
  description: "Fast multimodal model for everyday conversations, coding, and file analysis.",
};

export const usagePlaceholder = {
  used: "72 requests",
  limit: "100 requests",
  percent: 72,
};

export const sampleCode = `function greetUser(name) {
  return \`Hello, \${name}! Welcome back.\`;
}`;