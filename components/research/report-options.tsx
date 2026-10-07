import { Clipboard, FileDown, FileText, Sparkles } from "lucide-react";

export function ReportOptions() {
  return <section className="report-options"><div className="report-options-heading"><div><h3>Research report</h3><small>Choose a placeholder export format</small></div><Sparkles size={17} /></div><div className="report-types"><button className="active">Summary</button><button>Detailed Report</button><button>Academic Report</button><button>Executive Brief</button></div><div className="export-row"><span>Export</span><button><FileDown size={13} />PDF</button><button><FileText size={13} />Markdown</button><button><Clipboard size={13} />Copy</button></div></section>;
}