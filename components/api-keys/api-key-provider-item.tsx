import { ChevronRight } from "lucide-react";
import type { ProviderRecord } from "./data";

export function ApiKeyProviderItem({ provider, active, onSelect }: { provider: ProviderRecord; active: boolean; onSelect: () => void }) { const Icon = provider.icon; return <button className={`api-provider-item ${active ? "active" : ""}`} onClick={onSelect}><span className={`api-provider-icon api-tone-${provider.tone}`}><Icon size={16} /></span><span><strong>{provider.name}</strong><small>{provider.status}</small></span><ChevronRight size={14} /></button>; }