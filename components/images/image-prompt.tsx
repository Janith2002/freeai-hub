"use client";

import { Eraser, Sparkles } from "lucide-react";
import { ImageControls } from "./image-controls";
import { ImageReferenceUpload } from "./image-reference-upload";
import type { AspectRatio, ImageQuality, ImageStyle } from "./data";

export function ImagePrompt({ prompt, setPrompt, aspectRatio, count, style, quality, setAspectRatio, setCount, setStyle, setQuality, onGenerate }: { prompt: string; setPrompt: (value: string) => void; aspectRatio: AspectRatio; count: number; style: ImageStyle; quality: ImageQuality; setAspectRatio: (value: AspectRatio) => void; setCount: (value: number) => void; setStyle: (value: ImageStyle) => void; setQuality: (value: ImageQuality) => void; onGenerate: () => void }) {
  return <section className="image-prompt-card"><div className="prompt-card-heading"><div><span className="images-eyebrow">Create</span><h2>Describe your image</h2></div><span className="demo-pill">PLACEHOLDER MODE</span></div><textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} placeholder="Describe the image you want to create..." aria-label="Describe the image you want to create" maxLength={1000} /><div className="prompt-meta"><span>{prompt.length} / 1000 characters</span><button onClick={() => setPrompt("")} aria-label="Clear prompt"><Eraser size={14} />Clear</button></div><ImageControls aspectRatio={aspectRatio} count={count} style={style} quality={quality} onAspectRatio={setAspectRatio} onCount={setCount} onStyle={setStyle} onQuality={setQuality} /><ImageReferenceUpload /><div className="prompt-submit"><small>Demo generation only · No AI API connected</small><button onClick={onGenerate}><Sparkles size={16} />Generate Image</button></div></section>;
}