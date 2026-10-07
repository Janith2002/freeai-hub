import { Search } from "lucide-react";

export function ModelSearch({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <label className="model-search"><Search size={15} /><input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search models..." aria-label="Search models" /></label>;
}