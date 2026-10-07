import type { SettingsNavItem as NavItem } from "./data";

export function SettingsNavItem({ item, active, onClick }: { item: NavItem; active: boolean; onClick: () => void }) { const Icon = item.icon; return <button className={`settings-nav-item ${active ? "active" : ""}`} onClick={onClick}><Icon size={16} /><span>{item.label}</span></button>; }