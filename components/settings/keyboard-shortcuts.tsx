import { Keyboard } from "lucide-react";
import { shortcutRows } from "./data";
import { SettingsSection } from "./settings-section";

export function KeyboardShortcuts() { return <SettingsSection title="Keyboard Shortcuts" description="A reference for the shortcuts planned for FreeAI Hub."><div className="shortcut-table"><div><span>Action</span><span>Shortcut</span></div>{shortcutRows.map(([action, shortcut]) => <div key={action}><strong>{action}</strong><kbd>{shortcut}</kbd></div>)}</div><p className="settings-demo-note"><Keyboard size={13} /> Shortcut handling is documented here as demo UI.</p></SettingsSection>; }