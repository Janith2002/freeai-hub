"use client";

import "./files.css";
import { FileSearch, Menu, PanelRight, Search } from "lucide-react";
import { useState } from "react";
import type { AnalysisDepth, AnalysisTaskId, FileHistoryItem, ResponseFormat } from "./data";
import { AnalysisResults } from "./analysis-results";
import { AnalysisTasks } from "./analysis-tasks";
import { FilePreview } from "./file-preview";
import { FileSettings } from "./file-settings";
import { FileSidebar } from "./file-sidebar";
import { FileUpload, type LocalFile } from "./file-upload";
import { MultiFileList } from "./multi-file-list";
import { SelectedFileCard } from "./selected-file-card";

export function FileWorkspace() {
  const [selectedHistory, setSelectedHistory] = useState<FileHistoryItem | null>(null);
  const [files, setFiles] = useState<LocalFile[]>([]);
  const [task, setTask] = useState<AnalysisTaskId>("summary");
  const [custom, setCustom] = useState("");
  const [depth, setDepth] = useState<AnalysisDepth>("Standard");
  const [format, setFormat] = useState<ResponseFormat>("Summary");
  const [historyOpen, setHistoryOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const addFiles = (newFiles: LocalFile[]) => { setFiles((current) => [...current, ...newFiles]); setAnalyzed(false); };
  const analyze = () => { if (!files.length) return; setAnalyzing(true); setAnalyzed(false); window.setTimeout(() => { setAnalyzing(false); setAnalyzed(true); }, 900); };
  const chooseHistory = (file: FileHistoryItem) => { setSelectedHistory(file); setFiles([{ name: file.name, size: 240000, type: "application/pdf" }]); setHistoryOpen(false); setAnalyzed(false); };
  return <div className="files-page"><header className="files-topbar"><button className="files-mobile-menu" onClick={() => setHistoryOpen(true)} aria-label="Open file history"><Menu size={19} /></button><div className="files-brand"><span><FileSearch size={17} /></span><b>FreeAI</b> Files <em>Preview</em></div><div className="files-breadcrumb"><span>File Analysis</span><span>/</span><strong>{files[0]?.name ?? "New analysis"}</strong></div><div className="files-top-actions"><button aria-label="Search file workspace"><Search size={17} /></button><button className="files-settings-button" onClick={() => setSettingsOpen(true)}><PanelRight size={15} />Settings</button></div></header><div className="files-body"><FileSidebar selectedId={selectedHistory?.id ?? null} open={historyOpen} onClose={() => setHistoryOpen(false)} onSelect={chooseHistory} /><main className="files-main"><div className="files-main-heading"><div><span className="files-eyebrow">Analysis workspace</span><h1>AI File Analysis <small>PLACEHOLDER MODE</small></h1><p>Upload a document and analyze it with AI.</p></div><span className="files-demo-status"><i />Real file analysis will be connected later.</span></div>{files.length ? <><SelectedFileCard file={files[0]} onRemove={() => setFiles([])} /><MultiFileList files={files} onRemove={(index) => setFiles((current) => current.filter((_, itemIndex) => itemIndex !== index))} />{files[0].name.toLowerCase().endsWith(".pdf") && <FilePreview file={files[0]} />}</> : <FileUpload onAdd={addFiles} />}<AnalysisTasks selected={task} onSelect={setTask} />{task === "custom" && <textarea className="custom-analysis" value={custom} onChange={(event) => setCustom(event.target.value)} placeholder="Describe what you want to analyze..." aria-label="Custom analysis" />}{files.length > 0 && <button className="analyze-file-button" onClick={analyze} disabled={analyzing}>{analyzing ? <><span className="files-spinner" />Analyzing file...</> : <><FileSearch size={16} />Analyze File</>}</button>}{analyzing && <div className="file-analysis-loading"><span className="files-spinner" /><strong>Analyzing file...</strong><small>Running a local demo flow. No file is being uploaded.</small></div>}{analyzed && files.length > 0 && <AnalysisResults fileName={files[0].name} />}{!analyzed && !analyzing && <div className="file-empty-result"><FileSearch size={24} /><h3>Your analysis will appear here</h3><p>Upload a file and choose an analysis task to begin.</p></div>}</main><FileSettings depth={depth} format={format} onDepth={setDepth} onFormat={setFormat} open={settingsOpen} onClose={() => setSettingsOpen(false)} /><button className="files-mobile-settings" onClick={() => setSettingsOpen(true)} aria-label="Open analysis settings"><PanelRight size={17} /></button></div></div>;
}