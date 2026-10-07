import { Check, X } from "lucide-react";
import type { Model } from "./data";
import { ModelCapabilities } from "./model-capabilities";
import { ModelStatus } from "./model-status";

export function ModelComparison({ models, onClose }: { models: Model[]; onClose: () => void }) {
  return <div className="comparison-backdrop"><section className="comparison-modal" role="dialog" aria-modal="true"><div className="comparison-header"><div><span className="models-eyebrow">Side-by-side view</span><h2>Compare Models</h2><p>Demo information only. No winner or ranking is calculated.</p></div><button onClick={onClose} aria-label="Close model comparison"><X size={18} /></button></div><div className="comparison-table"><div className="comparison-labels"><span>Model</span><span>Provider</span><span>Capabilities</span><span>Context</span><span>Status</span><span>Availability</span></div>{models.map((model) => <div className="comparison-column" key={model.id}><strong>{model.name}</strong><span>{model.provider}</span><ModelCapabilities capabilities={model.capabilities} /><span>Demo value</span><ModelStatus status={model.status} /><span>{model.availability}</span></div>)}</div><div className="comparison-footer"><Check size={14} />Information is presented side-by-side only.</div></section></div>;
}