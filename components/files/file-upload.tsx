"use client";

import { FileUp, UploadCloud } from "lucide-react";
import { useRef, useState } from "react";

export interface LocalFile { name: string; size: number; type: string; }

export function FileUpload({ onAdd }: { onAdd: (files: LocalFile[]) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const addFiles = (list: FileList | null) => { if (!list) return; onAdd(Array.from(list).map((file) => ({ name: file.name, size: file.size, type: file.type }))); };
  return <div className={`file-upload ${dragging ? "dragging" : ""}`} onDragOver={(event) => { event.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)} onDrop={(event) => { event.preventDefault(); setDragging(false); addFiles(event.dataTransfer.files); }}><input ref={inputRef} type="file" multiple accept=".pdf,.docx,.txt,.csv,.xlsx,.json,.png,.jpg,.jpeg" onChange={(event) => addFiles(event.target.files)} /><span className="file-upload-icon"><UploadCloud size={27} /></span><h2>Drop your file here</h2><p>or choose a file from your device</p><button onClick={() => inputRef.current?.click()}><FileUp size={15} />Browse Files</button><small>PDF · DOCX · TXT · CSV · XLSX · JSON · PNG · JPG</small><em>Demo limit: maximum file size 10 MB</em></div>;
}