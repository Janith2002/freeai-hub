"use client";

import { ChevronDown, LockKeyhole } from "lucide-react";
import { useState } from "react";

export function ApiKeyBestPractices() { const [open, setOpen] = useState(false); return <section className={`best-practices ${open ? "open" : ""}`}><button onClick={() => setOpen(!open)}><span><LockKeyhole size={14} />API key best practices</span><ChevronDown size={14} /></button>{open && <ul><li>Keep API keys private.</li><li>Use environment variables or server-side secrets.</li><li>Rotate compromised keys.</li><li>Never commit keys to source control.</li><li>Use provider-specific restrictions where available.</li></ul>}</section>; }