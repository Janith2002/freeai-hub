"use client";

import { Bot, FilePlus2, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { agents, type AgentHistoryItem } from "./data";
import { AgentHistoryItem as HistoryRow } from "./agent-history-item";

export function AgentSidebar({ selectedId, open, onClose, onSelect }: { selectedId: string | null; open: boolean; onClose: () => void; onSelect: (agent: AgentHistoryItem) => void }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => agents.filter((agent) => agent.name.toLowerCase().includes(query.toLowerCase())), [query]);
  const sections = ["Recent", "My Agents", "Templates", "Completed"];
  return <><button className={`agent-drawer-backdrop ${open ? "visible" : ""}`} onClick={onClose} aria-label="Close agent history" /><aside className={`agent-sidebar ${open ? "agent-sidebar-open" : ""}`}><div className="agent-sidebar-header"><div><span className="agent-eyebrow">Workspace</span><h1>AI Agents</h1></div><button className="agent-close" onClick={onClose} aria-label="Close agent history"><X size={17} /></button></div><button className="new-agent-button"><FilePlus2 size={16} />New Agent</button><label className="agent-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search agents" aria-label="Search agents" /></label><div className="agent-history-groups">{sections.map((section) => { const items = filtered.filter((agent) => section === "Recent" ? true : section === "My Agents" ? agent.status === "Ready" || agent.status === "Draft" : section === "Templates" ? agent.status === "Draft" : agent.status === "Completed"); if (!items.length) return null; return <section key={section}><h2>{section}</h2>{items.slice(0, section === "Recent" ? 6 : 3).map((agent) => <HistoryRow key={`${section}-${agent.id}`} agent={agent} selected={selectedId === agent.id} onSelect={() => onSelect(agent)} />)}</section>; })}</div><div className="agent-sidebar-footer"><span className="agent-footer-dot" /><Bot size={13} />Local demo library</div></aside></>;
}