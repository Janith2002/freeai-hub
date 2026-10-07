import type { Project } from "./data";
import { ProjectCard } from "./project-card";

export function ProjectGrid({ projects, selectedId, onSelect, onFavorite, onArchive, onDelete, onDuplicate, onRename }: { projects: Project[]; selectedId: string | null; onSelect: (project: Project) => void; onFavorite: (project: Project) => void; onArchive: (project: Project) => void; onDelete: (project: Project) => void; onDuplicate: (project: Project) => void; onRename: (project: Project) => void }) {
  return <div className="project-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} selected={selectedId === project.id} onSelect={() => onSelect(project)} onFavorite={() => onFavorite(project)} onArchive={() => onArchive(project)} onDelete={() => onDelete(project)} onDuplicate={() => onDuplicate(project)} onRename={() => onRename(project)} />)}</div>;
}