export function ModelCapabilities({ capabilities }: { capabilities: string[] }) {
  return <div className="model-capabilities">{capabilities.map((capability) => <span key={capability}>{capability}</span>)}</div>;
}