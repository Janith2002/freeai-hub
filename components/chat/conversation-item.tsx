import { MoreVertical } from "lucide-react";
import type { Conversation } from "./data";

interface ConversationItemProps {
  conversation: Conversation;
  selected: boolean;
  onSelect: () => void;
}

export function ConversationItem({ conversation, selected, onSelect }: ConversationItemProps) {
  return (
    <button className={`chat-conversation-item ${selected ? "selected" : ""}`} onClick={onSelect}>
      <span className="conversation-status" />
      <span className="conversation-item-copy">
        <strong>{conversation.title}</strong>
        <small>{conversation.timestamp}</small>
      </span>
      <span className="conversation-menu"><MoreVertical size={16} /></span>
    </button>
  );
}