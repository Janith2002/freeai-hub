"use client";

import "./agent.css";
import { Bot, Menu, PanelRight, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { agents, executionSteps, type AgentHistoryItem } from "./data";
import { AgentBuilder } from "./agent-builder";
import { AgentSettings } from "./agent-settings";
import { AgentSidebar } from "./agent-sidebar";

export function AgentWorkspace() {
  const [selected, setSelected] = useState<AgentHistoryItem>(agents[0]);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [executionIndex, setExecutionIndex] = useState(-1);
  const [completed, setCompleted] = useState(false);
  useEffect(() => { if (executionIndex < 0 || executionIndex >= executionSteps.length) return; const timer = window.setTimeout(() => { if (executionIndex === executionSteps.length - 1) { setCompleted(true); setExecutionIndex(-1); } else { setExecutionIndex((current) => current + 1); } }, 560); return () => window.clearTimeout(timer); }, [executionIndex]);
  const runAgent = () => { setCompleted(false); setExecutionIndex(0); };
  const running = executionIndex >= 0 && executionIndex < executionSteps.length;
  return <div className="agent-page"><header className="agent-topbar"><button className="agent-mobile-menu" onClick={() => setHistoryOpen(true)} aria-label="Open agent history"><Menu size={19} /></button><div className="agent-brand"><span><Bot size={17} /></span><b>FreeAI</b> Agent <em>Preview</em></div><div className="agent-breadcrumb"><span>AI Agents</span><span>/</span><strong>{selected.name}</strong></div><div className="agent-top-actions"><button aria-label="Search agent workspace"><Search size={17} /></button><button className="agent-settings-button" onClick={() => setSettingsOpen(true)}><PanelRight size={15} />Settings</button></div></header><div className="agent-body"><AgentSidebar selectedId={selected.id} open={historyOpen} onClose={() => setHistoryOpen(false)} onSelect={(agent) => { setSelected(agent); setCompleted(false); setHistoryOpen(false); }} /><main className="agent-main"><AgentBuilder agentName={selected.name} running={running} completed={completed} onRun={runAgent} /></main><AgentSettings open={settingsOpen} onClose={() => setSettingsOpen(false)} /><button className="agent-mobile-settings" onClick={() => setSettingsOpen(true)} aria-label="Open agent settings"><PanelRight size={17} /></button></div></div>;
}