import { ArrowUpRight } from "lucide-react";
import type { Suggestion } from "./data";

export function SuggestionCard({ suggestion, onSelect }: { suggestion: Suggestion; onSelect: () => void }) {
  const Icon = suggestion.icon;
  return <button className="suggestion-card" onClick={onSelect}><span className={`suggestion-icon suggestion-${suggestion.tone}`}><Icon size={19} /></span><span><strong>{suggestion.title}</strong><small>{suggestion.prompt}</small></span><ArrowUpRight size={16} /></button>;
}