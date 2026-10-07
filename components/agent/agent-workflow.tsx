import { ArrowDown, Plus } from "lucide-react";
import type { WorkflowStep } from "./data";
import { AgentWorkflowStep } from "./agent-workflow-step";

export function AgentWorkflow({ steps, enabled, onToggle, onAdd }: { steps: WorkflowStep[]; enabled: Record<string, boolean>; onToggle: (id: string) => void; onAdd: () => void }) {
  return <section className="agent-workflow"><div className="agent-section-heading"><div><span className="agent-eyebrow">04 · Visual flow</span><h2>Agent workflow</h2></div><small>Click steps to enable or disable</small></div><div className="workflow-start"><span>START</span><ArrowDown size={15} /></div><div className="workflow-step-list">{steps.map((step, index) => <div className="workflow-step-wrap" key={step.id}><AgentWorkflowStep step={step} index={index} enabled={enabled[step.id] !== false} onToggle={() => onToggle(step.id)} />{index < steps.length - 1 && <ArrowDown className="workflow-connector" size={15} />}</div>)}</div><button className="add-workflow-step" onClick={onAdd}><Plus size={14} />Add Step</button><div className="workflow-finish">FINISH</div></section>;
}