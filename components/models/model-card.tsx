import { Check, MoreHorizontal, Star } from "lucide-react";
import type { Model } from "./data";
import { ModelCapabilities } from "./model-capabilities";
import { ModelStatus } from "./model-status";

export function ModelCard({ model, selected, compared, onSelect, onFavorite, onCompare, onDefault }: { model: Model; selected: boolean; compared: boolean; onSelect: () => void; onFavorite: () => void; onCompare: () => void; onDefault: () => void }) {
  const Icon = model.icon;
  return <article className={`model-card ${selected ? "selected" : ""}`}><div className="model-card-top"><button className={`compare-checkbox ${compared ? "checked" : ""}`} onClick={onCompare} aria-label={`Compare ${model.name}`}>{compared && <Check size={11} />}</button><span className={`model-card-icon model-${model.tone}`}><Icon size={19} /></span><ModelStatus status={model.status} /><button className="model-card-more" aria-label={`More actions for ${model.name}`}><MoreHorizontal size={16} /></button></div><button className="model-card-body" onClick={onSelect}><h3>{model.name}</h3><p>{model.provider} · {model.type}</p><ModelCapabilities capabilities={model.capabilities} /><div className="model-card-meta"><span>Context: <b>Demo</b></span><span>{model.availability}</span></div></button><div className="model-card-actions"><button onClick={onFavorite} aria-label={`Favorite ${model.name}`}><Star size={14} fill={model.favorite ? "currentColor" : "none"} /></button><button onClick={onSelect}>View Details</button><button onClick={onDefault}>Set Default</button></div></article>;
}