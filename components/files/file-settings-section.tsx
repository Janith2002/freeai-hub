import { ChevronDown } from "lucide-react";

export function FileSettingsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="file-settings-section"><button><strong>{title}</strong><ChevronDown size={15} /></button><div>{children}</div></section>;
}