import { ArrowUpRight } from "lucide-react";
import { promptIdeas } from "./data";

export function PromptIdeas({ onSelect }: { onSelect: (prompt: string) => void }) {
  return <section className="prompt-ideas"><div className="prompt-ideas-heading"><div><span className="images-eyebrow">Get inspired</span><h2>Prompt Ideas</h2></div><span>Click to use</span></div><div className="prompt-ideas-grid">{promptIdeas.map((idea) => { const Icon = idea.icon; return <button key={idea.title} onClick={() => onSelect(idea.prompt)}><span className={`idea-icon idea-${idea.tone}`}><Icon size={17} /></span><span><strong>{idea.title}</strong><small>{idea.prompt}</small></span><ArrowUpRight size={15} /></button>; })}</div></section>;
}