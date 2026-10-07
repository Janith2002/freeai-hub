import type { LucideIcon } from "lucide-react";

export function UsageSummaryCard({ label, value, icon: Icon, tone }: { label: string; value: string; icon: LucideIcon; tone: string }) {
  return <article className="usage-summary-card"><span className={`usage-summary-icon usage-${tone}`}><Icon size={17} /></span><span><small>{label}</small><strong>{value}</strong><em>Sample value</em></span></article>;
}