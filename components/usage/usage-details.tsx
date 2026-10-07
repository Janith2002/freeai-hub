"use client";

import { ChevronDown, Info } from "lucide-react";
import { useState } from "react";

export function UsageDetails() { const [open, setOpen] = useState(false); return <section className={`usage-details ${open ? "open" : ""}`}><button onClick={() => setOpen(!open)}><span><Info size={14} />How usage will work</span><ChevronDown size={15} /></button>{open && <div><p>Requests count AI calls. Tokens represent model input and output usage.</p><p>Provider limits depend on provider policies. Costs depend on provider pricing.</p><p>Actual values will appear after real providers are connected.</p></div>}</section>; }