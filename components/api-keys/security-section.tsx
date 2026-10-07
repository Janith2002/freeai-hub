import { ChevronDown } from "lucide-react";

export function SecuritySection({ title, children }: { title: string; children: React.ReactNode }) { return <section className="security-section"><button><strong>{title}</strong><ChevronDown size={14} /></button><div>{children}</div></section>; }