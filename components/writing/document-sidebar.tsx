"use client";

import { FilePlus2, FolderPlus, Search, Upload, X } from "lucide-react";
import { useMemo, useState } from "react";
import { documents, templates, type WritingDocument, type WritingTemplate } from "./data";
import { DocumentList } from "./document-list";
import { TemplateList } from "./template-list";

export function DocumentSidebar({ selectedId, selectedTemplate, open, onClose, onSelectDocument, onSelectTemplate }: { selectedId: string; selectedTemplate: string | null; open: boolean; onClose: () => void; onSelectDocument: (document: WritingDocument) => void; onSelectTemplate: (template: WritingTemplate) => void }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => documents.filter((document) => document.title.toLowerCase().includes(query.toLowerCase())), [query]);
  return <><button className={`writing-drawer-backdrop ${open ? "visible" : ""}`} onClick={onClose} aria-label="Close writing documents" /><aside className={`document-sidebar ${open ? "document-sidebar-open" : ""}`}><div className="writing-sidebar-header"><div><span className="writing-eyebrow">Workspace</span><h1>Writing</h1></div><button className="writing-sidebar-close" onClick={onClose} aria-label="Close writing sidebar"><X size={17} /></button></div><button className="new-document-button"><FilePlus2 size={16} />New Document</button><label className="writing-document-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search documents" aria-label="Search documents" /></label><section className="document-section"><h2>Recent</h2><DocumentList documents={filtered} selectedId={selectedId} onSelect={onSelectDocument} /></section><section className="document-section templates-section"><div className="template-heading"><h2>Templates</h2><FolderPlus size={14} /></div><TemplateList templates={templates} selectedName={selectedTemplate} onSelect={onSelectTemplate} /></section><div className="writing-sidebar-footer"><Upload size={14} /><span>Import a document</span></div></aside></>;
}