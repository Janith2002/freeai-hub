import { ChevronDown } from "lucide-react";

export function ImageSettingsSection({ title, children, open = true }: { title: string; children: React.ReactNode; open?: boolean }) {
  return <section className="image-settings-section"><button className="settings-section-heading"><strong>{title}</strong><ChevronDown size={15} /></button>{open && <div className="settings-section-body">{children}</div>}</section>;
}