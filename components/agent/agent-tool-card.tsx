import type { AgentTool } from "./data";

export function AgentToolCard({ tool, enabled, onToggle }: { tool: AgentTool; enabled: boolean; onToggle: () => void }) {
  const Icon = tool.icon;
  return <button className={`agent-tool-card ${enabled ? "enabled" : ""}`} onClick={onToggle} aria-pressed={enabled}><span className={`agent-tool-icon agent-tool-${tool.tone}`}><Icon size={16} /></span><span><strong>{tool.name}</strong><small>{tool.description}</small></span><i className="agent-toggle"><b /></i></button>;
}