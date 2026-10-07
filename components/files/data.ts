import type { LucideIcon } from "lucide-react";
import { BarChart3, FileCode2, FileJson, FileSpreadsheet, FileText, Image, Presentation } from "lucide-react";

export type AnalysisTaskId = "summary" | "key-info" | "questions" | "data" | "text" | "report" | "compare" | "custom";
export type AnalysisDepth = "Quick" | "Standard" | "Deep";
export type ResponseFormat = "Summary" | "Detailed" | "Structured" | "JSON";

export interface FileHistoryItem {
  id: string;
  name: string;
  extension: string;
  type: string;
  size: string;
  time: string;
  favorite: boolean;
  icon: LucideIcon;
  tone: "red" | "blue" | "green" | "gold" | "purple";
}

export interface AnalysisTask {
  id: AnalysisTaskId;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "orange" | "blue" | "purple" | "green" | "gold";
}

export const fileHistory: FileHistoryItem[] = [
  { id: "annual-report", name: "Annual Report 2025.pdf", extension: "PDF", type: "Document", size: "2.4 MB", time: "Today, 10:24 AM", favorite: true, icon: FileText, tone: "red" },
  { id: "sales-data", name: "Sales Data Q4.xlsx", extension: "XLSX", type: "Spreadsheet", size: "842 KB", time: "Yesterday", favorite: false, icon: FileSpreadsheet, tone: "green" },
  { id: "project-notes", name: "Project Notes.docx", extension: "DOCX", type: "Document", size: "128 KB", time: "Monday", favorite: true, icon: FileText, tone: "blue" },
  { id: "api-response", name: "api-response.json", extension: "JSON", type: "Data file", size: "56 KB", time: "Sep 22", favorite: false, icon: FileJson, tone: "gold" },
  { id: "dashboard-image", name: "dashboard-preview.png", extension: "PNG", type: "Image", size: "1.1 MB", time: "Sep 18", favorite: false, icon: Image, tone: "purple" },
];

export const analysisTasks: AnalysisTask[] = [
  { id: "summary", title: "Summarize", description: "Create a concise summary", icon: FileText, tone: "orange" },
  { id: "key-info", title: "Extract Key Information", description: "Find important facts and details", icon: BarChart3, tone: "blue" },
  { id: "questions", title: "Ask Questions", description: "Ask questions about this file", icon: FileCode2, tone: "purple" },
  { id: "data", title: "Analyze Data", description: "Analyze tables and numerical data", icon: FileSpreadsheet, tone: "green" },
  { id: "text", title: "Extract Text", description: "Extract readable text", icon: FileText, tone: "gold" },
  { id: "report", title: "Create Report", description: "Generate a structured report", icon: Presentation, tone: "blue" },
  { id: "compare", title: "Compare Documents", description: "Compare uploaded documents", icon: BarChart3, tone: "purple" },
  { id: "custom", title: "Custom Analysis", description: "Describe what you want AI to analyze", icon: FileCode2, tone: "orange" },
];