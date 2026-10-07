import { Check, Clipboard } from "lucide-react";
import { useState } from "react";

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const copyCode = async () => {
    await navigator.clipboard?.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };
  return <div className="chat-code-block"><div className="code-block-header"><span><i /><i /><i />javascript</span><button onClick={copyCode}>{copied ? <Check size={14} /> : <Clipboard size={14} />}{copied ? "Copied" : "Copy"}</button></div><pre><code>{code}</code></pre></div>;
}