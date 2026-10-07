"use client";

import "./usage.css";
import { Activity, Menu, PanelRight } from "lucide-react";
import { useState } from "react";
import { LimitsPanel } from "./limits-panel";
import { ModelUsage } from "./model-usage";
import { ProviderUsage } from "./provider-usage";
import { UsageDetails } from "./usage-details";
import { UsageExport } from "./usage-export";
import { UsageChart } from "./usage-chart";
import { UsageSidebar } from "./usage-sidebar";
import { UsageSummary } from "./usage-summary";

export function UsageWorkspace() { const [sidebarOpen, setSidebarOpen] = useState(false); const [limitsOpen, setLimitsOpen] = useState(false); return <div className="usage-page"><header className="usage-topbar"><button className="usage-mobile-menu" onClick={() => setSidebarOpen(true)} aria-label="Open usage navigation"><Menu size={19} /></button><div className="usage-brand"><span><Activity size={17} /></span><b>FreeAI</b> Usage <em>Preview</em></div><div className="usage-breadcrumb"><span>Usage &amp; Limits</span><span>/</span><strong>Overview</strong></div><div className="usage-top-actions"><button className="usage-mobile-limits" onClick={() => setLimitsOpen(true)} aria-label="Open limits and activity"><PanelRight size={17} />Limits</button></div></header><div className="usage-body"><UsageSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} /><main className="usage-main"><div className="usage-main-heading"><div><span className="usage-eyebrow">USAGE &amp; LIMITS</span><h1>Usage Overview</h1><p>Monitor AI usage, provider limits, and activity.</p></div><span className="usage-demo-badge">DEMO DATA</span></div><div className="usage-demo-notice"><strong>DEMO DATA</strong><span>Usage and limits shown on this page are sample values. Real provider usage will be connected later.</span></div><UsageSummary /><UsageChart /><ProviderUsage /><ModelUsage /><UsageDetails /><UsageExport /></main><LimitsPanel open={limitsOpen} onClose={() => setLimitsOpen(false)} /><button className="usage-mobile-limits-fab" onClick={() => setLimitsOpen(true)} aria-label="Open limits and activity"><PanelRight size={17} /></button></div></div>; }