"use client";

import { ImagePlus, X } from "lucide-react";
import { useState } from "react";

export function ImageReferenceUpload() {
  const [fileName, setFileName] = useState<string | null>(null);
  return <div className={`reference-upload ${fileName ? "has-file" : ""}`}>{fileName ? <><span className="reference-preview"><ImagePlus size={18} /></span><span><strong>{fileName}</strong><small>Local preview only</small></span><button onClick={() => setFileName(null)} aria-label="Remove reference image"><X size={15} /></button></> : <label><input type="file" accept="image/png,image/jpeg,image/webp" onChange={(event) => setFileName(event.target.files?.[0]?.name ?? null)} /><span className="reference-upload-icon"><ImagePlus size={17} /></span><span><strong>Upload reference image</strong><small>PNG, JPG or WEBP · Demo only</small></span></label>}</div>;
}