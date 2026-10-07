import { Bot, FileText, Image, MessageCircle, Search } from "lucide-react";

const activity = [["Chat conversation added", MessageCircle], ["Research report created", Search], ["Image generated", Image], ["File analyzed", FileText], ["Agent run completed", Bot]] as const;

export function ProjectActivity() { return <section className="project-activity"><div className="project-panel-title"><h3>Activity</h3><span>Demo Activity</span></div><div>{activity.map(([title, Icon]) => <p key={title}><Icon size={14} /><span>{title}<small>Recently</small></span></p>)}</div><em>All activity is fictional placeholder data.</em></section>; }