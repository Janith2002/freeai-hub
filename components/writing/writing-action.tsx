import type { LucideIcon } from "lucide-react";

export function WritingAction({ label, icon: Icon, active, onClick }: { label: string; icon: LucideIcon; active?: boolean; onClick: () => void }) {
  return <button className={`writing-action ${active ? "active" : ""}`} onClick={onClick}><Icon size={15} /><span>{label}</span></button>;
}