import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, BrainCircuit, Check, ChevronDown, Code2, Command,
  FileSearch, Gauge, Layers3, Menu, MessageSquareText, Network, Play,
  Plus, Quote, Rocket, Search, Send, ShieldCheck, Sparkles, WandSparkles,
  X, Zap
} from "lucide-react";
import "./styles.css";

const features = [
  { icon: BrainCircuit, title: "Reasoning engine", text: "Move from scattered context to precise, defensible decisions in seconds." },
  { icon: Network, title: "Connected intelligence", text: "Bring your tools, documents, and conversations into one living workspace." },
  { icon: WandSparkles, title: "Generative workflows", text: "Automate repeatable work while keeping your team's judgment in the loop." },
  { icon: ShieldCheck, title: "Enterprise-grade trust", text: "Your data stays private, governed, and ready for the most demanding teams." },
  { icon: Gauge, title: "Real-time clarity", text: "See what matters now with live signals, summaries, and intelligent alerts." },
  { icon: Code2, title: "Built for builders", text: "A flexible API and modular primitives that fit your stack, not the other way around." }
];

const faqs = [
  ["What is Nexora AI?", "Nexora is an intelligent operating layer for modern teams. It connects your knowledge, tools, and workflows so people can make better decisions and execute faster."],
  ["Can Nexora connect to our existing tools?", "Yes. Nexora connects with the tools your team already uses through native integrations, secure APIs, and configurable data sources."],
  ["Is our data secure?", "Nexora is designed with enterprise security in mind, including encryption in transit and at rest, workspace permissions, and configurable retention controls."],
  ["How quickly can we get started?", "Most teams can be up and running in minutes. Enterprise customers receive guided onboarding, workspace configuration, and dedicated support."],
  ["Do you offer a free trial?", "Yes. The Pro plan includes a 14-day free trial with no credit card required."]
];

function Logo() {
  return <a className="logo" href="#top" aria-label="Nexora AI home"><span className="logo-mark"><span /></span><span>NEXORA<span className="logo-ai">AI</span></span></a>;
}

function Button({ children, primary = false, href = "#pricing", className = "" }) {
  return <a className={`button ${primary ? "button-primary" : "button-ghost"} ${className}`} href={href}>{children}{primary && <ArrowUpRight size={16} />}</a>;
}

function Nav() {
  const [open, setOpen] = useState(false);
  return <header className="nav-shell"><nav className="nav container"><Logo />
    <div className={`nav-links ${open ? "is-open" : ""}`}>
      {["Product","Features","Solutions","Pricing","Resources"].map(x => <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setOpen(false)}>{x}</a>)}
      <a className="mobile-signin" href="#signin">Sign in</a><Button primary href="#pricing" className="mobile-cta">Get started</Button>
    </div>
    <div className="nav-actions"><a className="signin" href="#signin">Sign in</a><Button primary>Get started</Button></div>
    <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
  </nav></header>;
}

function Orb() {
  return <div className="hero-orb-wrap"><div className="orb-grid" /><div className="orb">
    <div className="orb-core"><Sparkles size={30} /></div><div className="orb-ring ring-one" /><div className="orb-ring ring-two" /><div className="orb-ring ring-three" />
    <span className="orb-node node-a" /><span className="orb-node node-b" /><span className="orb-node node-c" />
  </div><div className="orb-label label-a"><span className="status-dot" />Live synthesis</div><div className="orb-label label-b"><Zap size={13} /> 98.7% signal</div><div className="orb-label label-c"><Network size={13} /> 42 sources connected</div></div>;
}

function Hero() {
  return <section className="hero section" id="top"><div className="hero-glow" /><div className="container hero-inner">
    <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" /> The intelligence layer for ambitious teams</div>
      <h1>Think deeper.<br /><em>Move faster.</em></h1>
      <p className="hero-text">Nexora AI turns complex information into clear momentum. One intelligent workspace for the decisions, workflows, and ideas that move your business forward.</p>
      <div className="hero-actions"><Button primary href="#pricing">Start building free</Button><a className="play-link" href="#product"><span className="play-icon"><Play size={13} fill="currentColor" /></span> See how it works</a></div>
      <div className="hero-proof"><div className="avatars"><span>AL</span><span>MK</span><span>JP</span><span>+2k</span></div><span>Trusted by teams building what's next</span></div>
    </div><Orb />
  </div><div className="hero-bottom container"><span>01 / 04</span><div className="progress"><span /></div><span>Scroll to explore <ArrowUpRight size={14} /></span></div></section>;
}

function Trusted(){return <section className="trusted section-small"><div className="container"><p>POWERING THE NEXT WAVE OF INNOVATION</p><div className="brand-row"><span>VANTA<span className="brand-symbol">◈</span></span><span>northstar</span><span>ARC<span className="brand-dot">●</span></span><span>kinetic</span><span>OBSIDIAN</span><span>cirrus</span></div></div></section>}

function FeatureCard({feature,index}){const Icon=feature.icon;return <article className="feature-card"><div className="feature-top"><span className="feature-number">0{index+1}</span><div className="feature-icon"><Icon size={21}/></div></div><h3>{feature.title}</h3><p>{feature.text}</p><a href="#product" className="card-link">Explore capability <ArrowUpRight size={15}/></a></article>}

function Features(){return <section className="section" id="features"><div className="container"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> One system. Infinite leverage.</div><h2>Intelligence that<br/><em>works with you.</em></h2></div><p>From the first question to the final deliverable, Nexora gives your team the context and capability to do exceptional work.</p></div><div className="feature-grid">{features.map((f,i)=><FeatureCard key={f.title} feature={f} index={i}/>)}</div></div></section>}

function MiniChart(){return <div className="mini-chart"><svg viewBox="0 0 500 140" preserveAspectRatio="none"><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#b8f76c" stopOpacity=".35"/><stop offset="100%" stopColor="#b8f76c" stopOpacity="0"/></linearGradient></defs><path d="M0 115 C45 110 55 90 92 98 S145 68 175 83 S215 30 255 62 S305 70 335 42 S380 55 405 24 S462 40 500 8 V140 H0Z" fill="url(#fill)"/><path d="M0 115 C45 110 55 90 92 98 S145 68 175 83 S215 30 255 62 S305 70 335 42 S380 55 405 24 S462 40 500 8" fill="none" stroke="#b5f879" strokeWidth="3"/></svg></div>}

function Dashboard(){return <section className="section showcase" id="product"><div className="container"><div className="showcase-intro"><div className="eyebrow"><span className="eyebrow-line"/> Your team's second brain</div><h2>See the signal<br/><em>through the noise.</em></h2><p>One calm, intelligent command center for everything your team knows, makes, and does.</p></div><div className="dashboard"><aside className="dash-sidebar"><Logo/><div className="side-label">Workspace</div>{[["⌂","Overview"],["✦","Intelligence"],["▣","Projects"],["⌁","Signals"]].map((x,i)=><div className={`side-item ${i===0?"active":""}`} key={x[1]}><span>{x[0]}</span>{x[1]}{i===1&&<b>3</b>}</div>)}<div className="side-label side-label-bottom">Your spaces</div><div className="space-item"><i className="space-purple"/> Product strategy</div><div className="space-item"><i className="space-orange"/> Growth engine</div><div className="space-item"><i className="space-blue"/> Q4 planning</div><div className="user-box"><span className="user-avatar">JD</span><span><b>Jordan Davis</b><small>Admin workspace</small></span><ChevronDown size={14}/></div></aside><main className="dash-main"><div className="dash-head"><div><span className="muted">Tuesday, October 22, 2024</span><h3>Good morning, Jordan <span>✦</span></h3></div><div className="dash-tools"><button><Search size={16}/></button><button><Command size={16}/> K</button><span className="dash-avatar">JD</span></div></div><div className="dash-grid"><div className="metric-card dark-card"><div className="metric-title">Team momentum <span>↑ 18.4%</span></div><strong>84.6</strong><span className="metric-sub">vs. 71.2 last month</span><MiniChart/></div><div className="metric-card"><div className="metric-title">Active signals <span className="green">● Live</span></div><strong>128</strong><span className="metric-sub">+24 this week</span><div className="signal-bars">{Array.from({length:12},(_,i)=><i key={i}/>)}</div></div><div className="activity-card"><div className="card-title">Recent intelligence <a href="#resources">View all <ArrowUpRight size={13}/></a></div>{["Market pulse: AI infrastructure","Q4 launch brief synthesized","Competitor movement detected"].map((t,i)=><div className="activity" key={t}><span className={`activity-icon ai-${i}`}><FileSearch size={15}/></span><span><b>{t}</b><small>{i===0?"2 min ago · 18 sources":i===1?"Today · Product strategy":"Yesterday · Growth engine"}</small></span><ArrowUpRight size={14}/></div>)}</div><div className="assistant-card"><div className="assistant-head"><span className="assistant-icon"><Sparkles size={17}/></span><span><b>Nexora assistant</b><small>Ready to help</small></span><span className="live-badge">LIVE</span></div><div className="assistant-message">I've found three patterns across your latest research. Want the short version?</div><div className="assistant-input"><span>Ask Nexora anything...</span><Send size={15}/></div></div></div></main></div></div></section>}

function Steps(){return <section className="section steps-section"><div className="container"><div className="center-heading"><div className="eyebrow"><span className="eyebrow-line"/> Simple by design</div><h2>From question to<br/><em>breakthrough.</em></h2></div><div className="steps">{[["01","Connect your world","Bring your knowledge, tools, and data into one secure, intelligent workspace.",Layers3],["02","Ask better questions","Nexora finds the signal, connects the dots, and gives you answers grounded in your context.",MessageSquareText],["03","Make it happen","Turn insight into action with workflows that help your team move from thinking to doing.",Rocket]].map(([n,t,d,I])=><div className="step" key={n}><span className="step-number">{n}</span><div className="step-icon"><I size={24}/></div><h3>{t}</h3><p>{d}</p>{n!=="03"&&<span className="step-line"/>}</div>)}</div></div></section>}

function Solutions(){return <section className="section solutions" id="solutions"><div className="container"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> Built for momentum</div><h2>Every team has<br/><em>more to unlock.</em></h2></div><p>Nexora adapts to the way your team thinks, works, and wins.</p></div><div className="solution-grid">{[["01","For businesses","Make sharper decisions with a complete view of your market, customers, and operations.","↗","business"],["02","For developers","Ship with a powerful context layer that understands your codebase and product.","</>","developer"],["03","For marketing teams","Turn customer signals into campaigns that feel timely, relevant, and unmistakably you.","✧","marketing"],["04","For creators","Go from a spark of an idea to work you're proud to put into the world.","✦","creator"]].map(x=><a className={`solution ${x[4]}`} href="#pricing" key={x[1]}><span className="solution-num">{x[0]}</span><span className="solution-symbol">{x[3]}</span><h3>{x[1]}</h3><p>{x[2]}</p><span className="solution-arrow"><ArrowUpRight/></span></a>)}</div></div></section>}

function Testimonials(){return <section className="section testimonials"><div className="container"><div className="center-heading"><div className="eyebrow"><span className="eyebrow-line"/> Words from the field</div><h2>Don't take our<br/><em>word for it.</em></h2></div><div className="testimonial-grid">{[["Nexora gave us back the one thing a growing team can never get enough of: deep work. We move faster, but more importantly, we think better.","Maya Chen","VP Product, Northstar"],["It feels less like using a tool and more like adding a remarkably sharp person to every room. The context is genuinely transformative.","Alex Rivera","Founder, Kinetic"],["We went from a week of research to an afternoon. Nexora doesn't just accelerate the work, it raises the quality of the questions we're asking.","Sam Okafor","Creative Director, Vanta"]].map(x=><article className="testimonial" key={x[1]}><Quote size={24}/><p>“{x[0]}”</p><div><span className="testimonial-avatar">{x[1].split(" ").map(y=>y[0]).join("")}</span><span><b>{x[1]}</b><small>{x[2]}</small></span></div></article>)}</div></div></section>}

function Pricing(){const plans=[["Starter","For curious individuals and small experiments.","$0","forever",["1 workspace","1,000 AI actions / month","Core intelligence","Community support"]],["Pro","For teams ready to move with more clarity.","$29","per user / month",["Unlimited workspaces","25,000 AI actions / month","Advanced workflows","Priority support","Team analytics"]],["Enterprise","For organizations building their next advantage.","Custom","tailored to you",["Unlimited intelligence","Custom data connectors","Advanced governance","Dedicated success team"]]];return <section className="section pricing" id="pricing"><div className="container"><div className="center-heading"><div className="eyebrow"><span className="eyebrow-line"/> Plans that scale with you</div><h2>Start small.<br/><em>Think enormous.</em></h2><p>Simple, transparent pricing. Upgrade when the work demands it.</p></div><div className="price-grid">{plans.map((p,i)=><article className={`price-card ${i===1?"featured":""}`} key={p[0]}>{i===1&&<span className="popular">Most popular</span>}<h3>{p[0]}</h3><p>{p[1]}</p><div className="price">{p[2]}<small>{p[3]}</small></div><Button primary={i===1} href="#top">{i===2?"Talk to sales":"Get started"}</Button><div className="includes">Includes:</div>{p[4].map(x=><div className="price-feature" key={x}><Check size={15}/> {x}</div>)}</article>)}</div></div></section>}

function FAQ(){const [active,setActive]=useState(0);return <section className="section faq" id="resources"><div className="container faq-layout"><div><div className="eyebrow"><span className="eyebrow-line"/> Questions, answered</div><h2>Clear answers.<br/><em>Zero friction.</em></h2><p>Still curious? Our team is one message away.</p><a className="text-link" href="mailto:hello@nexora.ai">Talk to our team <ArrowUpRight size={15}/></a></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${active===i?"open":""}`} key={q}><button onClick={()=>setActive(active===i?-1:i)}><span>0{i+1}</span>{q}<Plus size={19}/></button><div className="faq-answer"><p>{a}</p></div></div>)}</div></div></section>}

function Footer(){return <footer className="footer"><div className="container"><div className="footer-cta"><div><div className="eyebrow"><span className="eyebrow-line"/> The future is already moving</div><h2>Make your next move<br/><em>your best one.</em></h2></div><Button primary href="#pricing">Start with Nexora</Button></div><div className="footer-main"><div><Logo/><p>Intelligence, amplified.<br/>For people building what's next.</p></div><div className="footer-links"><div><b>Explore</b><a href="#product">Product</a><a href="#features">Features</a><a href="#solutions">Solutions</a><a href="#pricing">Pricing</a></div><div><b>Company</b><a href="#resources">About</a><a href="#resources">Careers <small>4</small></a><a href="#resources">Contact</a><a href="#resources">Journal</a></div><div><b>Follow</b><a href="#resources">X / Twitter</a><a href="#resources">LinkedIn</a><a href="#resources">Instagram</a><a href="#resources">GitHub</a></div></div></div><div className="footer-bottom"><span>© 2024 Nexora AI, Inc.</span><span>Privacy · Terms · Security</span><span>Made for the curious <Sparkles size={13}/></span></div></div></footer>}

function App(){return <><Nav/><main><Hero/><Trusted/><Features/><Dashboard/><Steps/><Solutions/><Testimonials/><Pricing/><FAQ/></main><Footer/></>}

createRoot(document.getElementById("root")).render(<App/>);
