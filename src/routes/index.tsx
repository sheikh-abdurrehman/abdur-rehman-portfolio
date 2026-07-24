import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Check, Sparkles, TrendingUp, Zap, Layers, Search, Code2, Star } from "lucide-react";
import { SiteLayout, CTASection } from "@/components/site/Layout";
import { PROJECTS, SERVICES, FAQS, TECH, PROCESS } from "@/components/site/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Sera — Shopify Development & CRO for Premium Brands" },
      {
        name: "description",
        content:
          "Independent Shopify Plus practice building bespoke storefronts, headless Hydrogen sites, and CRO programs for high-end international DTC brands.",
      },
      { property: "og:title", content: "Studio Sera — Shopify Development for Premium Brands" },
      {
        property: "og:description",
        content:
          "Bespoke Shopify Plus, Hydrogen, and CRO for premium DTC brands. Built to convert, made to last.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const ICONS: Record<string, any> = { Sparkles, TrendingUp, Zap, Layers, Search, Code2 };

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <MarqueeBar />
      <FeaturedServices />
      <FeaturedProjects />
      <WhyMe />
      <ProcessStrip />
      <TechStack />
      <ClientBenefits />
      <Testimonials />
      <HomeFAQ />
      <CTASection />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 80% 20%, oklch(0.82 0.14 78 / 0.18), transparent 60%)",
        }}
      />
      <div className="container-x relative pt-16 pb-20 md:pt-28 md:pb-32">
        <div className="flex items-center gap-3 animate-rise">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_theme(colors.emerald.400)]" />
          <p className="eyebrow">Available for two Q3 projects</p>
        </div>

        <h1 className="mt-10 font-display text-[13vw] md:text-[9vw] lg:text-[8.5rem] leading-[0.92] tracking-tight text-foreground animate-rise">
          Shopify stores <br />
          that <span className="gold-text italic">outperform</span> <br />
          the category.
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.4fr_1fr] items-end">
          <p className="text-lg md:text-2xl leading-relaxed text-muted-foreground max-w-2xl animate-rise">
            I'm a senior Shopify developer and e-commerce specialist helping premium DTC brands
            design, build, and scale storefronts that convert — from bespoke Shopify Plus themes
            to headless Hydrogen builds and ongoing CRO.
          </p>
          <div className="flex flex-wrap gap-3 animate-rise">
            <Link to="/contact" className="btn-gold btn-gold-hover">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/portfolio" className="btn-ghost">
              View portfolio
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-border pt-10">
          {[
            { k: "10+", v: "Years shipping Shopify" },
            { k: "60+", v: "Stores designed & built" },
            { k: "$180M+", v: "GMV run through my code" },
            { k: "94", v: "Avg. Lighthouse mobile" },
          ].map((s, i) => (
            <div key={i}>
              <p className="font-display text-4xl md:text-6xl gold-text">{s.k}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeBar() {
  const brands = ["MAISON LUMEN", "AURELIA", "NORTH ROAST", "VESSEL", "RAW FORGE", "ATELIER NORD", "HELIO&CO", "SILVA STUDIOS"];
  const row = [...brands, ...brands];
  return (
    <section className="border-y border-border py-6 overflow-hidden">
      <div className="flex gap-14 animate-marquee whitespace-nowrap">
        {row.map((b, i) => (
          <span key={i} className="font-display text-2xl md:text-4xl text-foreground/40">
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}

function FeaturedServices() {
  return (
    <section id="services" className="container-x py-24 md:py-32">
      <SectionHeading eyebrow="What I do" title={<>End-to-end Shopify, <span className="italic gold-text">done properly.</span></>} />

      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.slice(0, 6).map((s) => {
          const Icon = ICONS[s.icon] ?? Sparkles;
          return (
            <Link
              key={s.slug}
              to="/services"
              hash={s.slug}
              className="card-glass group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:border-primary/50"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 group-hover:opacity-100 transition duration-500"
                style={{ background: "radial-gradient(closest-side, oklch(0.82 0.14 78 / 0.25), transparent)" }}
              />
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-6 font-display text-2xl md:text-3xl">{s.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.lede}</p>
              <div className="mt-8 inline-flex items-center gap-1 text-sm text-primary">
                Explore service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <SectionHeading eyebrow="Selected work" title={<>Recent stores. <br className="hidden md:block" /><span className="italic gold-text">Real results.</span></>} />
        <Link to="/portfolio" className="btn-ghost">All projects <ArrowUpRight className="h-4 w-4" /></Link>
      </div>

      <div className="mt-16 space-y-6">
        {PROJECTS.slice(0, 3).map((p, i) => (
          <Link
            key={p.slug}
            to="/portfolio/$slug"
            params={{ slug: p.slug }}
            className="group grid gap-8 md:grid-cols-[1.4fr_1fr] items-center rounded-3xl border border-border p-6 md:p-10 hover:border-primary/40 transition-all duration-500"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[16/11] bg-surface">
              <img
                src={p.image}
                alt={p.name}
                width={1600}
                height={1100}
                loading={i === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
            </div>
            <div>
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-muted-foreground">
                <span>{p.industry}</span>
                <span>{p.year}</span>
              </div>
              <h3 className="mt-4 font-display text-4xl md:text-5xl">{p.name}</h3>
              <p className="mt-3 text-muted-foreground">{p.tagline}</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {p.results.slice(0, 2).map((r, j) => (
                  <div key={j} className="rounded-xl border border-border p-4">
                    <p className="font-display text-2xl md:text-3xl gold-text">{r.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{r.label}</p>
                  </div>
                ))}
              </div>
              <span className="mt-8 inline-flex items-center gap-1 text-sm text-primary">
                Read case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function WhyMe() {
  const items = [
    { n: "01", t: "One senior partner, not a rotating team", d: "You brief me — not an account manager. Every line of code, every design decision runs through my hands." },
    { n: "02", t: "Revenue-first, not portfolio-first", d: "I optimize for your P&L, not my award reel. Every recommendation has a business case behind it." },
    { n: "03", t: "Truly senior technical craft", d: "A decade of Shopify Plus, Hydrogen, and CRO. Deep enough to advise founders and CTOs alike." },
    { n: "04", t: "Async, international, on time", d: "Weekly demos, Loom-first updates, and calendars that respect three timezones." },
  ];
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="container-x py-24 md:py-32">
        <SectionHeading eyebrow="Why work with me" title={<>A small studio for brands that expect <span className="italic gold-text">a lot</span>.</>} />
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {items.map((it) => (
            <div key={it.n} className="group flex gap-6 border-t border-border pt-8">
              <span className="font-mono text-xs text-primary mt-1">{it.n}</span>
              <div>
                <h3 className="font-display text-2xl md:text-3xl">{it.t}</h3>
                <p className="mt-3 text-muted-foreground max-w-lg">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStrip() {
  return (
    <section className="container-x py-24 md:py-32">
      <SectionHeading eyebrow="How I work" title={<>A five-step process, tuned over <span className="italic gold-text">ten years</span>.</>} />
      <div className="mt-16 grid gap-4 md:grid-cols-5">
        {PROCESS.map((p) => (
          <div key={p.step} className="rounded-2xl border border-border p-6 hover:border-primary/40 transition">
            <p className="font-mono text-xs text-primary">{p.step}</p>
            <h3 className="mt-4 font-display text-2xl">{p.name}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Link to="/process" className="btn-ghost">See the full process <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section className="border-t border-border">
      <div className="container-x py-24 md:py-32">
        <SectionHeading eyebrow="Toolbox" title={<>The stack I <span className="italic gold-text">ship with</span>.</>} />
        <div className="mt-16 flex flex-wrap gap-3">
          {TECH.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-5 py-2.5 text-sm text-foreground/80 hover:border-primary hover:text-primary transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientBenefits() {
  const items = [
    "Storefronts that convert 2–4× the category benchmark",
    "Lighthouse mobile scores in the 90s, out of the box",
    "Zero page-builder bloat — clean, editable code",
    "Design your marketing team is proud to send to press",
    "One direct line for design, dev, CRO and strategy",
    "Async-friendly delivery across every timezone",
  ];
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid gap-16 md:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="What you get"
            title={<>Outcomes, not just <span className="italic gold-text">deliverables</span>.</>}
          />
          <p className="mt-6 text-muted-foreground max-w-md">
            Every engagement is measured against numbers that matter to your business —
            revenue per session, LTV, checkout completion, and page speed.
          </p>
        </div>
        <ul className="space-y-4">
          {items.map((b, i) => (
            <li key={i} className="flex gap-4 border-b border-border pb-4">
              <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="text-lg text-foreground/90">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { q: "Best Shopify partner we've worked with in a decade. Delivered a store that finally matches our brand — and our numbers.", n: "Elena Marchetti", r: "Founder, Maison Lumen" },
    { q: "Doubled our conversion in the first quarter after launch. The CRO program pays for itself every month.", n: "David Okafor", r: "CEO, Raw Forge" },
    { q: "The kind of senior partner every founder wishes they'd hired sooner. Sharp, honest, and ships.", n: "Ines Halvorsen", r: "CMO, Atelier Nord" },
  ];
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="container-x py-24 md:py-32">
        <SectionHeading eyebrow="Clients say" title={<>Kind words from <span className="italic gold-text">founders</span>.</>} />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {quotes.map((t, i) => (
            <figure key={i} className="card-glass rounded-2xl p-8 flex flex-col">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 text-lg leading-relaxed text-foreground/90 font-display">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-auto pt-8">
                <p className="text-sm text-foreground">{t.n}</p>
                <p className="text-xs text-muted-foreground">{t.r}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeFAQ() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading eyebrow="FAQ" title={<>Answers <br /><span className="italic gold-text">up-front</span>.</>} />
          <Link to="/faq" className="btn-ghost mt-8">All questions <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {FAQS.slice(0, 5).map((f, i) => (
            <AccordionItem key={i} value={`q-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-xl md:text-2xl hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-foreground max-w-4xl">
        {title}
      </h2>
    </div>
  );
}
