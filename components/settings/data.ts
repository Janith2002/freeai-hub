import type { LucideIcon } from "lucide-react";
import { Brush, Database, Info, Keyboard, MessageCircle, Settings2, Shield, Sparkles, Volume2 } from "lucide-react";

export interface SettingsNavItem { id: string; label: string; icon: LucideIcon; }
export const settingsNav: SettingsNavItem[] = [
  { id: "general", label: "General", icon: Settings2 }, { id: "appearance", label: "Appearance", icon: Brush }, { id: "ai", label: "AI Preferences", icon: Sparkles }, { id: "chat", label: "Chat", icon: MessageCircle }, { id: "notifications", label: "Notifications", icon: Volume2 }, { id: "privacy", label: "Privacy & Security", icon: Shield }, { id: "data", label: "Data & Storage", icon: Database }, { id: "shortcuts", label: "Keyboard Shortcuts", icon: Keyboard }, { id: "about", label: "About", icon: Info },
];

export const shortcutRows = [["New chat", "Ctrl / Cmd + K"], ["Search", "Ctrl / Cmd + /"], ["Open settings", "Ctrl / Cmd + ,"], ["Toggle sidebar", "Ctrl / Cmd + B"], ["Focus composer", "Ctrl / Cmd + J"], ["Send message", "Enter"], ["Close modal", "Escape"]];
export const helpCopy: Record<string, { title: string; description: string; note: string }> = {
  general: { title: "Your workspace", description: "Shape the basic FreeAI Hub experience, such as your display name, language, and starting page.", note: "These values are temporary demo preferences and are not saved." },
  appearance: { title: "Make it yours", description: "Choose a visual theme, accent, density, and sidebar behavior for this demo interface.", note: "Appearance changes only affect the current frontend session." },
  ai: { title: "AI defaults", description: "Prepare the controls that will eventually guide model selection, response style, and fallback behavior.", note: "No provider is connected and no AI request is made." },
  chat: { title: "Conversation behavior", description: "Tune how conversations will feel, from timestamps to code wrapping and composer behavior.", note: "Chat preferences are visual controls until real chat integration is connected." },
  notifications: { title: "Stay informed", description: "Choose which future product events could notify you.", note: "Notifications are not sent by this frontend demo." },
  privacy: { title: "Security first", description: "Review how a production version will protect secrets and keep provider access server-side.", note: "Browser storage is not used. Real AI integration will be connected later." },
  data: { title: "Your data", description: "See the planned data categories and demo export or clear actions.", note: "No conversations, files, or settings are persisted in this demo." },
  shortcuts: { title: "Move faster", description: "A quick reference for the keyboard commands planned for FreeAI Hub.", note: "Shortcut handling is presented as documentation in this demo." },
  about: { title: "About FreeAI Hub", description: "Learn which parts of the product are ready and which are still placeholders.", note: "The provider architecture exists, but live integrations are not connected yet." },
};