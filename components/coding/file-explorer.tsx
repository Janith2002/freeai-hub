"use client";

import { ChevronDown, ChevronRight, MoreHorizontal, Plus, Search, Upload } from "lucide-react";
import { useMemo, useState } from "react";
import { fileIconMap, projectTree, type ProjectFile } from "./data";

interface FileExplorerProps {
  selectedFile: string;
  onSelectFile: (file: ProjectFile) => void;
  open: boolean;
  onClose: () => void;
}

function FileTreeItem({ file, depth, expanded, onToggle, selectedFile, onSelectFile, query }: { file: ProjectFile; depth: number; expanded: Set<string>; onToggle: (id: string) => void; selectedFile: string; onSelectFile: (file: ProjectFile) => void; query: string }) {
  const Icon = fileIconMap[file.kind];
  const hasChildren = Boolean(file.children?.length);
  const matches = file.name.toLowerCase().includes(query.toLowerCase());
  const childMatches = file.children?.some((child) => child.name.toLowerCase().includes(query.toLowerCase())) ?? false;
  if (query && !matches && !childMatches) return null;
  return <div className="file-tree-node"><button className={`file-tree-row ${selectedFile === file.id ? "selected" : ""}`} style={{ paddingLeft: `${12 + depth * 15}px` }} onClick={() => hasChildren ? onToggle(file.id) : onSelectFile(file)}><span className="tree-chevron">{hasChildren ? (expanded.has(file.id) ? <ChevronDown size={14} /> : <ChevronRight size={14} />) : null}</span><Icon size={16} className={`tree-icon tree-${file.kind}`} /><span className="tree-name">{file.name}</span><MoreHorizontal size={14} className="tree-more" /></button>{hasChildren && expanded.has(file.id) && file.children?.map((child) => <FileTreeItem key={child.id} file={child} depth={depth + 1} expanded={expanded} onToggle={onToggle} selectedFile={selectedFile} onSelectFile={onSelectFile} query={query} />)}</div>;
}

export function FileExplorer({ selectedFile, onSelectFile, open, onClose }: FileExplorerProps) {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<Set<string>>(new Set(["app", "components", "lib", "public"]));
  const toggleFolder = (id: string) => setExpanded((current) => { const next = new Set(current); if (next.has(id)) next.delete(id); else next.add(id); return next; });
  const visibleTree = useMemo(() => projectTree, []);
  return <><div className={`coding-drawer-backdrop ${open ? "visible" : ""}`} onClick={onClose} /><aside className={`file-explorer ${open ? "file-explorer-open" : ""}`}><div className="explorer-header"><div><span className="coding-eyebrow">Workspace</span><h1>Project</h1></div><button className="explorer-close" onClick={onClose} aria-label="Close project explorer">×</button></div><div className="explorer-actions"><button aria-label="New file"><Plus size={15} />File</button><button aria-label="New folder"><Plus size={15} />Folder</button><button aria-label="Upload files"><Upload size={15} /></button></div><label className="file-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search files" aria-label="Search files" /></label><div className="project-root"><span className="project-root-dot" /><strong>FreeAI Project</strong><MoreHorizontal size={15} /></div><div className="file-tree">{visibleTree.map((file) => <FileTreeItem key={file.id} file={file} depth={0} expanded={expanded} onToggle={toggleFolder} selectedFile={selectedFile} onSelectFile={onSelectFile} query={query} />)}</div><div className="explorer-footer"><span className="git-dot" /><span>main</span><span className="sync-status">Synced</span></div></aside></>;
}