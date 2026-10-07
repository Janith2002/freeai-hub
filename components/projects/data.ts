import type { LucideIcon } from "lucide-react";
import { Bot, Code2, FileText, Image, MessageCircle, Search, PenLine, FolderKanban } from "lucide-react";

export type ProjectType = "General" | "Chat" | "Coding" | "Writing" | "Research" | "Images" | "Files" | "Agents";
export type ProjectStatus = "Active" | "Archived";

export interface Project {
  id: string;
  name: string;
  description: string;
  type: ProjectType;
  updated: string;
  created: string;
  items: number;
  favorite: boolean;
  status: ProjectStatus;
  icon: LucideIcon;
  tone: "orange" | "blue" | "purple" | "green" | "gold";
}

export interface ProjectContentItem { title: string; type: string; time: string; icon: LucideIcon; }

export const projects: Project[] = [
  { id: "research-hub", name: "AI Research Hub", description: "Collect research and ideas about the future of AI.", type: "Research", updated: "Today, 10:32 AM", created: "Sep 12, 2026", items: 18, favorite: true, status: "Active", icon: Search, tone: "blue" },
  { id: "smart-school", name: "Smart School Project", description: "Plan a thoughtful learning experience for students.", type: "Coding", updated: "Yesterday", created: "Sep 8, 2026", items: 24, favorite: false, status: "Active", icon: Code2, tone: "purple" },
  { id: "content-workspace", name: "Content Creation Workspace", description: "Draft, refine, and organize marketing content.", type: "Writing", updated: "Monday", created: "Aug 28, 2026", items: 32, favorite: true, status: "Active", icon: PenLine, tone: "orange" },
  { id: "image-studio", name: "Image Design Studio", description: "A home for visual concepts and image prompts.", type: "Images", updated: "Sep 22", created: "Aug 20, 2026", items: 12, favorite: false, status: "Active", icon: Image, tone: "gold" },
  { id: "data-analysis", name: "Data Analysis Project", description: "Explore datasets and turn numbers into decisions.", type: "Files", updated: "Sep 18", created: "Aug 16, 2026", items: 9, favorite: false, status: "Active", icon: FileText, tone: "green" },
  { id: "coding-assistant", name: "Coding Assistant", description: "Reusable coding notes, snippets, and experiments.", type: "Chat", updated: "Sep 15", created: "Aug 9, 2026", items: 16, favorite: true, status: "Active", icon: MessageCircle, tone: "blue" },
  { id: "research-notes", name: "Research Notes", description: "A quiet space for saved reading notes.", type: "Research", updated: "Sep 7", created: "Jul 30, 2026", items: 14, favorite: false, status: "Archived", icon: FolderKanban, tone: "purple" },
  { id: "marketing-automation", name: "Marketing Automation", description: "Plan a more consistent content workflow.", type: "Agents", updated: "Sep 2", created: "Jul 19, 2026", items: 21, favorite: false, status: "Active", icon: Bot, tone: "orange" },
];

export const categoryItems: Array<{ type: ProjectType; icon: LucideIcon }> = [
  { type: "Chat", icon: MessageCircle }, { type: "Coding", icon: Code2 }, { type: "Writing", icon: PenLine }, { type: "Research", icon: Search }, { type: "Images", icon: Image }, { type: "Files", icon: FileText }, { type: "Agents", icon: Bot },
];

export const projectContent: ProjectContentItem[] = [
  { title: "AI Automation Tools discussion", type: "AI Chat", time: "Today, 10:32 AM", icon: MessageCircle },
  { title: "AI trends research report", type: "Research Report", time: "Yesterday", icon: Search },
  { title: "Professional project brief", type: "Writing Document", time: "Monday", icon: PenLine },
  { title: "Concept direction board", type: "Image Generation", time: "Sep 22", icon: Image },
  { title: "Quarterly notes.pdf", type: "File Analysis", time: "Sep 18", icon: FileText },
  { title: "Research workflow run", type: "Agent Task", time: "Sep 15", icon: Bot },
];