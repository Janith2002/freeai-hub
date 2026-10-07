import { MoreHorizontal } from "lucide-react";
import type { WritingDocument } from "./data";

export function DocumentList({ documents, selectedId, onSelect }: { documents: WritingDocument[]; selectedId: string; onSelect: (document: WritingDocument) => void }) {
  return <div className="writing-document-list">{documents.map((document) => { const Icon = document.icon; return <button key={document.id} className={`writing-document ${selectedId === document.id ? "selected" : ""}`} onClick={() => onSelect(document)}><span className={`document-icon document-${document.tone}`}><Icon size={15} /></span><span className="document-copy"><strong>{document.title}</strong><small>{document.type} <i /> {document.edited}</small></span><MoreHorizontal size={15} className="document-menu" /></button>; })}</div>;
}