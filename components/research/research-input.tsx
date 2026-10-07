"use client";

import { ChevronDown, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { useState } from "react";

export function ResearchInput({ onStart }: { onStart: (query: string) => void }) {
  const [query, setQuery] = useState("");
  const [depth, setDepth] = useState("Standard");
  const [mode, setMode] = useState("Web Research");
  const submit = () => onStart(query.trim() || "AI Automation Tools in 2026");
  return <section className="research-input-card"><div className="research-input-label"><span className="research-input-icon"><Search size={18} /></span><div><strong>What would you like to research?</strong><small>Use a clear question or topic for a better placeholder report.</small></div></div><textarea value={query} onChange={(event) => setQuery(event.target.value)} placeholder="e.g. Compare the best AI automation tools for small teams..." aria-label="Research question" /><div className="research-input-controls"><div className="research-choice"><span>Depth</span><label><select value={depth} onChange={(event) => setDepth(event.target.value)} aria-label="Research depth"><option>Quick</option><option>Standard</option><option>Deep</option></select>{depth}<ChevronDown size={14} /></label></div><div className="research-choice"><span>Mode</span><label><select value={mode} onChange={(event) => setMode(event.target.value)} aria-label="Research mode"><option>Web Research</option><option>Academic</option><option>News</option><option>General</option></select>{mode}<ChevronDown size={14} /></label></div><button className="advanced-options"><SlidersHorizontal size={15} />Advanced Options</button><button className="start-research-button" onClick={submit}><Sparkles size={16} />Start Research</button></div></section>;
}