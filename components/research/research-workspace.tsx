"use client";

import { BookOpen, Menu, PanelRight, Search } from "lucide-react";
import { useState } from "react";
import type { ResearchProject } from "./data";
import { ReportOptions } from "./report-options";
import { ResearchInput } from "./research-input";
import { ResearchResults } from "./research-results";
import { ResearchSettings } from "./research-settings";
import { ResearchSidebar } from "./research-sidebar";
import { SourcesPanel } from "./sources-panel";

export function ResearchWorkspace() {
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);
  const [researchStarted, setResearchStarted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const [query, setQuery] = useState("");
  const startResearch = (value: string) => { setQuery(value); setResearchStarted(true); };
  const selectProject = (project: ResearchProject) => { setSelectedProject(project); setResearchStarted(project.status === "Completed"); setQuery(project.title); setSidebarOpen(false); };
  return <div className="research-page"><header className="research-topbar"><button className="research-mobile-menu" onClick={() => setSidebarOpen(true)} aria-label="Open research history"><Menu size={19} /></button><div className="research-brand"><span><BookOpen size={17} /></span><b>FreeAI</b> Research <em>Preview</em></div><div className="research-breadcrumb"><span>Research</span><span>/</span><strong>{selectedProject?.title ?? "New research"}</strong></div><div className="research-top-actions"><button aria-label="Search research workspace"><Search size={17} /></button><button className="research-open-sources" onClick={() => setSourcesOpen(true)}><PanelRight size={15} />Sources</button></div></header><div className="research-body"><ResearchSidebar selectedId={selectedProject?.id ?? null} open={sidebarOpen} onClose={() => setSidebarOpen(false)} onSelect={selectProject} /><main className="research-main">{researchStarted ? <ResearchResults query={query} /> : <div className="research-empty"><div className="research-empty-icon"><Search size={24} /></div><h1>Research anything</h1><p>Search, analyze and organize information with AI.</p><ResearchInput onStart={startResearch} /><div className="research-empty-note"><span>Tip</span> Start with a focused question for a clearer placeholder report.</div></div>}<div className="research-main-bottom"><ResearchSettings /><ReportOptions /></div></main><SourcesPanel open={sourcesOpen} onClose={() => setSourcesOpen(false)} /><button className="research-mobile-sources" onClick={() => setSourcesOpen(true)} aria-label="Open sources"><PanelRight size={17} /></button></div></div>;
}