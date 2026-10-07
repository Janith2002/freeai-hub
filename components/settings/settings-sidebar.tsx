"use client";

import { Search, X } from "lucide-react";
import { settingsNav } from "./data";
import { SettingsNavItem } from "./settings-nav-item";

export function SettingsSidebar({ active, open, onClose, onSelect }: { active: string; open: boolean; onClose: () => void; onSelect: (id: string) => void }) { return <><button className={`settings-drawer-backdrop ${open ? "visible" : ""}`} onClick={onClose} aria-label="Close settings navigation" /><aside className={`settings-sidebar ${open ? "settings-sidebar-open" : ""}`}><div className="settings-sidebar-header"><div><span className="settings-eyebrow">Workspace</span><h1>Settings</h1></div><button className="settings-close" onClick={onClose} aria-label="Close settings navigation"><X size={17} /></button></div><label className="settings-search"><Search size={15} /><input placeholder="Search settings" aria-label="Search settings" /></label><nav>{settingsNav.map((item) => <SettingsNavItem key={item.id} item={item} active={item.id === active} onClick={() => { onSelect(item.id); onClose(); }} />)}</nav><div className="settings-sidebar-footer">Demo preferences only.<br />Nothing is persisted.</div></aside></>; }