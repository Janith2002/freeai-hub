import { limits } from "./data";
import { ProviderLimitCard } from "./provider-limit-card";
import { UsageActivity } from "./usage-activity";
import { UsageAlerts } from "./usage-alerts";

export function LimitsPanel({ open, onClose }: { open: boolean; onClose: () => void }) { return <aside className={`limits-panel ${open ? "limits-panel-open" : ""}`}><div className="limits-header"><div><span className="usage-eyebrow">Sample provider data</span><h2>Limits &amp; Activity</h2></div><button className="limits-close" onClick={onClose} aria-label="Close limits and activity"><span>×</span></button><span className="demo-chip">DEMO</span></div><section className="provider-limits"><h3>Provider Limits</h3>{limits.map((item) => <ProviderLimitCard key={item.name} item={item} />)}</section><UsageActivity /><UsageAlerts /></aside>; }