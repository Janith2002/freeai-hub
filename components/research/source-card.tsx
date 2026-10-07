import { Check, ExternalLink } from "lucide-react";
import type { SourceItem } from "./data";

export function SourceCard({ source, selected, onToggle }: { source: SourceItem; selected: boolean; onToggle: () => void }) {
  const Icon = source.icon;
  return <article className={`source-card ${selected ? "selected" : ""}`}><button className={`source-checkbox ${selected ? "checked" : ""}`} onClick={onToggle} aria-label={`Select ${source.title}`}>{selected && <Check size={12} />}</button><span className={`source-favicon source-${source.tone}`}><Icon size={15} /></span><div className="source-copy"><strong>{source.title}</strong><span>{source.domain} <i /> {source.date}</span><p>{source.description}</p></div><button className="source-open" aria-label={`Open ${source.title}`}><ExternalLink size={14} /></button></article>;
}