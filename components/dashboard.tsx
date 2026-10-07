"use client";

import {
  Activity, ArrowRight, Bot, ChevronDown, ChevronRight, CircleHelp, Code2,
  FileText, Globe2, Image as ImageIcon, LayoutGrid, Lightbulb, Menu,
  MessageCircle, Moon, MoreVertical, Paperclip, PenLine, Plus, Search,
  Send, Settings, ShieldCheck, Sparkles, Sun, X, Zap, Wrench,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";

type Tone = "orange" | "blue" | "green" | "purple" | "yellow" | "slate";
type NavItem = { label: string; icon: LucideIcon; href: string };

const mainNav: NavItem[] = [
  { label: "Chat", icon: MessageCircle, href: "/chat" }, { label: "Coding", icon: Code2, href: "/coding" },
  { label: "Writing", icon: PenLine, href: "/writing" }, { label: "Research", icon: Search, href: "/research" },
  { label: "Image Generation", icon: ImageIcon, href: "/images" }, { label: "File Analysis", icon: FileText, href: "/files" },
  { label: "AI Agent", icon: Bot, href: "/agent" }, { label: "My Projects", icon: LayoutGrid, href: "/projects" },
];
const manageNav: NavItem[] = [
  { label: "Models & Providers", icon: Globe2, href: "/models" }, { label: "Usage & Limits", icon: Activity, href: "/usage" },
  { label: "API Keys", icon: ShieldCheck, href: "/api-keys" }, { label: "Settings", icon: Settings, href: "/settings" },
];
const features = [
  { title: "Chat", detail: "General AI chat", icon: MessageCircle, tone: "orange" as Tone, href: "/chat" },
  { title: "Code", detail: "Help with coding", icon: Code2, tone: "blue" as Tone, href: "/coding" },
  { title: "Write", detail: "Create content", icon: PenLine, tone: "yellow" as Tone, href: "/writing" },
  { title: "Research", detail: "Search & analyze", icon: Search, tone: "green" as Tone, href: "/research" },
  { title: "Image", detail: "Generate images", icon: ImageIcon, tone: "purple" as Tone, href: "/images" },
  { title: "File", detail: "Upload & analyze", icon: FileText, tone: "blue" as Tone, href: "/files" },
  { title: "Agent", detail: "Automate tasks", icon: Bot, tone: "purple" as Tone, href: "/agent" },
];
const quickActions = [
  { title: "Explain a concept", quote: "Explain renewable energy in simple words.", icon: Lightbulb, tone: "yellow" as Tone, href: "/chat" },
  { title: "Help with coding", quote: "Create a PHP login system with session.", icon: Code2, tone: "blue" as Tone, href: "/coding" },
  { title: "Write content", quote: "Write a professional email for a job application.", icon: PenLine, tone: "yellow" as Tone, href: "/writing" },
  { title: "Research & summarize", quote: "Summarize the latest AI news for 2026.", icon: Search, tone: "blue" as Tone, href: "/research" },
  { title: "Generate an image", quote: "A beautiful mountain landscape at sunrise.", icon: ImageIcon, tone: "yellow" as Tone, href: "/images" },
  { title: "Analyze a file", quote: "Explain this PDF document.", icon: FileText, tone: "blue" as Tone, href: "/files" },
];
const models = [
  { name: "Gemini", kind: "Free API", mark: "G", tone: "blue" as Tone }, { name: "Qwen", kind: "Free API", mark: "✣", tone: "purple" as Tone },
  { name: "OpenRouter", kind: "Free Models", mark: "◈", tone: "slate" as Tone }, { name: "Cloudflare AI", kind: "Free Models", mark: "☁", tone: "orange" as Tone },
  { name: "NVIDIA NIM", kind: "Free Models", mark: "◉", tone: "green" as Tone },
];
const usage = [
  { name: "Gemini", value: 72, detail: "72 / 100 requests", tone: "green" as Tone }, { name: "OpenRouter", value: 30, detail: "30 / 50", tone: "yellow" as Tone },
  { name: "Cloudflare AI", value: 82, detail: "8,200 / 10,000", tone: "blue" as Tone }, { name: "Qwen", value: 60, detail: "120 / 200", tone: "green" as Tone },
];
const conversations = [
  ["Fix checkout redirect bug", "2 hours ago", Code2], ["Smart School project ideas", "3 hours ago", Lightbulb],
  ["Write a cover letter", "5 hours ago", FileText], ["Summarize research paper", "8 hours ago", FileText],
  ["Explain this error", "1 day ago", Code2], ["Generate a fantasy wallpaper", "1 day ago", ImageIcon],
] as const;

function ToneIcon({ icon: Icon, tone, size = 18 }: { icon: LucideIcon; tone: Tone; size?: number }) {
  return <span className={`tone-icon tone-${tone}`}><Icon size={size} strokeWidth={2.2} /></span>;
}
function Brand() {
  return <div className="flex items-center gap-3"><span className="brand-mark"><Sparkles size={21} fill="currentColor" /></span><div className="leading-none"><div className="text-[24px] font-bold tracking-[-0.04em] text-slate-950">Free<span className="text-orange-500">AI</span> Hub</div><div className="mt-1 text-[11px] text-slate-500">One Platform. Many AIs. Infinite Possibilities.</div></div></div>;
}
function Header({ onMenu }: { onMenu: () => void }) {
  const [dark, setDark] = useState(false);
  return <header className="dashboard-header"><button className="icon-button mobile-menu" onClick={onMenu} aria-label="Open navigation"><Menu size={20} /></button><Brand /><div className="header-search"><Search size={18} /><input aria-label="Search" placeholder="Search messages, models or tools..." /></div><div className="header-actions"><button className="theme-switch" onClick={() => setDark(!dark)} aria-label="Toggle theme"><Sun size={17} /><span className={dark ? "inactive" : "active"} /><Moon size={17} /></button><button className="icon-button notification-button" aria-label="Notifications"><Activity size={19} /><span /></button><div className="profile"><span className="avatar">JA</span><span className="profile-name">Janith Akalanka</span><ChevronDown size={15} /></div></div></header>;
}
function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const navigate = (href: string) => { onClose(); router.push(href); };
  return <>{open && <button className="drawer-backdrop" onClick={onClose} aria-label="Close navigation" />}<aside className={`sidebar ${open ? "sidebar-open" : ""}`}><div className="sidebar-mobile-head"><Brand /><button className="icon-button" onClick={onClose} aria-label="Close navigation"><X size={20} /></button></div><nav className="nav-list" aria-label="Primary navigation">{mainNav.map(({ label, icon: Icon, href }, index) => <button key={label} className={`nav-item ${index === 0 ? "selected" : ""}`} onClick={() => navigate(href)}><Icon size={19} /><span>{label}</span></button>)}</nav><div className="nav-divider" /><p className="nav-label">Manage</p><nav className="nav-list" aria-label="Management navigation">{manageNav.map(({ label, icon: Icon, href }) => <button key={label} className="nav-item" onClick={() => navigate(href)}><Icon size={19} /><span>{label}</span></button>)}</nav><div className="upgrade-card"><div className="upgrade-icon"><Zap size={18} fill="currentColor" /></div><div className="flex-1"><div className="text-sm font-bold">Upgrade <span className="text-orange-500">(Optional)</span></div><p className="mt-3 text-[13px] leading-5 text-slate-600">Connect your own API keys for more models and higher limits.</p></div><button className="upgrade-button" onClick={() => navigate("/api-keys")}>Add API Keys</button></div></aside></>;
}
function FeatureStrip() { const router = useRouter(); return <section className="feature-strip">{features.map(({ title, detail, icon, tone, href }) => <button className="feature-card" key={title} onClick={() => router.push(href)}><ToneIcon icon={icon} tone={tone} size={20} /><strong>{title}</strong><span>{detail}</span></button>)}</section>; }
function QuickActions() { const router = useRouter(); return <section className="quick-grid">{quickActions.map(({ title, quote, icon, tone, href }) => <button className="quick-card" key={title} onClick={() => router.push(href)}><ToneIcon icon={icon} tone={tone} size={20} /><span className="quick-copy"><strong>{title}</strong><span>&quot;{quote}&quot;</span></span><ChevronRight size={17} className="quick-arrow" /></button>)}</section>; }
function ChatComposer() {
  const [webSearch, setWebSearch] = useState(false);
  return <section className="composer"><div className="composer-toolbar"><button className="model-select"><span>Model</span><strong>Automatic (Best Available)</strong><ChevronDown size={15} /></button><button className={`web-toggle ${webSearch ? "enabled" : ""}`} onClick={() => setWebSearch(!webSearch)}><Globe2 size={16} />Web Search<span className="toggle-dot" /></button></div><textarea aria-label="Message" placeholder="Type your message here..." /><div className="composer-bottom"><button className="icon-button composer-plus" aria-label="Add attachment"><Plus size={19} /></button><div className="composer-tools"><button><Paperclip size={15} />Attach</button><button><Globe2 size={15} />Web</button><button><Wrench size={15} />Tools</button></div><button className="auto-button"><CircleHelp size={16} />Auto<ChevronDown size={14} /></button><button className="send-button" aria-label="Send message"><Send size={18} /></button></div></section>;
}
function RecentConversations() { const router = useRouter(); return <section className="recent-section"><div className="section-heading"><h2>Recent Conversations</h2><button onClick={() => router.push("/chat")}>View All <ArrowRight size={14} /></button></div><div className="conversation-grid">{conversations.map(([title, time, Icon]) => <button className="conversation" key={title} onClick={() => router.push("/chat")}><span className="conversation-icon"><Icon size={17} /></span><span className="conversation-copy"><strong>{title}</strong><small>{time}</small></span><MoreVertical size={17} /></button>)}</div></section>; }
function ModelsPanel() { const router = useRouter(); return <section className="side-panel"><div className="section-heading"><h2>Available Free Models</h2><button onClick={() => router.push("/models")}>View All</button></div><div className="model-list">{models.map(({ name, kind, mark, tone }) => <button className="model-row" key={name} onClick={() => router.push("/models")}><span className={`provider-mark mark-${tone}`}>{mark}</span><span className="model-copy"><strong>{name}</strong><small>{kind}</small></span><span className="available">Available</span><ChevronRight size={16} /></button>)}</div><button className="see-all" onClick={() => router.push("/models")}>See all models <ArrowRight size={15} /></button></section>; }
function UsagePanel() { const router = useRouter(); return <section className="side-panel usage-panel"><div className="section-heading"><h2>Usage &amp; Limits</h2><button onClick={() => router.push("/usage")}>Details</button></div><div className="usage-list">{usage.map(({ name, value, detail, tone }) => <div className="usage-row" key={name}><div className="usage-top"><span className={`provider-mark small mark-${tone}`}>{name[0]}</span><strong>{name}</strong><b>{value}%</b></div><div className="progress-track"><span className={`progress-fill fill-${tone}`} style={{ width: `${value}%` }} /></div><small>{detail}</small></div>)}</div></section>; }
function AgentPanel() { const router = useRouter(); return <section className="agent-panel"><div className="agent-icon"><Bot size={23} /></div><h2>AI Agent <small>(Beta)</small></h2><p>Let AI work on your files, projects and tasks automatically.</p><button onClick={() => router.push("/agent")}>Try AI Agent <ArrowRight size={16} /></button></section>; }
export function Dashboard() { const [sidebarOpen, setSidebarOpen] = useState(false); return <div className="dashboard-shell"><Header onMenu={() => setSidebarOpen(true)} /><div className="dashboard-body"><Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} /><main className="main-content"><FeatureStrip /><section className="welcome"><Sparkles size={31} className="welcome-spark" fill="currentColor" /><h1>Welcome to <span>FreeAI Hub</span></h1><p>Use multiple free AI models in one place. Chat, code, write, research and more.</p></section><QuickActions /><ChatComposer /><RecentConversations /></main><aside className="right-rail"><ModelsPanel /><UsagePanel /><AgentPanel /></aside></div></div>; }