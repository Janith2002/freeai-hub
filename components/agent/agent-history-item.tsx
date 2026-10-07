import { MoreHorizontal, Star } from "lucide-react";
import type { AgentHistoryItem as AgentHistoryItemData } from "./data";

export function AgentHistoryItem({ agent, selected, onSelect }: { agent: AgentHistoryItemData; selected: boolean; onSelect: () => void }) {
  const Icon = agent.icon;
  return <button className={`agent-history-item ${selected ? "selected" : ""}`} onClick={onSelect}><span className={`agent-history-icon agent-tone-${agent.tone}`}><Icon size={15} /></span><span className="agent-history-copy"><strong>{agent.name}</strong><small>{agent.description}</small><em><i className={`agent-status-dot agent-status-${agent.status.toLowerCase()}`} />{agent.status} · {agent.lastRun}</em></span><span className="agent-history-actions"><Star size={13} fill={agent.favorite ? "currentColor" : "none"} /><MoreHorizontal size={15} /></span></button>;
}