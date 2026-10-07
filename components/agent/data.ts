import type { LucideIcon } from "lucide-react";
import { BarChart3, Bot, Calculator, Code2, FileText, Globe2, Image, LayoutTemplate, LineChart, PenLine, Search, Sparkles, Wrench } from "lucide-react";

export type AgentStatus = "Ready" | "Draft" | "Completed";
export type AgentId = "research" | "content" | "data" | "website" | "document" | "social";
export type AgentToolId = "web" | "file" | "code" | "calculator" | "image" | "browser" | "data" | "custom";

export interface AgentHistoryItem {
  id: AgentId;
  name: string;
  description: string;
  status: AgentStatus;
  lastRun: string;
  favorite: boolean;
  icon: LucideIcon;
  tone: "orange" | "blue" | "purple" | "green" | "gold";
}

export interface AgentTool {
  id: AgentToolId;
  name: string;
  description: string;
  icon: LucideIcon;
  tone: "orange" | "blue" | "purple" | "green" | "gold";
}

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const agents: AgentHistoryItem[] = [
  { id: "research", name: "Research Assistant", description: "Research and summarize topics", status: "Ready", lastRun: "Today, 10:32 AM", favorite: true, icon: Search, tone: "blue" },
  { id: "content", name: "Content Writer", description: "Create polished content", status: "Ready", lastRun: "Yesterday", favorite: false, icon: PenLine, tone: "orange" },
  { id: "data", name: "Data Analyst", description: "Find patterns in data", status: "Draft", lastRun: "Monday", favorite: true, icon: BarChart3, tone: "green" },
  { id: "website", name: "Website Researcher", description: "Explore a topic online", status: "Ready", lastRun: "Sep 22", favorite: false, icon: Globe2, tone: "purple" },
  { id: "document", name: "Document Assistant", description: "Work with your files", status: "Completed", lastRun: "Sep 19", favorite: false, icon: FileText, tone: "gold" },
  { id: "social", name: "Social Media Planner", description: "Plan your content calendar", status: "Draft", lastRun: "Sep 15", favorite: false, icon: LayoutTemplate, tone: "blue" },
];

export const tools: AgentTool[] = [
  { id: "web", name: "Web Search", description: "Find information online", icon: Globe2, tone: "blue" },
  { id: "file", name: "File Analysis", description: "Read selected files", icon: FileText, tone: "orange" },
  { id: "code", name: "Code Execution", description: "Run code locally (demo)", icon: Code2, tone: "purple" },
  { id: "calculator", name: "Calculator", description: "Solve numerical problems", icon: Calculator, tone: "green" },
  { id: "image", name: "Image Generation", description: "Create visual concepts", icon: Image, tone: "gold" },
  { id: "browser", name: "Browser", description: "Navigate pages (demo)", icon: Globe2, tone: "blue" },
  { id: "data", name: "Data Analysis", description: "Analyze tables and trends", icon: LineChart, tone: "green" },
  { id: "custom", name: "Custom Tool", description: "Configure a future tool", icon: Wrench, tone: "orange" },
];

export const defaultWorkflow: WorkflowStep[] = [
  { id: "understand", title: "Understand Task", description: "Interpret the goal and context", icon: Sparkles },
  { id: "research", title: "Research", description: "Gather relevant information", icon: Search },
  { id: "analyze", title: "Analyze", description: "Connect findings and patterns", icon: BarChart3 },
  { id: "generate", title: "Generate Result", description: "Prepare a useful response", icon: Bot },
];

export const executionSteps = ["Preparing agent...", "Understanding task...", "Processing...", "Generating result...", "Completed"];