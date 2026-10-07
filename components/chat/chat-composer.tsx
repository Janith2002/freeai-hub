"use client";

import { Globe2, Mic, Paperclip, Plus, Send, Wrench } from "lucide-react";
import { useState } from "react";
import { modelOptions } from "./data";

interface ChatComposerProps { model: string; onModelChange: (model: string) => void; onSend: (message: string) => void; }

export function ChatComposer({ model, onModelChange, onSend }: ChatComposerProps) {
  const [message, setMessage] = useState("");
  const [webSearch, setWebSearch] = useState(false);
  const submit = () => { if (!message.trim()) return; onSend(message.trim()); setMessage(""); };
  return <section className="chat-composer"><textarea value={message} onChange={(event) => setMessage(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); submit(); } }} placeholder="Message FreeAI Assistant..." aria-label="Message FreeAI Assistant" /><div className="composer-control-row"><button className="composer-add" aria-label="Add attachment"><Plus size={18} /></button><div className="composer-control-buttons"><button><Paperclip size={15} />Attach</button><button className={webSearch ? "active" : ""} onClick={() => setWebSearch(!webSearch)}><Globe2 size={15} />Web Search</button><button><Wrench size={15} />Tools</button><button className="mic-button" aria-label="Use microphone"><Mic size={16} /></button></div><label className="composer-model"><span>{model}</span><select value={model} onChange={(event) => onModelChange(event.target.value)} aria-label="Select composer model">{modelOptions.map((option) => <option key={option}>{option}</option>)}</select></label><button className="composer-send" onClick={submit} aria-label="Send message"><Send size={17} /></button></div></section>;
}