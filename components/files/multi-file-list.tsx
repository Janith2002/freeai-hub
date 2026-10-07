import { Files, X } from "lucide-react";
import type { LocalFile } from "./file-upload";

export function MultiFileList({ files, onRemove }: { files: LocalFile[]; onRemove: (index: number) => void }) {
  if (files.length < 2) return null;
  return <div className="multi-file-list"><div className="multi-file-heading"><span><Files size={14} />Selected files</span><small>{files.length} files</small></div>{files.map((file, index) => <div className="multi-file-row" key={`${file.name}-${index}`}><span>{file.name}</span><small>{file.type.split("/").pop()?.toUpperCase() ?? "FILE"}</small><button onClick={() => onRemove(index)} aria-label={`Remove ${file.name}`}><X size={13} /></button></div>)}<button className="add-another-file" aria-label="Add another file"><Files size={13} />Add another file</button></div>;
}