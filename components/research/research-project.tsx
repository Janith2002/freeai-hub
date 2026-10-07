import { MoreHorizontal } from "lucide-react";
import type { ResearchProject } from "./data";

export function ResearchProject({ project, selected, onSelect }: { project: ResearchProject; selected: boolean; onSelect: () => void }) {
  return <button className={`research-project ${selected ? "selected" : ""}`} onClick={onSelect}><span className="research-project-mark" /><span className="research-project-copy"><strong>{project.title}</strong><small>{project.date} <i /> {project.status}</small></span><MoreHorizontal size={15} className="research-project-menu" /></button>;
}