import { Check, Copy, Download, MoreHorizontal, Star } from "lucide-react";
import { useState } from "react";

export function ImageResultCard({ prompt, index }: { prompt: string; index: number }) {
  const [copied, setCopied] = useState(false);
  const copyPrompt = async () => { await navigator.clipboard?.writeText(prompt); setCopied(true); window.setTimeout(() => setCopied(false), 1500); };
  return <article className="image-result-card"><div className={`result-art result-art-${index % 4}`}><span className="result-placeholder-label">PLACEHOLDER IMAGE</span><span className="result-art-shape shape-one" /><span className="result-art-shape shape-two" /><span className="result-art-grid" /><small>Demo result — no AI image API connected</small></div><div className="result-card-body"><p>{prompt}</p><div><button aria-label="Download image"><Download size={14} /></button><button onClick={copyPrompt} aria-label="Copy prompt">{copied ? <Check size={14} /> : <Copy size={14} />}</button><button aria-label="Favorite image"><Star size={14} /></button><button aria-label="More image options"><MoreHorizontal size={15} /></button></div></div></article>;
}