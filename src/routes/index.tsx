import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Sparkles,
  TrendingUp,
  Zap,
  Layers, 
  Search,
  Code2,
  Star,
} from "lucide-react";
import { SiteLayout, CTASection } from "@/components/site/Layout";
import { PROJECTS, SERVICES, FAQS, TECH, PROCESS } from "@/components/site/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdur Rehman | Shopify Developer & E-commerce Specialist" },
      {
        name: "description",
        content:
          "Shopify developer specializing in custom Shopify stores, theme development, responsive design, and modern e-commerce experiences.",
      },
      { property: "og:title", content: "Abdur Rehman | Shopify Developer & E-commerce Specialist" },
      {
        property: "og:description",
        content:
          " Shopify developer specializing in custom Shopify stores, theme development, responsive design, and modern e-commerce experiences.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const ICONS: Record<string, React.ElementType> = {
  Sparkles,
  TrendingUp,
  Zap,
  Layers,
  Search,
  Code2,
};

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
      <HomeFAQ />
      <CTASection />
    </SiteLayout>
  );
}

function Hero() {
  return (
<section
  className="relative overflow-hidden bg-cover bg-[72%_center] md:bg-right bg-no-repeat"
  style={{
    backgroundImage: "url('/abdur-profile.png')",
  }}
>
   
    <div className="absolute inset-0 bg-black/45" />
<div className="container-x relative z-10 min-h-screen flex flex-col justify-center pt-20 pb-16 lg:pt-16 lg:pb-20 lg:pl-8">

        
        <div className="flex items-center gap-3 animate-rise">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_theme(colors.emerald.400)]" />
  
        </div>

<div className="mt-6 max-w-lg animate-rise relative z-20">
<p className="text-sm
tracking-[0.35em]
uppercase
font-medium
text-primary">
  SHOPIFY DEVELOPER • ECOMMERCE SPECIALIST
</p>
<h1 className="mt-8 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-white max-w-3xl">
Custom Shopify
<br />
<span className="gold-text italic">Development</span>
<br />
for Modern Brands.
</h1>

<p className="mt-8 text-base sm:text-lg md:text-xl text-white/75 max-w-xl leading-8">
 I build fast, scalable, and conversion-focused Shopify stores with clean code, responsive design, and exceptional user experience.
</p>
</div>

  <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-border pt-10">



</div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-border pt-10">
          {[
            { k: "6", v: "Shopify Concept Builds" },
            { k: "100%", v: "Responsive Design" },
            { k: "Performance", v: "Optimized Code" },
            { k: "Continuous", v: "Learning" },
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
  const brands = [
    "SHOPIFY",
    "Liquid",
    "HTML5",
    "CSS3",
    "JavaScript",
    "GitHub",
    "Responsive Design",
    "Theme Development",
  ];
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
      <SectionHeading
        eyebrow="What I do"
        title={
          <>
            Professional Shopify <span className="italic gold-text">Development Services.</span>
          </>
        }
      />

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
                style={{
                  background:
                    "radial-gradient(closest-side, oklch(0.82 0.14 78 / 0.25), transparent)",
                }}
              />
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-6 font-display text-2xl md:text-3xl">{s.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.lede}</p>
              <div className="mt-8 inline-flex items-center gap-1 text-sm text-primary">
                Explore service{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Featured Projects. <br className="hidden md:block" />
              <span className="italic gold-text">Concept & Personal Builds.</span>
            </>
          }
        />
        <Link to="/portfolio" className="btn-ghost">
          All projects <ArrowUpRight className="h-4 w-4" />
        </Link>
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
                Read Project Showcase{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
    {
      n: "01",
      t: "Clear Communication",
      d: "You'll work directly with me throughout the project, ensuring clear communication and consistent progress.",
    },
    {
      n: "02",
      t: "Clean Code",
      d: "I write clean, maintainable Shopify code that's easy to manage and scale.",
    },
    {
      n: "03",
      t: "Mobile-First Development",
      d: "Every store is built to perform smoothly across desktop, tablet, and mobile devices.",
    },
    {
      n: "04",
      t: "Shopify Best Practices",
      d: "Built using Shopify's recommended development standards for maintainability and performance.",
    },
  ];
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="container-x py-24 md:py-32">
        <SectionHeading
          eyebrow="Why work with me"
          title={
            <>
              I build modern Shopify stores tailored to your{" "}
              <span className="italic gold-text">business goals </span>.
            </>
          }
        />
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
      <SectionHeading
        eyebrow="How I work"
        title={
          <>
            A Simple Development Process <span className="italic gold-text"></span>.
          </>
        }
      />
      <div className="mt-16 grid gap-4 md:grid-cols-5">
        {PROCESS.map((p) => (
          <div
            key={p.step}
            className="rounded-2xl border border-border p-6 hover:border-primary/40 transition"
          >
            <p className="font-mono text-xs text-primary">{p.step}</p>
            <h3 className="mt-4 font-display text-2xl">{p.name}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Link to="/process" className="btn-ghost">
          See the full process <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section className="border-t border-border">
      <div className="container-x py-24 md:py-32">
        <SectionHeading
          eyebrow="Toolbox"
          title={
            <>
              The stack I <span className="italic gold-text">ship with</span>.
            </>
          }
        />
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
    "Responsive Store ",
    "Clean Shopify Code",
    "Fast Loading Pages",
    "User-Friendly Navigation",
    "Mobile Optimized",
    "Easy Store Management",
  ];
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid gap-16 md:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="What you get"
            title={
              <>
                Benefits of Working With <span className="italic gold-text">Me</span>.
              </>
            }
          />
          <p className="mt-6 text-muted-foreground max-w-md">
            My goal is to build fast, responsive, and user-friendly Shopify stores that provide a
            smooth shopping experience and are easy to manage.
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
function HomeFAQ() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title={
              <>
                Frequently Asked <br />
                <span className="italic gold-text">Questions</span>
              </>
            }
          />
          <Link to="/faq" className="btn-ghost mt-8">
            View All FAQs <ArrowRight className="h-4 w-4" />
          </Link>
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
      <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-foreground max-w-3xl  ">
        {title}
      </h2>
    </div>
  );
}
