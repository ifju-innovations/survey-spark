import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Compass, Sparkles, MessageCircle, ArrowRight, Check, Quote, Brain, Flame, Trophy, MapPin } from "lucide-react";
import productImage from "@/assets/polaris-direction.jpg";
import personaAarav from "@/assets/persona-aarav.jpg";
import personaSneha from "@/assets/persona-sneha.jpg";
import personaRohit from "@/assets/persona-rohit.jpg";

type Question = {
  id: string;
  question: string;
  subtitle?: string;
  options: string[];
};

const QUESTIONS: Question[] = [
  { id: "age", question: "How old are you?", options: ["15–18", "19–22", "23–26", "27–30"] },
  { id: "feel", question: "How often do you feel lost or directionless?", subtitle: "Be honest — no one's watching.", options: ["Almost every day", "A few times a week", "Sometimes", "Rarely"] },
  { id: "screen", question: "How many hours a day do you spend on social media?", options: ["Less than 2", "2–4 hours", "4–6 hours", "6+ hours"] },
  { id: "struggle", question: "What's your biggest struggle right now?", options: ["Focus & studies", "Mental health & anxiety", "Bad habits (porn, scrolling)", "No clear life goal"] },
  { id: "tried", question: "What have you tried for guidance?", options: ["Astrology apps", "Motivational podcasts", "Self-help books", "Nothing — I just scroll"] },
  { id: "city", question: "Which kind of place do you call home?", subtitle: "Helps us tune the plan to your context.", options: ["Tier I metro (Mumbai, Delhi, Bengaluru…)", "Tier II city (Pune, Jaipur, Kochi…)", "Tier III town", "Rural India"] },
];

export function NorthStarLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <SurveySection id="survey" />
      <CaseStudies />
      <SecondSurveyCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full grid place-items-center" style={{ background: "var(--gradient-gold)" }}>
            <Compass className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-display text-xl font-semibold tracking-tight">Polaris</span>
        </a>
        <a href="#survey">
          <Button variant="default" size="sm" className="rounded-full">
            Personalize my plan <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, oklch(0.78 0.14 70 / 0.4), transparent 70%)" }} />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, oklch(0.68 0.07 145 / 0.3), transparent 70%)" }} />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 text-xs font-medium text-muted-foreground mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold-deep" /> 1,200+ students already discovering themselves with Polaris
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
            In a world of <em className="italic text-gold-deep">distraction</em>,
            <br /> we give <span style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>direction</span>.
          </h1>
          <div className="mt-8 relative max-w-xl">
            <div className="absolute -left-4 top-0 bottom-0 w-1 rounded-full" style={{ background: "var(--gradient-gold)" }} />
            <p className="pl-6 text-lg text-foreground/80 leading-relaxed font-light">
              <span className="font-display italic text-foreground text-xl">Polaris</span> is your personal self-discovery coach. Answer a few honest questions about who you are today — we'll craft a <span className="font-semibold text-foreground">science-backed daily plan</span> to help you focus, grow, and meet the version of you you're meant to be.
            </p>
            <div className="mt-5 pl-6 flex flex-wrap gap-2">
              {["Psychology-led", "Built around you", "5-minute rituals"].map((t) => (
                <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-card border border-border text-foreground/70">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#survey">
              <Button size="lg" className="rounded-full text-base h-12 px-6" style={{ background: "var(--gradient-gold)", color: "oklch(0.22 0.03 50)", boxShadow: "var(--shadow-glow)" }}>
                Get my personalized plan <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
            <a href="#stories">
              <Button size="lg" variant="outline" className="rounded-full text-base h-12 px-6 bg-card/60">
                See real stories
              </Button>
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div><span className="font-semibold text-foreground">60M+</span> use astrology apps</div>
            <div className="w-px h-4 bg-border" />
            <div><span className="font-semibold text-foreground">5–7 hrs</span> daily scrolling</div>
            <div className="w-px h-4 bg-border" />
            <div><span className="font-semibold text-foreground">68%</span> feel alienated</div>
          </div>
        </div>
        <ProductVisual />
      </div>
    </section>
  );
}

function ProductVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div className="absolute -inset-6 rounded-[2.5rem] blur-3xl opacity-50" style={{ background: "var(--gradient-gold)" }} />
      <div className="relative rounded-[2rem] overflow-hidden border border-border bg-card" style={{ boxShadow: "var(--shadow-soft)" }}>
        <img
          src={productImage}
          alt="Polaris — a premium self-discovery companion"
          width={1024}
          height={1280}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

function SurveySection({ id }: { id: string }) {
  return (
    <section id={id} className="py-24 px-6 bg-secondary/40">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <div className="text-xs uppercase tracking-[0.2em] text-gold-deep font-semibold mb-3">Your Personal Blueprint</div>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">Let's get to <em className="italic">know you</em></h2>
        <p className="mt-4 text-muted-foreground">6 quick questions so Polaris can tailor a plan to your goals, your pace, and your life.</p>
      </div>
      <Survey />
    </section>
  );
}

function Survey() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const total = QUESTIONS.length + 1;
  const progress = useMemo(() => Math.round(((step) / total) * 100), [step, total]);

  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => { cardRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }); }, [step]);

  if (submitted) return <JoinWhatsApp />;

  const isContact = step === QUESTIONS.length;
  const q = QUESTIONS[step];

  return (
    <div ref={cardRef} className="mx-auto max-w-2xl rounded-3xl bg-card border border-border p-6 sm:p-10" style={{ boxShadow: "var(--shadow-soft)" }}>
      <div className="flex items-center justify-between mb-2 text-xs font-medium text-muted-foreground">
        <span>{Math.min(step + 1, total)} of {total}</span>
        <span>{progress}% complete</span>
      </div>
      <Progress value={progress} className="h-2 mb-8" />

      {!isContact && q && (
        <div key={q.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">{q.question}</h3>
          {q.subtitle && <p className="mt-2 text-sm text-muted-foreground">{q.subtitle}</p>}
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {q.options.map((opt) => {
              const selected = answers[q.id] === opt;
              return (
                <button
                  key={opt}
                  onClick={() => {
                    setAnswers((a) => ({ ...a, [q.id]: opt }));
                    setTimeout(() => setStep((s) => s + 1), 250);
                  }}
                  className={`text-left rounded-2xl p-4 border-2 transition-all hover:-translate-y-0.5 ${selected ? "border-gold bg-accent/30" : "border-border bg-background hover:border-gold/50"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{opt}</span>
                    {selected && <Check className="w-4 h-4 text-gold-deep" />}
                  </div>
                </button>
              );
            })}
          </div>
          <div className="mt-8 flex justify-between">
            <Button variant="ghost" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>Back</Button>
            <Button variant="ghost" onClick={() => setStep((s) => s + 1)}>Skip</Button>
          </div>
        </div>
      )}

      {isContact && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">Where should we send your blueprint?</h3>
          <p className="mt-2 text-sm text-muted-foreground">Drop an email <em>or</em> WhatsApp number — whichever you check more. We'll send your personalized plan there.</p>
          <div className="mt-6 space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
              <Input type="email" placeholder="you@example.com" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className="mt-1 h-12 rounded-xl" />
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex-1 h-px bg-border" /> or <div className="flex-1 h-px bg-border" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">WhatsApp Number</label>
              <Input type="tel" placeholder="+91 98765 43210" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} className="mt-1 h-12 rounded-xl" />
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <Button variant="ghost" onClick={() => setStep((s) => s - 1)}>Back</Button>
            <Button
              size="lg"
              disabled={!contact.email && !contact.phone}
              onClick={() => {
                try { localStorage.setItem("polaris_survey", JSON.stringify({ answers, contact, at: Date.now() })); } catch {}
                setSubmitted(true);
              }}
              className="rounded-full h-12 px-6"
              style={{ background: "var(--gradient-gold)", color: "oklch(0.22 0.03 50)" }}
            >
              Generate my blueprint <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function JoinWhatsApp() {
  return (
    <div className="mx-auto max-w-2xl rounded-3xl bg-card border border-border p-10 text-center" style={{ boxShadow: "var(--shadow-soft)" }}>
      <div className="mx-auto w-16 h-16 rounded-full grid place-items-center" style={{ background: "var(--gradient-gold)" }}>
        <Check className="w-8 h-8 text-primary-foreground" strokeWidth={3} />
      </div>
      <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight">You're in.</h3>
      <p className="mt-3 text-muted-foreground">Join our Polaris insiders WhatsApp group — that's where we share blueprints, weekly challenges, and pick our first 100 testers.</p>
      <a href="https://chat.whatsapp.com/" target="_blank" rel="noopener noreferrer">
        <Button size="lg" className="mt-6 rounded-full h-12 px-6 bg-sage hover:bg-sage/90 text-primary-foreground">
          <MessageCircle className="w-4 h-4 mr-2" /> Join the WhatsApp group
        </Button>
      </a>
    </div>
  );
}

const personas = [
  {
    name: "Aarav, 17",
    label: "JEE aspirant · Kota",
    image: personaAarav,
    pain: "Scrolling 6 hrs/day, failed two mock tests, parents disappointed.",
    psych: "Cue-routine-reward loop replaced Instagram with a 'study trigger'.",
    exp: "Daily 90-min Deep Work blocks, peer accountability with 4 other aspirants.",
    goal: "AIR 4,521 → cracked JEE Advanced. Now mentors juniors on the app.",
  },
  {
    name: "Sneha, 21",
    label: "B.Com final year · Pune",
    image: personaSneha,
    pain: "No career clarity, anxiety attacks, comparing herself on Instagram every night.",
    psych: "CBT journaling + gratitude practice rewired her self-talk.",
    exp: "Personalised 60-day clarity plan, weekly AI book summaries (Drive, Atomic Habits).",
    goal: "Landed a content-strategy role at a Series-A startup. Anxiety down 70%.",
  },
  {
    name: "Rohit, 24",
    label: "Software engineer · Bengaluru",
    image: personaRohit,
    pain: "Addicted to porn & late-night reels, burnt out, lost gym streak after 2 yrs.",
    psych: "Urge-surfing + dopamine reset, NOFAP framework with anonymous community.",
    exp: "90-day reset plan, streak gamification, 5 AM club challenge.",
    goal: "120-day clean streak, ran his first half-marathon, promoted at work.",
  },
];

function CaseStudies() {
  return (
    <section id="stories" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-gold-deep font-semibold mb-3">Real journeys</div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">From <em className="italic">lost</em> to leading their own life</h2>
          <p className="mt-4 text-muted-foreground">Three people. Three pain points. One framework: psychology + experience + measurable milestones.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {personas.map((p, i) => (
            <article
              key={p.name}
              className="group relative rounded-[2rem] bg-card border border-border overflow-hidden flex flex-col transition-all hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={`Portrait of ${p.name}`}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, oklch(0.22 0.05 30 / 0.85) 100%)" }} />
                <div className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-background/80 backdrop-blur text-foreground">
                  Case #{i + 1}
                </div>
                <div className="absolute bottom-4 left-5 right-5 text-primary-foreground">
                  <div className="font-display text-2xl font-semibold tracking-tight">{p.name}</div>
                  <div className="text-xs opacity-90">{p.label}</div>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="relative rounded-2xl bg-secondary/60 border border-border p-4 mb-6">
                  <Quote className="absolute -top-2 -left-2 w-5 h-5 text-gold-deep bg-card rounded-full p-0.5" />
                  <p className="text-sm text-foreground/90 italic leading-relaxed">"{p.pain}"</p>
                </div>
                <div className="space-y-4 text-sm flex-1">
                  <Milestone label="Psychology" text={p.psych} step={1} icon={<Brain className="w-3.5 h-3.5" />} />
                  <Milestone label="Experience" text={p.exp} step={2} icon={<Flame className="w-3.5 h-3.5" />} />
                  <Milestone label="Achieved" text={p.goal} step={3} icon={<Trophy className="w-3.5 h-3.5" />} highlight />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Milestone({ label, text, step, highlight, icon }: { label: string; text: string; step: number; highlight?: boolean; icon?: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <div className={`w-7 h-7 rounded-full grid place-items-center text-[10px] font-bold shrink-0 ${highlight ? "text-primary-foreground" : "text-foreground bg-muted"}`} style={highlight ? { background: "var(--gradient-gold)" } : undefined}>
        {icon ?? step}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">{label}</div>
        <div className="text-sm leading-relaxed">{text}</div>
      </div>
    </div>
  );
}

function SecondSurveyCTA() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-4xl rounded-3xl overflow-hidden relative p-12 sm:p-16 text-center" style={{ background: "var(--gradient-gold)" }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white, transparent 40%), radial-gradient(circle at 80% 80%, white, transparent 40%)" }} />
        <div className="relative">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-primary-foreground">Ready to meet your future self?</h2>
          <p className="mt-4 text-primary-foreground/85 max-w-xl mx-auto">Six honest answers. One personalized blueprint built around your goals, your habits, your pace.</p>
          <a href="#survey">
            <Button size="lg" className="mt-8 rounded-full h-12 px-7 bg-background text-foreground hover:bg-background/90">
              Build my blueprint <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-gold-deep" />
          <span className="font-display font-semibold text-foreground">Polaris</span>
          <span>· Your inner compass, decoded.</span>
        </div>
        <div>© {new Date().getFullYear()} Polaris Labs</div>
      </div>
    </footer>
  );
}