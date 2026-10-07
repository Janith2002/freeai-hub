import { ChevronRight } from "lucide-react";
import type { Provider } from "./data";
import { ModelStatus } from "./model-status";

export function ProviderItem({ provider, active, onSelect }: { provider: Provider; active: boolean; onSelect: () => void }) {
  const Icon = provider.icon;
  return <button className={`provider-item ${active ? "active" : ""}`} onClick={onSelect}><span className={`provider-icon provider-${provider.tone}`}><Icon size={16} /></span><span><strong>{provider.name}</strong><small>{provider.modelCount} models</small></span><ModelStatus status={provider.status} /><ChevronRight size={14} /></button>;
}