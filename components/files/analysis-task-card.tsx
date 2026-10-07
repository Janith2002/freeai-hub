import type { AnalysisTask } from "./data";

export function AnalysisTaskCard({ task, selected, onSelect }: { task: AnalysisTask; selected: boolean; onSelect: () => void }) {
  const Icon = task.icon;
  return <button className={`analysis-task-card ${selected ? "selected" : ""}`} onClick={onSelect}><span className={`task-icon task-${task.tone}`}><Icon size={17} /></span><span><strong>{task.title}</strong><small>{task.description}</small></span>{selected && <i className="task-selected-dot" />}</button>;
}