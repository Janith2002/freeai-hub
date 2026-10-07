import { ChevronDown } from "lucide-react";

export function AgentResultSection({ title, open, onToggle, children }: { title: string; open: boolean; onToggle: () => void; children: React.ReactNode }) {
  return <section className={`agent-result-section ${open ? "open" : ""}`}><button onClick={onToggle}><strong>{title}</strong><ChevronDown size={15} /></button>{open && <div>{children}</div>}</section>;
}