"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import type { ProjectType } from "./data";

export function NewProjectModal({ open, onClose, onCreate }: { open: boolean; onClose: () => void; onCreate: (name: string, description: string, type: ProjectType) => void }) {
  const [name, setName] = useState(""); const [description, setDescription] = useState(""); const [type, setType] = useState<ProjectType>("General");
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); }; if (open) document.addEventListener("keydown", close); return () => document.removeEventListener("keydown", close); }, [open, onClose]);
  if (!open) return null;
  return <div className="project-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><section className="new-project-modal" role="dialog" aria-modal="true" aria-labelledby="new-project-title"><div className="modal-header"><div><span className="projects-eyebrow">Local demo</span><h2 id="new-project-title">Create a new project</h2></div><button onClick={onClose} aria-label="Close new project modal"><X size={18} /></button></div><label>Project Name<input autoFocus value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. Product Launch" /></label><label>Description<textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="What will you work on here?" /></label><label>Project Type<select value={type} onChange={(event) => setType(event.target.value as ProjectType)}>{["General", "Chat", "Coding", "Writing", "Research", "Images", "Files", "Agents"].map((option) => <option key={option}>{option}</option>)}</select></label><div className="modal-actions"><button onClick={onClose}>Cancel</button><button className="create-project-button" disabled={!name.trim()} onClick={() => { onCreate(name.trim(), description.trim(), type); setName(""); setDescription(""); setType("General"); }}>Create Project</button></div></section></div>;
}