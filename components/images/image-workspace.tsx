"use client";

import "./images.css";
import { Image as ImageIcon, Menu, PanelRight, Search } from "lucide-react";
import { useState } from "react";
import type { AspectRatio, ImageGeneration, ImageQuality, ImageStyle } from "./data";
import { ImagePrompt } from "./image-prompt";
import { ImageResults } from "./image-results";
import { ImageSettings } from "./image-settings";
import { ImageSidebar } from "./image-sidebar";
import { PromptIdeas } from "./prompt-ideas";

export function ImageWorkspace() {
  const [selectedHistory, setSelectedHistory] = useState<ImageGeneration | null>(null);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>("1:1");
  const [count, setCount] = useState(1);
  const [style, setStyle] = useState<ImageStyle>("None");
  const [quality, setQuality] = useState<ImageQuality>("Standard");
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const startGeneration = () => { setGenerating(true); setGenerated(false); window.setTimeout(() => { setGenerating(false); setGenerated(true); }, 950); };
  const selectHistory = (item: ImageGeneration) => { setSelectedHistory(item); setPrompt(item.title); setHistoryOpen(false); };
  return <div className="images-page"><header className="images-topbar"><button className="images-mobile-menu" onClick={() => setHistoryOpen(true)} aria-label="Open image history"><Menu size={19} /></button><div className="images-brand"><span><ImageIcon size={17} /></span><b>FreeAI</b> Images <em>Preview</em></div><div className="images-breadcrumb"><span>Image Studio</span><span>/</span><strong>{selectedHistory?.title ?? "New generation"}</strong></div><div className="images-top-actions"><button aria-label="Search image studio"><Search size={17} /></button><button className="images-settings-button" onClick={() => setSettingsOpen(true)}><PanelRight size={15} />Settings</button></div></header><div className="images-body"><ImageSidebar selectedId={selectedHistory?.id ?? null} open={historyOpen} onClose={() => setHistoryOpen(false)} onSelect={selectHistory} /><main className="images-main"><div className="images-main-heading"><div><span className="images-eyebrow">Creative workspace</span><h1>AI Image Generator <small>PLACEHOLDER MODE</small></h1><p>Explore image creation in a local frontend demo. No image provider is connected.</p></div><span className="demo-status"><i />Demo only</span></div><ImagePrompt prompt={prompt} setPrompt={setPrompt} aspectRatio={aspectRatio} count={count} style={style} quality={quality} setAspectRatio={setAspectRatio} setCount={setCount} setStyle={setStyle} setQuality={setQuality} onGenerate={startGeneration} /><ImageResults generating={generating} generated={generated} count={count} prompt={prompt} /><PromptIdeas onSelect={setPrompt} /></main><ImageSettings aspectRatio={aspectRatio} style={style} count={count} quality={quality} onAspectRatio={setAspectRatio} onStyle={setStyle} onCount={setCount} onQuality={setQuality} open={settingsOpen} onClose={() => setSettingsOpen(false)} /><button className="images-mobile-settings" onClick={() => setSettingsOpen(true)} aria-label="Open generation settings"><PanelRight size={17} /></button></div></div>;
}