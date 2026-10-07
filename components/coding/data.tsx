import type { LucideIcon } from "lucide-react";
import { Braces, FileCode2, FileJson, FileText, Folder, FolderOpen, Image } from "lucide-react";

export type FileKind = "folder" | "tsx" | "css" | "json" | "md" | "svg" | "ts";

export interface ProjectFile {
  id: string;
  name: string;
  kind: FileKind;
  children?: ProjectFile[];
}

export interface EditorTab {
  id: string;
  name: string;
  language: string;
  kind: FileKind;
}

export const projectTree: ProjectFile[] = [
  { id: "app", name: "app", kind: "folder", children: [
    { id: "app-page", name: "page.tsx", kind: "tsx" },
    { id: "app-layout", name: "layout.tsx", kind: "tsx" },
    { id: "app-global", name: "globals.css", kind: "css" },
  ] },
  { id: "components", name: "components", kind: "folder", children: [
    { id: "component-header", name: "Header.tsx", kind: "tsx" },
    { id: "component-sidebar", name: "Sidebar.tsx", kind: "tsx" },
    { id: "component-chat", name: "Chat.tsx", kind: "tsx" },
  ] },
  { id: "lib", name: "lib", kind: "folder", children: [{ id: "lib-utils", name: "utils.ts", kind: "ts" }] },
  { id: "public", name: "public", kind: "folder", children: [{ id: "public-logo", name: "logo.svg", kind: "svg" }] },
  { id: "package", name: "package.json", kind: "json" },
  { id: "readme", name: "README.md", kind: "md" },
];

export const editorTabs: EditorTab[] = [
  { id: "app-page", name: "page.tsx", language: "TypeScript React", kind: "tsx" },
  { id: "app-layout", name: "layout.tsx", language: "TypeScript React", kind: "tsx" },
  { id: "app-global", name: "globals.css", language: "CSS", kind: "css" },
];

export const codeLines = [
  <span key="import"><span className="syntax-keyword">import</span> <span className="syntax-brace">&#123;</span> Dashboard <span className="syntax-brace">&#125;</span> <span className="syntax-keyword">from</span> <span className="syntax-string">&quot;@/components/dashboard&quot;</span>;</span>,
  <span key="blank" />,
  <span key="function"><span className="syntax-keyword">export default function</span> <span className="syntax-function">Home</span>() <span className="syntax-brace">&#123;</span></span>,
  <span key="return" className="syntax-indent"><span className="syntax-keyword">return</span> (</span>,
  <span key="main-open" className="syntax-indent-2"><span className="syntax-tag">&lt;main</span> <span className="syntax-attr">className</span>=<span className="syntax-string">&quot;min-h-screen bg-slate-50&quot;</span><span className="syntax-tag">&gt;</span></span>,
  <span key="dashboard" className="syntax-indent-3"><span className="syntax-tag">&lt;Dashboard /&gt;</span></span>,
  <span key="main-close" className="syntax-indent-2"><span className="syntax-tag">&lt;/main&gt;</span></span>,
  <span key="close" className="syntax-indent">);</span>,
  <span key="end" className="syntax-brace">&#125;</span>,
];

export const fileIconMap: Record<FileKind, LucideIcon> = {
  folder: Folder,
  tsx: FileCode2,
  css: Braces,
  json: FileJson,
  md: FileText,
  svg: Image,
  ts: FileCode2,
};

export const FolderOpenIcon = FolderOpen;