import type { WritingTemplate } from "./data";

export function TemplateList({ templates, selectedName, onSelect }: { templates: WritingTemplate[]; selectedName: string | null; onSelect: (template: WritingTemplate) => void }) {
  return <div className="writing-template-list">{templates.map((template) => { const Icon = template.icon; return <button key={template.name} className={`writing-template ${selectedName === template.name ? "selected" : ""}`} onClick={() => onSelect(template)}><span className={`template-icon template-${template.tone}`}><Icon size={14} /></span><span><strong>{template.name}</strong><small>{template.description}</small></span></button>; })}</div>;
}