"use client";

import { FileText, Menu, PanelRight, Search } from "lucide-react";
import { useState } from "react";
import { DocumentEditor } from "./document-editor";
import { DocumentSidebar } from "./document-sidebar";
import { documents, type WritingDocument, type WritingTemplate } from "./data";
import { WritingAssistant } from "./writing-assistant";
import { WritingCommandBar } from "./writing-command-bar";

export function WritingWorkspace() {
  const [selectedDocument, setSelectedDocument] = useState<WritingDocument>(documents[0]);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const selectDocument = (document: WritingDocument) => { setSelectedDocument(document); setSelectedTemplate(null); setSidebarOpen(false); };
  const selectTemplate = (template: WritingTemplate) => { setSelectedTemplate(template.name); setSidebarOpen(false); };
  return <div className="writing-page"><header className="writing-topbar"><button className="writing-mobile-menu" onClick={() => setSidebarOpen(true)} aria-label="Open writing documents"><Menu size={19} /></button><div className="writing-brand"><span><FileText size={17} /></span><b>FreeAI</b> Write <em>Preview</em></div><div className="writing-breadcrumb"><span>Writing</span><span>/</span><strong>{selectedDocument.title}</strong></div><div className="writing-top-actions"><button aria-label="Search writing workspace"><Search size={17} /></button><button className="writing-open-assistant" onClick={() => setAssistantOpen(true)}><PanelRight size={15} />Assistant</button></div></header><div className="writing-body"><DocumentSidebar selectedId={selectedDocument.id} selectedTemplate={selectedTemplate} open={sidebarOpen} onClose={() => setSidebarOpen(false)} onSelectDocument={selectDocument} onSelectTemplate={selectTemplate} /><main className="writing-main"><DocumentEditor title={selectedDocument.title} onSave={() => undefined} /><WritingCommandBar /></main><WritingAssistant open={assistantOpen} onClose={() => setAssistantOpen(false)} /><button className="writing-mobile-assistant" onClick={() => setAssistantOpen(true)} aria-label="Open writing assistant"><PanelRight size={17} /></button></div></div>;
}