import { Image as ImageIcon, LoaderCircle } from "lucide-react";
import { ImageResultCard } from "./image-result-card";

export function ImageResults({ generating, generated, count, prompt }: { generating: boolean; generated: boolean; count: number; prompt: string }) {
  if (generating) return <section className="image-results-state"><LoaderCircle className="generation-spinner" size={29} /><h3>Generating placeholder images...</h3><p>Simulating a local demo flow. No request is being sent.</p></section>;
  if (!generated) return <section className="image-results-state"><span className="empty-image-icon"><ImageIcon size={27} /></span><h3>Your generated images will appear here</h3><p>Enter a prompt to start</p></section>;
  return <section className="image-results"><div className="results-heading"><div><span className="images-eyebrow">Demo gallery</span><h2>Your results <small>{count} placeholder {count === 1 ? "image" : "images"}</small></h2></div><span className="results-demo-note">PLACEHOLDER DATA</span></div><div className="image-results-grid">{Array.from({ length: count }, (_, index) => <ImageResultCard key={index} prompt={prompt || "A creative image concept"} index={index} />)}</div></section>;
}