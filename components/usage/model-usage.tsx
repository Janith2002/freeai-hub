import { modelUsage } from "./data";
import { UsageTable } from "./usage-table";

export function ModelUsage() { return <section className="model-usage"><div className="usage-panel-heading"><div><span className="usage-eyebrow">Sample model data</span><h2>Model Usage</h2></div><span className="demo-chip">DEMO VALUES</span></div><div className="usage-table-scroll"><UsageTable items={modelUsage} /></div></section>; }