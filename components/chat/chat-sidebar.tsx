"use client";

import { MessageSquarePlus, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { conversations, type Conversation, type ConversationGroup } from "./data";
import { ConversationItem } from "./conversation-item";

interface ChatSidebarProps {
  selectedId: string | null;
  open: boolean;
  onSelect: (conversation: Conversation) => void;
  onNewChat: () => void;
  onClose: () => void;
}

const groups: ConversationGroup[] = ["Today", "Yesterday", "Previous 7 days"];

export function ChatSidebar({ selectedId, open, onSelect, onNewChat, onClose }: ChatSidebarProps) {
  const [query, setQuery] = useState("");
  const filteredConversations = useMemo(
    () => conversations.filter((conversation) => conversation.title.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <>
      {open && <button className="chat-drawer-backdrop" onClick={onClose} aria-label="Close chats" />}
      <aside className={`chat-sidebar ${open ? "chat-sidebar-open" : ""}`}>
        <div className="chat-sidebar-header">
          <div><span className="chat-sidebar-title">Chats</span><span className="chat-count">{conversations.length}</span></div>
          <button className="chat-close-button" onClick={onClose} aria-label="Close chat sidebar"><X size={18} /></button>
        </div>
        <button className="new-chat-button" onClick={onNewChat}><MessageSquarePlus size={17} />New Chat</button>
        <label className="chat-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search conversations" aria-label="Search conversations" /></label>
        <div className="conversation-groups">
          {groups.map((group) => {
            const groupConversations = filteredConversations.filter((conversation) => conversation.group === group);
            if (groupConversations.length === 0) return null;
            return <section key={group}><h2>{group}</h2>{groupConversations.map((conversation) => <ConversationItem key={conversation.id} conversation={conversation} selected={selectedId === conversation.id} onSelect={() => onSelect(conversation)} />)}</section>;
          })}
        </div>
        <div className="chat-sidebar-footer"><span className="mini-avatar">JA</span><span><strong>Janith Akalanka</strong><small>Free plan</small></span><span className="footer-dot" /></div>
      </aside>
    </>
  );
}