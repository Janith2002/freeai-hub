import type { LucideIcon } from "lucide-react";

export function ProjectNavSection({ label, icon: Icon, count, active, onClick }: { label: string; icon: LucideIcon; count?: number; active?: boolean; onClick: () => void }) {
  return <button className={`project-nav-item ${active ? "active" : ""}`} onClick={onClick}><Icon size={16} /><span>{label}</span>{count !== undefined && <small>{count}</small>}</button>;
}