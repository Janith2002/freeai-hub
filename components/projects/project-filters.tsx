import { Filter, ListFilter } from "lucide-react";

export function ProjectFilters({ value, onChange, list, onList }: { value: string; onChange: (value: string) => void; list: boolean; onList: () => void }) {
  return <div className="project-filters"><label><Filter size={14} /><select value={value} onChange={(event) => onChange(event.target.value)} aria-label="Filter projects"><option>All</option><option>Active</option><option>Archived</option><option>Favorites</option></select><span>{value}</span></label><button className={list ? "active" : ""} onClick={onList} aria-label="Switch to list view"><ListFilter size={15} /></button></div>;
}