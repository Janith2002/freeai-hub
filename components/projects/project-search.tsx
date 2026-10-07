import { Search } from "lucide-react";

export function ProjectSearch({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <label className="project-center-search"><Search size={15} /><input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search projects..." aria-label="Search projects in workspace" /></label>;
}