"use client";

import { Filter, X } from "lucide-react";
import { useMemo, useState } from "react";
import { sourceItems, type SourceType } from "./data";
import { SourceCard } from "./source-card";

const filters: Array<"All" | SourceType> = ["All", "Articles", "Research Papers", "News", "Websites"];

export function SourcesPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [filter, setFilter] = useState<"All" | SourceType>("All");
  const [selected, setSelected] = useState<string[]>([]);
  const visibleSources = useMemo(() => filter === "All" ? sourceItems : sourceItems.filter((source) => source.type === filter), [filter]);
  const toggleSource = (id: string) => setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  return <aside className={`sources-panel ${open ? "sources-panel-open" : ""}`}><div className="sources-header"><div><span className="research-eyebrow">Placeholder data</span><h2>Sources <small>12 found</small></h2></div><button className="sources-close" onClick={onClose} aria-label="Close sources"><X size={17} /></button></div><div className="source-filters"><Filter size={13} />{filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="source-list">{visibleSources.map((source) => <SourceCard key={source.id} source={source} selected={selected.includes(source.id)} onToggle={() => toggleSource(source.id)} />)}</div><p className="sources-disclaimer">All source cards are fictional examples for the frontend prototype.</p></aside>;
}