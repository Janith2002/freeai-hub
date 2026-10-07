"use client";

import { Globe2, Paperclip, Send, Wrench } from "lucide-react";
import { useState } from "react";

export function WritingCommandBar() {
  const [command, setCommand] = useState("");
  const [web, setWeb] = useState(false);
  return <div className="writing-command-wrap"><div className="writing-command-bar"><textarea value={command} onChange={(event) => setCommand(event.target.value)} placeholder="Ask AI to write or edit..." aria-label="Ask AI to write or edit" /><div className="command-controls"><button className="command-tool"><Paperclip size={14} />Attach</button><button className="command-tool"><span className="context-symbol">@</span>Context</button><button className={`command-tool ${web ? "active" : ""}`} onClick={() => setWeb(!web)}><Globe2 size={14} />Web</button><button className="command-tool"><Wrench size={14} />Tools</button><button className="command-send" aria-label="Send writing command"><Send size={15} /></button></div></div><p><SparkleTiny /> AI writing suggestions are placeholder UI for now.</p></div>;
}
function SparkleTiny() { return <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Zm7 13 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /></svg>; }