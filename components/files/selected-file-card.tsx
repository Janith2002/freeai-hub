import { CheckCircle2, FileText, X } from "lucide-react";
import type { LocalFile } from "./file-upload";

function formatSize(bytes: number) { return bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / (1024 * 1024)).toFixed(1)} MB`; }

export function SelectedFileCard({ file, onRemove }: { file: LocalFile; onRemove: () => void }) {
  return <div className="selected-file-card"><span className="selected-file-icon"><FileText size={20} /></span><span className="selected-file-copy"><strong>{file.name}</strong><small>{file.name.split(".").pop()?.toUpperCase() ?? "FILE"} · {formatSize(file.size)}</small></span><span className="selected-file-status"><CheckCircle2 size={15} />Selected locally</span><button onClick={onRemove} aria-label={`Remove ${file.name}`}><X size={15} /></button></div>;
}