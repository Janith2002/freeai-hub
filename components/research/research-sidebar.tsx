"use client";

import { FilePlus2, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { researchProjects, type ResearchProject } from "./data";
import { ResearchProject as ResearchProjectItem } from "./research-project";

export function ResearchSidebar({ selectedId, open, onClose, onSelect }: { selectedId: string | null; open: boolean; onClose: () => void; onSelect: (project: ResearchProject) => void }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => researchProjects.filter((project) => project.title.toLowerCase().includes(query.toLowerCase())), [query]);
  const sections = ["RECENT", "SAVED", "ARCHIVED"];
  return <><button className={`research-drawer-backdrop ${open ? "visible" : ""}`} onClick={onClose} aria-label="Close research history" /><aside className={`research-sidebar ${open ? "research-sidebar-open" : ""}`}><div className="research-sidebar-header"><div><span className="research-eyebrow">Workspace</span><h1>Research</h1></div><button className="research-close" onClick={onClose} aria-label="Close research sidebar"><X size={17} /></button></div><button className="new-research-button"><FilePlus2 size={16} />New Research</button><label className="research-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search research" aria-label="Search research" /></label><div className="research-project-sections">{sections.map((section) => { const sectionProjects = filtered.filter((project) => section === "RECENT" ? project.status === "In progress" || project.status === "Completed" : section === "SAVED" ? project.status === "Draft" || project.status === "Completed" : project.status === "Archived"); if (!sectionProjects.length) return null; return <section key={section}><h2>{section}</h2>{sectionProjects.map((project) => <ResearchProjectItem key={project.id} project={project} selected={selectedId === project.id} onSelect={() => onSelect(project)} />)}</section>; })}</div><div className="research-sidebar-footer"><span className="research-footer-dot" /><span>Placeholder history</span></div></aside></>;
}