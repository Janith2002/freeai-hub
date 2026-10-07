export function ModelStatus({ status }: { status: string }) {
  return <span className={`model-status model-status-${status.toLowerCase().replaceAll(" ", "-")}`}><i />{status}</span>;
}