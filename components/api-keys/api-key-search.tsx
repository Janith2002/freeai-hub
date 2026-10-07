import { Search } from "lucide-react";

export function ApiKeySearch({ value, onChange }: { value: string; onChange: (value: string) => void }) { return <label className="api-key-search"><Search size={15} /><input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search keys..." aria-label="Search keys" /></label>; }