import { ChevronDown, Info, Menu, MoreHorizontal } from "lucide-react";
import { modelOptions } from "./data";

interface ChatHeaderProps {
  title: string;
  model: string;
  onModelChange: (model: string) => void;
  onMenu: () => void;
  onInfo: () => void;
}

export function ChatHeader({ title, model, onModelChange, onMenu, onInfo }: ChatHeaderProps) {
  return <header className="chat-main-header"><button className="chat-mobile-menu" onClick={onMenu} aria-label="Open chats"><Menu size={20} /></button><div className="chat-title-block"><h1>{title}</h1><div className="chat-live-status"><span />Ready to chat</div></div><div className="chat-header-actions"><label className="chat-model-select"><span>{model}</span><ChevronDown size={15} /><select value={model} onChange={(event) => onModelChange(event.target.value)} aria-label="Select model">{modelOptions.map((option) => <option key={option}>{option}</option>)}</select></label><button className="chat-info-button" onClick={onInfo} aria-label="Show model information"><Info size={18} /></button><button className="chat-info-button" aria-label="More options"><MoreHorizontal size={19} /></button></div></header>;
}