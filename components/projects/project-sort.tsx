import { ArrowDownAZ, ChevronDown } from "lucide-react";

export function ProjectSort({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <label className="project-sort"><ArrowDownAZ size={14} /><select value={value} onChange={(event) => onChange(event.target.value)} aria-label="Sort projects"><option>Recently Updated</option><option>Recently Created</option><option>Name A–Z</option><option>Name Z–A</option></select><span>{value}</span><ChevronDown size={13} /></label>;
}