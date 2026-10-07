import { Download, FileJson, FileSpreadsheet } from "lucide-react";

export function UsageExport() { return <div className="usage-export"><span>Frontend-only demo exports</span><button><FileSpreadsheet size={14} />Export CSV</button><button><FileJson size={14} />Export JSON</button><button><Download size={14} />Download Report</button></div>; }