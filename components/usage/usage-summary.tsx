import { Activity, DollarSign, Image, Zap } from "lucide-react";
import { UsageSummaryCard } from "./usage-summary-card";

export function UsageSummary() { return <div className="usage-summary-grid"><UsageSummaryCard label="Requests" value="Demo: 1,284" icon={Activity} tone="orange" /><UsageSummaryCard label="Tokens" value="Demo: 482K" icon={Zap} tone="blue" /><UsageSummaryCard label="AI Generations" value="Demo: 326" icon={Image} tone="purple" /><UsageSummaryCard label="Estimated Cost" value="Demo: $0.00" icon={DollarSign} tone="green" /></div>; }