"use client";

import { Layers3, Plus, X } from "lucide-react";
import { providers, type Provider } from "./data";
import { ProviderItem } from "./provider-item";

export function ProvidersSidebar({ active, open, onClose, onSelect, onAdd }: { active: string; open: boolean; onClose: () => void; onSelect: (provider: Provider) => void; onAdd: () => void }) {
  const sections = [{ label: "All Providers", ids: providers.map((provider) => provider.id) }, { label: "Connected", ids: ["freeai"] }, { label: "Available", ids: ["gemini"] }, { label: "Coming Soon", ids: ["cloudflare", "qwen"] }];
  return <><button className={`models-drawer-backdrop ${open ? "visible" : ""}`} onClick={onClose} aria-label="Close providers" /><aside className={`providers-sidebar ${open ? "providers-sidebar-open" : ""}`}><div className="providers-header"><div><span className="models-eyebrow">Workspace</span><h1>Providers</h1></div><button className="providers-close" onClick={onClose} aria-label="Close providers"><X size={17} /></button></div><button className="add-provider-button" onClick={onAdd}><Plus size={16} />Add Provider</button><div className="provider-sections">{sections.map((section) => <section key={section.label}><h2>{section.label}</h2>{section.ids.map((id) => { const provider = providers.find((item) => item.id === id); return provider ? <ProviderItem key={`${section.label}-${id}`} provider={provider} active={active === id} onSelect={() => { onSelect(provider); onClose(); }} /> : null; })}</section>)}</div><div className="providers-footer"><Layers3 size={13} /><span>Demo provider catalog</span></div></aside></>;
}