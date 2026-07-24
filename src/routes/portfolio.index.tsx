import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageIntro, CTASection } from "@/components/site/Layout";
import { PROJECTS } from "@/components/site/data";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Shopify Case Studies | Studio Sera" },
      { name: "description", content: "Selected Shopify projects across fashion, beauty, coffee, luxury watches, supplements and design-led furniture." },
      { property: "og:title", content: "Portfolio — Studio Sera" },
      { property: "og:description", content: "Recent premium Shopify builds with measurable business results." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Selected work"
        title={<>Stores that <span className="italic gold-text">move numbers</span>.</>}
        lede="A cross-section of recent Shopify builds. Every project links to a full case study with the challenge, the solution, and the actual business impact."
      />

      <section className="container-x pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Link
              key={p.slug}
              to="/portfolio/$slug"
              params={{ slug: p.slug }}
              className={`group relative overflow-hidden rounded-3xl border border-border hover:border-primary/50 transition-all duration-500 ${
                i % 3 === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                <img
                  src={p.image}
                  alt={p.name}
                  width={1600}
                  height={1100}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  <span>{p.industry}</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="mt-4 font-display text-3xl md:text-5xl">{p.name}</h3>
                <p className="mt-3 text-muted-foreground max-w-md">{p.tagline}</p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {p.results.slice(0, 3).map((r, j) => (
                    <div key={j}>
                      <p className="font-display text-xl md:text-3xl gold-text">{r.value}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{r.label}</p>
                    </div>
                  ))}
                </div>
                <span className="mt-8 inline-flex items-center gap-1 text-sm text-primary">
                  View case study <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
