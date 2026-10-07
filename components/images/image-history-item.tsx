import { MoreHorizontal, Star } from "lucide-react";
import type { ImageGeneration } from "./data";

export function ImageHistoryItem({ item, selected, onSelect }: { item: ImageGeneration; selected: boolean; onSelect: () => void }) {
  return <button className={`image-history-item ${selected ? "selected" : ""}`} onClick={onSelect}><span className={`history-thumb thumb-${item.tone}`}><span /></span><span className="history-copy"><strong>{item.title}</strong><small>{item.time}</small></span><span className="history-actions"><Star size={14} fill={item.favorite ? "currentColor" : "none"} /><MoreHorizontal size={15} /></span></button>;
}