import { ArrowDownAZ, ChevronDown } from "lucide-react";

export function ModelSort({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <label className="model-sort"><ArrowDownAZ size={14} /><select value={value} onChange={(event) => onChange(event.target.value)} aria-label="Sort models"><option>Name</option><option>Provider</option><option>Context Length</option><option>Status</option></select><span>{value}</span><ChevronDown size={13} /></label>;
}