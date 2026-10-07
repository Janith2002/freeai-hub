"use client";

import { useState } from "react";
import { Wrench } from "lucide-react";
import { defaultWorkflow, type AgentToolId, type WorkflowStep } from "./data";
import { AgentGoal } from "./agent-goal";
import { AgentResults } from "./agent-results";
import { AgentTaskInput } from "./agent-task-input";
import { AgentTools } from "./agent-tools";
import { AgentWorkflow } from "./agent-workflow";

export function AgentBuilder({ agentName, running, completed, onRun }: { agentName: string; running: boolean; completed: boolean; onRun: () => void }) {
  const [goal, setGoal] = useState("Research a topic, summarize the important findings, and create a structured report.");
  const [task, setTask] = useState("");
  const [context, setContext] = useState("");
  const [enabledTools, setEnabledTools] = useState<AgentToolId[]>(["web"]);
  const [steps, setSteps] = useState<WorkflowStep[]>(defaultWorkflow);
  const [enabledSteps, setEnabledSteps] = useState<Record<string, boolean>>({});
  const toggleTool = (id: AgentToolId) => setEnabledTools((current) => current.includes(id) ? current.filter((tool) => tool !== id) : [...current, id]);
  const addStep = () => setSteps((current) => [...current, { id: `custom-${current.length + 1}`, title: `Custom Step ${current.length + 1}`, description: "A configurable future workflow step", icon: Wrench }]);
  const allSteps = steps;
  return <div className="agent-builder"><div className="agent-builder-heading"><div><span className="agent-eyebrow">Build · configure · run locally</span><h1>AI Agent Workspace <small>PLACEHOLDER MODE</small></h1><p>Agent execution is currently a frontend demo. Real AI agents will be connected later.</p></div><span className="agent-demo-status"><i />Demo only</span></div><div className="agent-selector"><span>Agent</span><button className="active">{agentName}<span>Ready</span></button><button>Data Analyst</button><button>Content Writer</button><button>Custom Agent</button></div><AgentGoal value={goal} onChange={setGoal} /><AgentTaskInput value={task} onChange={setTask} context={context} onContextChange={setContext} /><AgentTools enabled={enabledTools} onToggle={toggleTool} /><AgentWorkflow steps={allSteps} enabled={enabledSteps} onToggle={(id) => setEnabledSteps((current) => ({ ...current, [id]: current[id] === false }))} onAdd={addStep} /><button className="run-agent-button" onClick={onRun} disabled={running}>{running ? <><span className="agent-spinner" />Running agent...</> : "Run Agent"}</button>{running && <div className="agent-execution-progress"><span className="agent-spinner" /><strong>Local demo execution in progress...</strong><small>No agents, tools, APIs, browser automation, or background jobs are being run.</small></div>}{completed && <AgentResults agentName={agentName} />}{!completed && !running && <div className="agent-empty-result"><span>✦</span><h3>Your agent result will appear here.</h3><p>Configure a task and run the local demo to see a placeholder result.</p></div>}</div>;
}