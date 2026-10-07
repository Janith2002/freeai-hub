import { MoreHorizontal, Star } from "lucide-react";
import type { FileHistoryItem as FileHistoryItemData } from "./data";

export function FileHistoryItem({ item, selected, onSelect }: { item: FileHistoryItemData; selected: boolean; onSelect: () => void }) {
  const Icon = item.icon;
  return <button className={`file-history-item ${selected ? "selected" : ""}`} onClick={onSelect}><span className={`file-history-icon file-tone-${item.tone}`}><Icon size={15} /></span><span className="file-history-copy"><strong>{item.name}</strong><small>{item.extension} · {item.size} · {item.time}</small></span><span className="file-history-actions"><Star size={13} fill={item.favorite ? "currentColor" : "none"} /><MoreHorizontal size={15} /></span></button>;
}