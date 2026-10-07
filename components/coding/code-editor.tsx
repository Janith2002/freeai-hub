"use client";

import { Check, Code2, Columns2, Maximize2, MoreHorizontal, Save } from "lucide-react";
import { codeLines, editorTabs, type EditorTab } from "./data";

interface CodeEditorProps { activeTab: string; onSelectTab: (tab: EditorTab) => void; }

export function CodeEditor({ activeTab, onSelectTab }: CodeEditorProps) {
  const active = editorTabs.find((tab) => tab.id === activeTab) ?? editorTabs[0];
  return <section className="code-workspace"><div className="editor-toolbar"><div className="editor-file-heading"><Code2 size={17} /><strong>{active.name}</strong><span className="editor-dot" /></div><div className="editor-actions"><span className="editor-language">{active.language}</span><button aria-label="Save file"><Save size={16} /></button><button aria-label="Split editor"><Columns2 size={16} /></button><button aria-label="Fullscreen editor"><Maximize2 size={16} /></button><button aria-label="Editor menu"><MoreHorizontal size={17} /></button></div></div><div className="editor-tabs">{editorTabs.map((tab) => <button key={tab.id} className={tab.id === activeTab ? "active" : ""} onClick={() => onSelectTab(tab)}>{tab.name}<span>×</span></button>)}</div><div className="editor-body"><div className="line-numbers">{codeLines.map((_, index) => <span key={index}>{index + 1}</span>)}</div><pre className="code-editor"><code>{codeLines.map((line, index) => <span className="code-line" key={index}>{line}</span>)}</code></pre></div><div className="editor-statusbar"><span><Check size={13} />No issues</span><span>UTF-8</span><span>Spaces: 2</span><span>{active.language}</span></div></section>;
}