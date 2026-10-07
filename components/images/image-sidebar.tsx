"use client";

import { FilePlus2, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { imageHistory, type ImageGeneration } from "./data";
import { ImageHistoryItem } from "./image-history-item";

export function ImageSidebar({ selectedId, open, onClose, onSelect }: { selectedId: string | null; open: boolean; onClose: () => void; onSelect: (item: ImageGeneration) => void }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => imageHistory.filter((item) => item.title.toLowerCase().includes(query.toLowerCase())), [query]);
  return <><button className={`images-drawer-backdrop ${open ? "visible" : ""}`} onClick={onClose} aria-label="Close image history" /><aside className={`image-sidebar ${open ? "image-sidebar-open" : ""}`}><div className="images-sidebar-header"><div><span className="images-eyebrow">Workspace</span><h1>Image Studio</h1></div><button className="images-close" onClick={onClose} aria-label="Close image history"><X size={17} /></button></div><button className="new-generation-button"><FilePlus2 size={16} />New Generation</button><label className="images-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search generations" aria-label="Search generations" /></label><div className="image-history-groups"><section><h2>Recent</h2>{filtered.slice(0, 3).map((item) => <ImageHistoryItem key={item.id} item={item} selected={selectedId === item.id} onSelect={() => onSelect(item)} />)}</section><section><h2>Favorites</h2>{filtered.filter((item) => item.favorite).map((item) => <ImageHistoryItem key={`favorite-${item.id}`} item={item} selected={selectedId === item.id} onSelect={() => onSelect(item)} />)}</section><section><h2>Saved</h2>{filtered.slice(3).map((item) => <ImageHistoryItem key={`saved-${item.id}`} item={item} selected={selectedId === item.id} onSelect={() => onSelect(item)} />)}</section></div><div className="image-sidebar-footer"><span className="image-footer-dot" />Local demo history</div></aside></>;
}