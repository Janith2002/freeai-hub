"use client";

import { ArrowLeft, Bot, Sparkles } from "lucide-react";
import { useState } from "react";
import { ChatComposer } from "./chat-composer";
import { ChatHeader } from "./chat-header";
import { ChatMessage } from "./chat-message";
import { ChatSidebar } from "./chat-sidebar";
import { currentModel, conversations, suggestions, type Conversation } from "./data";
import { ModelInfoPanel } from "./model-info-panel";
import { SuggestionCard } from "./suggestion-card";

export function ChatWorkspace() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(conversations[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modelPanelOpen, setModelPanelOpen] = useState(false);
  const [model, setModel] = useState(currentModel.name);
  const [sentMessages, setSentMessages] = useState<string[]>([]);
  const selectConversation = (conversation: Conversation) => { setSelectedConversation(conversation); setSidebarOpen(false); };
  const startNewChat = () => { setSelectedConversation(null); setSentMessages([]); setSidebarOpen(false); };
  const sendMessage = (message: string) => { setSelectedConversation((conversation) => conversation ?? { id: "new-chat", title: message.slice(0, 32), timestamp: "Now", group: "Today" }); setSentMessages((messages) => [...messages, message]); };
  return <div className="chat-page"><ChatSidebar selectedId={selectedConversation?.id ?? null} open={sidebarOpen} onSelect={selectConversation} onNewChat={startNewChat} onClose={() => setSidebarOpen(false)} /><main className="chat-main"><ChatHeader title={selectedConversation?.title ?? "New conversation"} model={model} onModelChange={setModel} onMenu={() => setSidebarOpen(true)} onInfo={() => setModelPanelOpen(true)} /><div className="chat-scroll-area">{selectedConversation ? <div className="message-thread"><div className="thread-date"><span>Today</span></div><ChatMessage role="user">Can you explain how renewable energy works and why it matters for the future?</ChatMessage><ChatMessage role="assistant" code><p>Renewable energy comes from natural sources that replenish themselves, such as sunlight, wind, water, and geothermal heat.</p><p>It matters because it can help reduce greenhouse gas emissions while creating a more resilient and sustainable energy system.</p><h3>Common renewable sources</h3><ul><li><strong>Solar:</strong> converts sunlight into electricity or heat.</li><li><strong>Wind:</strong> uses turbines to generate clean electricity.</li><li><strong>Hydropower:</strong> captures the movement of water.</li></ul></ChatMessage>{sentMessages.map((message, index) => <ChatMessage key={`${message}-${index}`} role="user">{message}</ChatMessage>)}</div> : <div className="empty-chat"><div className="empty-chat-icon"><Sparkles size={25} /></div><h2>How can I help you today?</h2><p>Ask anything, or choose a starting point below.</p><div className="suggestion-grid">{suggestions.map((suggestion) => <SuggestionCard key={suggestion.title} suggestion={suggestion} onSelect={() => sendMessage(suggestion.prompt)} />)}</div></div>}</div><div className="chat-compose-wrap"><ChatComposer model={model} onModelChange={setModel} onSend={sendMessage} /><p className="composer-disclaimer"><Bot size={13} /> FreeAI Hub can make mistakes. Check important information.</p></div></main><ModelInfoPanel open={modelPanelOpen} onClose={() => setModelPanelOpen(false)} /><button className="mobile-model-trigger" onClick={() => setModelPanelOpen(true)}><ArrowLeft size={16} />Model info</button></div>;
}