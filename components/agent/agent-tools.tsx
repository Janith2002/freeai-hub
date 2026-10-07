import { tools, type AgentToolId } from "./data";
import { AgentToolCard } from "./agent-tool-card";

export function AgentTools({ enabled, onToggle }: { enabled: AgentToolId[]; onToggle: (id: AgentToolId) => void }) {
  return <section className="agent-tools-section"><div className="agent-section-heading"><div><span className="agent-eyebrow">03 · UI toggles only</span><h2>Tools</h2></div><small>{enabled.length} selected</small></div><div className="agent-tools-grid">{tools.map((tool) => <AgentToolCard key={tool.id} tool={tool} enabled={enabled.includes(tool.id)} onToggle={() => onToggle(tool.id)} />)}</div></section>;
}