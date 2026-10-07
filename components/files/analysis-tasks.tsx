import { analysisTasks, type AnalysisTaskId } from "./data";
import { AnalysisTaskCard } from "./analysis-task-card";

export function AnalysisTasks({ selected, onSelect }: { selected: AnalysisTaskId; onSelect: (id: AnalysisTaskId) => void }) {
  return <section className="analysis-tasks"><div className="file-section-heading"><div><span className="files-eyebrow">Choose an action</span><h2>What would you like to do?</h2></div><small>Select one task</small></div><div className="analysis-task-grid">{analysisTasks.map((task) => <AnalysisTaskCard key={task.id} task={task} selected={selected === task.id} onSelect={() => onSelect(task.id)} />)}</div></section>;
}