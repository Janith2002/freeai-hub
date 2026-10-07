import { ChevronDown } from "lucide-react";
import type { AspectRatio, ImageQuality, ImageStyle } from "./data";

function SelectControl<T extends string>({ label, value, options, onChange }: { label: string; value: T; options: T[]; onChange: (value: T) => void }) {
  return <label className="image-select-control"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value as T)} aria-label={label}>{options.map((option) => <option key={option}>{option}</option>)}</select><strong>{value}</strong><ChevronDown size={14} /></label>;
}

export function ImageControls({ aspectRatio, count, style, quality, onAspectRatio, onCount, onStyle, onQuality }: { aspectRatio: AspectRatio; count: number; style: ImageStyle; quality: ImageQuality; onAspectRatio: (value: AspectRatio) => void; onCount: (value: number) => void; onStyle: (value: ImageStyle) => void; onQuality: (value: ImageQuality) => void }) {
  return <div className="image-controls"><SelectControl label="Aspect Ratio" value={aspectRatio} options={["1:1", "16:9", "4:3", "3:4", "9:16"]} onChange={onAspectRatio} /><SelectControl label="Images" value={String(count)} options={["1", "2", "4"]} onChange={(value) => onCount(Number(value))} /><SelectControl label="Style" value={style} options={["None", "Photorealistic", "Digital Art", "Illustration", "Anime", "Cinematic"]} onChange={onStyle} /><SelectControl label="Quality" value={quality} options={["Standard", "High"]} onChange={onQuality} /></div>;
}