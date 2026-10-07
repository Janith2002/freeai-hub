import type { LucideIcon } from "lucide-react";
import { AtSign, BookOpen, FileText, GraduationCap, Mail, Megaphone, Newspaper, ScrollText, UserRound } from "lucide-react";

export interface WritingDocument {
  id: string;
  title: string;
  edited: string;
  type: string;
  icon: LucideIcon;
  tone: "orange" | "blue" | "purple" | "green" | "yellow";
}

export interface WritingTemplate {
  name: string;
  description: string;
  icon: LucideIcon;
  tone: "orange" | "blue" | "purple" | "green" | "yellow";
}

export const documents: WritingDocument[] = [
  { id: "cover-letter", title: "Job Application Cover Letter", edited: "Just now", type: "Cover letter", icon: FileText, tone: "orange" },
  { id: "professional-email", title: "Professional Email", edited: "2 hours ago", type: "Email", icon: Mail, tone: "blue" },
  { id: "research-summary", title: "Research Summary", edited: "Yesterday", type: "Research", icon: BookOpen, tone: "purple" },
  { id: "blog-article", title: "Blog Article", edited: "Monday", type: "Blog post", icon: Newspaper, tone: "green" },
  { id: "project-docs", title: "Project Documentation", edited: "Sunday", type: "Documentation", icon: ScrollText, tone: "yellow" },
];

export const templates: WritingTemplate[] = [
  { name: "Cover Letter", description: "Make a strong first impression", icon: FileText, tone: "orange" },
  { name: "Resume", description: "Showcase your experience", icon: UserRound, tone: "blue" },
  { name: "Email", description: "Clear and professional emails", icon: Mail, tone: "purple" },
  { name: "Blog Post", description: "Turn ideas into articles", icon: Newspaper, tone: "green" },
  { name: "Report", description: "Organize your findings", icon: ScrollText, tone: "yellow" },
  { name: "Academic Writing", description: "Structure your research", icon: GraduationCap, tone: "blue" },
  { name: "Social Media Post", description: "Short, engaging copy", icon: Megaphone, tone: "orange" },
];

export const toneOptions = ["Professional", "Friendly", "Formal", "Casual", "Academic", "Creative"];

export const assistantActions = [
  { label: "Improve writing", icon: AtSign }, { label: "Fix grammar", icon: BookOpen }, { label: "Make professional", icon: UserRound },
  { label: "Make shorter", icon: ScrollText }, { label: "Make longer", icon: FileText }, { label: "Simplify", icon: GraduationCap },
  { label: "Change tone", icon: Megaphone }, { label: "Continue writing", icon: Newspaper }, { label: "Summarize", icon: Mail },
];