import { FileText, Maximize2 } from "lucide-react";
import type { LocalFile } from "./file-upload";

export function FilePreview({ file }: { file: LocalFile }) {
  return <section className="file-preview"><div className="preview-heading"><span><FileText size={14} />Document preview</span><button aria-label="Expand document preview"><Maximize2 size={14} /></button></div><div className="preview-paper"><span className="preview-paper-label">PLACEHOLDER PREVIEW</span><div className="preview-title">{file.name}</div><i /><i /><i /><i /><div className="preview-columns"><span /><span /></div><small>Local visual placeholder · no document contents loaded</small></div></section>;
}