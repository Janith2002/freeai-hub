import { GripVertical } from "lucide-react";
import type { WorkflowStep } from "./data";

export function AgentWorkflowStep({ step, index, enabled, onToggle }: { step: WorkflowStep; index: number; enabled: boolean; onToggle: () => void }) {
  const Icon = step.icon;
  return <button className={`agent-workflow-step ${enabled ? "enabled" : "disabled"}`} onClick={onToggle}><span className="workflow-drag"><GripVertical size={14} /></span><span className="workflow-number">{index + 1}</span><span className="workflow-step-icon"><Icon size={15} /></span><span className="workflow-step-copy"><strong>{step.title}</strong><small>{step.description}</small></span><i className="workflow-check" /> </button>;
}