import { CheckCircle2, Clock3, FilePlus2, PlayCircle, Search, Sparkles } from "lucide-react";

const activity = [
  ["Agent created", "Today, 10:40 AM", FilePlus2], ["Task started", "Today, 10:41 AM", PlayCircle], ["Research step completed", "Today, 10:41 AM", Search], ["Analysis completed", "Today, 10:42 AM", CheckCircle2], ["Result generated", "Today, 10:42 AM", Sparkles],
] as const;

export function AgentActivity() {
  return <section className="agent-activity"><div className="agent-settings-title"><Clock3 size={14} /><h3>Activity</h3><span>Demo</span></div><div className="agent-activity-list">{activity.map(([title, time, Icon]) => <div className="agent-activity-row" key={title}><span><Icon size={13} /></span><strong>{title}<small>{time}</small></strong></div>)}</div><p>All activity is fictional demo data.</p></section>;
}