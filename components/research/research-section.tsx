import { ChevronDown } from "lucide-react";

export function ResearchSection({ title, open, onToggle, children }: { title: string; open: boolean; onToggle: () => void; children: React.ReactNode }) {
  return <section className={`research-result-section ${open ? "open" : ""}`}><button className="research-section-header" onClick={onToggle}><span>{title}</span><ChevronDown size={16} /></button>{open && <div className="research-section-body">{children}</div>}</section>;
}