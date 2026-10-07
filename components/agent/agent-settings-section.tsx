import { ChevronDown } from "lucide-react";

export function AgentSettingsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="agent-settings-section"><button><strong>{title}</strong><ChevronDown size={15} /></button><div>{children}</div></section>;
}