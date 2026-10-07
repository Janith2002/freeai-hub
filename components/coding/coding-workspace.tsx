"use client";

import { Bot, FileCode2, Menu, PanelRight, Search } from "lucide-react";
import { useState } from "react";
import { CodeEditor } from "./code-editor";
import { CodingAssistant } from "./coding-assistant";
import { FileExplorer } from "./file-explorer";
import { editorTabs, type EditorTab, type ProjectFile } from "./data";

export function CodingWorkspace() {
  const [selectedFile, setSelectedFile] = useState("app-page");
  const [activeTab, setActiveTab] = useState("app-page");
  const [explorerOpen, setExplorerOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const selectFile = (file: ProjectFile) => { setSelectedFile(file.id); const tab = editorTabs.find((item) => item.id === file.id); if (tab) setActiveTab(tab.id); setExplorerOpen(false); };
  const selectTab = (tab: EditorTab) => { setActiveTab(tab.id); setSelectedFile(tab.id); };
  return <div className="coding-page"><header className="coding-topbar"><button className="coding-mobile-button" onClick={() => setExplorerOpen(true)} aria-label="Open project explorer"><Menu size={19} /></button><div className="coding-brand"><span className="coding-brand-mark"><FileCode2 size={17} /></span><span>FreeAI <b>Code</b></span><em>Preview</em></div><div className="coding-breadcrumb"><span>FreeAI Project</span><span>/</span><strong>{editorTabs.find((tab) => tab.id === activeTab)?.name}</strong></div><div className="coding-top-actions"><button aria-label="Search project"><Search size={17} /></button><button className="top-assistant-button" onClick={() => setAssistantOpen(true)}><Bot size={16} />Assistant</button></div></header><div className="coding-body"><FileExplorer selectedFile={selectedFile} onSelectFile={selectFile} open={explorerOpen} onClose={() => setExplorerOpen(false)} /><CodeEditor activeTab={activeTab} onSelectTab={selectTab} /><CodingAssistant open={assistantOpen} onClose={() => setAssistantOpen(false)} /><button className="coding-mobile-assistant" onClick={() => setAssistantOpen(true)} aria-label="Open coding assistant"><PanelRight size={17} /></button></div></div>;
}