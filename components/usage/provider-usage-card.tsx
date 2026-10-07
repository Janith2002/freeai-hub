import type { ProviderUsageItem } from "./data";
import { ModelStatus } from "@/components/models/model-status";

export function ProviderUsageCard({ item }: { item: ProviderUsageItem }) { const Icon = item.icon; return <div className="provider-usage-row"><span className={`usage-provider-icon usage-${item.tone}`}><Icon size={15} /></span><strong>{item.name}</strong><span>{item.requests}</span><span>{item.tokens}</span><ModelStatus status={item.status} /></div>; }