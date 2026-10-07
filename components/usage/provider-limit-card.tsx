import { Activity } from "lucide-react";
import type { LimitItem } from "./data";
import { ModelStatus } from "@/components/models/model-status";

export function ProviderLimitCard({ item }: { item: LimitItem }) { return <article className="provider-limit-card"><div><span className={`usage-provider-icon usage-${item.tone}`}><Activity size={14} /></span><strong>{item.name}</strong><ModelStatus status={item.status} /></div><div className="limit-label"><span>Demo usage: {item.usage}%</span><small>Demo limit</small></div><div className="limit-track"><i style={{ width: `${item.usage}%` }} /></div></article>; }