"use client";

import { FilePlus2, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { fileHistory, type FileHistoryItem } from "./data";
import { FileHistoryItem as HistoryRow } from "./file-history-item";

export function FileSidebar({ selectedId, open, onClose, onSelect }: { selectedId: string | null; open: boolean; onClose: () => void; onSelect: (file: FileHistoryItem) => void }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => fileHistory.filter((file) => file.name.toLowerCase().includes(query.toLowerCase())), [query]);
  const sections = ["Recent", "Starred", "Documents", "Spreadsheets", "PDFs"];
  return <><button className={`files-drawer-backdrop ${open ? "visible" : ""}`} onClick={onClose} aria-label="Close file history" /><aside className={`file-sidebar ${open ? "file-sidebar-open" : ""}`}><div className="files-sidebar-header"><div><span className="files-eyebrow">Workspace</span><h1>File Analysis</h1></div><button className="files-close" onClick={onClose} aria-label="Close file history"><X size={17} /></button></div><button className="new-analysis-button"><FilePlus2 size={16} />New Analysis</button><label className="files-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search files" aria-label="Search files" /></label><div className="file-history-groups">{sections.map((section) => { const items = filtered.filter((file) => section === "Recent" ? true : section === "Starred" ? file.favorite : section === "Documents" ? file.type === "Document" : section === "Spreadsheets" ? file.type === "Spreadsheet" : file.extension === "PDF"); if (!items.length) return null; return <section key={section}><h2>{section}</h2>{items.slice(0, section === "Recent" ? 5 : 3).map((file) => <HistoryRow key={`${section}-${file.id}`} item={file} selected={selectedId === file.id} onSelect={() => onSelect(file)} />)}</section>; })}</div><div className="file-sidebar-footer"><span className="file-footer-dot" />Local demo history</div></aside></>;
}