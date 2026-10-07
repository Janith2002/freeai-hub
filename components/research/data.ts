import type { LucideIcon } from "lucide-react";
import { FileText, FlaskConical, Globe2, Newspaper, ScrollText } from "lucide-react";

export type ResearchStatus = "In progress" | "Completed" | "Draft" | "Archived";
export type SourceType = "Articles" | "Research Papers" | "News" | "Websites";

export interface ResearchProject {
  id: string;
  title: string;
  date: string;
  status: ResearchStatus;
}

export interface SourceItem {
  id: string;
  title: string;
  domain: string;
  url: string;
  date: string;
  description: string;
  type: SourceType;
  icon: LucideIcon;
  tone: "orange" | "blue" | "purple" | "green";
}

export const researchProjects: ResearchProject[] = [
  { id: "automation", title: "AI Automation Tools", date: "Today", status: "In progress" },
  { id: "renewable", title: "Renewable Energy in Sri Lanka", date: "Yesterday", status: "Completed" },
  { id: "free-apis", title: "Free AI APIs", date: "Monday", status: "Draft" },
  { id: "engineering", title: "Software Engineering Trends", date: "Sep 22", status: "Completed" },
  { id: "remote-work", title: "Remote Work Opportunities", date: "Sep 18", status: "Archived" },
];

export const sourceItems: SourceItem[] = [
  { id: "source-1", title: "AI Automation Guide", domain: "example.com", url: "https://example.com/ai-automation", date: "2026", description: "A fictional overview of automation workflows and common use cases.", type: "Articles", icon: Globe2, tone: "blue" },
  { id: "source-2", title: "The Future of Intelligent Work", domain: "research.example.org", url: "https://research.example.org/intelligent-work", date: "2026", description: "Placeholder research paper about human and AI collaboration.", type: "Research Papers", icon: FlaskConical, tone: "purple" },
  { id: "source-3", title: "Automation Trends This Year", domain: "news.example.net", url: "https://news.example.net/automation-trends", date: "2026", description: "Fictional news coverage of emerging automation patterns.", type: "News", icon: Newspaper, tone: "orange" },
  { id: "source-4", title: "Practical AI Workflows", domain: "docs.example.com", url: "https://docs.example.com/workflows", date: "2025", description: "Example documentation for organizing repeatable AI workflows.", type: "Websites", icon: FileText, tone: "green" },
  { id: "source-5", title: "Automation Strategy Brief", domain: "briefs.example.org", url: "https://briefs.example.org/strategy", date: "2026", description: "Placeholder executive brief comparing automation approaches.", type: "Articles", icon: ScrollText, tone: "blue" },
];

export const keyFindings = [
  "Teams tend to begin with repetitive, text-heavy workflows before expanding into more complex automation.",
  "The strongest early results come from clear review steps rather than fully hands-off processes.",
  "Shared context, reusable prompts, and consistent evaluation make automation easier to maintain.",
  "Small teams can often benefit from lightweight tools when the problem and success metric are well defined.",
];