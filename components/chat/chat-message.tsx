import { Bot, Check, Copy, RotateCcw, User } from "lucide-react";
import { useState } from "react";
import { sampleCode } from "./data";
import { CodeBlock } from "./code-block";

export function ChatMessage({ role, children, code = false }: { role: "user" | "assistant"; children: React.ReactNode; code?: boolean }) {
  const [copied, setCopied] = useState(false);
  const copyMessage = async () => { await navigator.clipboard?.writeText(typeof children === "string" ? children : ""); setCopied(true); window.setTimeout(() => setCopied(false), 1600); };
  if (role === "user") return <article className="chat-message user-message"><div className="message-avatar user-avatar"><User size={16} /></div><div className="message-content"><div className="message-meta"><strong>You</strong><time>10:42 AM</time></div><div className="user-bubble">{children}</div></div></article>;
  return <article className="chat-message assistant-message"><div className="message-avatar assistant-avatar"><Bot size={17} /></div><div className="message-content"><div className="message-meta"><strong>FreeAI Assistant</strong><span className="message-model">Gemini 2.5 Flash</span><time>10:42 AM</time></div><div className="assistant-copy">{children}{code && <CodeBlock code={sampleCode} />}</div><div className="message-actions"><button onClick={copyMessage}>{copied ? <Check size={14} /> : <Copy size={14} />}{copied ? "Copied" : "Copy"}</button><button><RotateCcw size={14} />Regenerate</button></div></div></article>;
}