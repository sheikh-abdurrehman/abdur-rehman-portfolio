import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageIntro, CTASection } from "@/components/site/Layout";
import { PROJECTS } from "@/components/site/data";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Shopify Growth Stories | Studio Sera" },
      { name: "description", content: "Detailed Shopify case studies with challenges, solutions, and measurable revenue outcomes across premium DTC brands." },
      { property: "og:title", content: "Case Studies — Studio Sera" },
      { property: "og:description", content: "Real Shopify projects, real numbers, real business outcomes." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudies,
});

function CaseStudies() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Case studies"
        title={<>Real projects. <span className="italic gold-text">Real numbers</span>.</>}
        lede="Six recent Shopify engagements — the business context, what shipped, and what happened next. Each links to the full breakdown."
      />

      <div className="container-x pb-24 space-y-20">
        {PROJECTS.map((p, i) => (
          <article key={p.slug} className="grid gap-10 md:grid-cols-[1fr_1.3fr] items-start">
            <div className="md:sticky md:top-28">
              <p className="font-mono text-xs text-primary">Case study 0{i + 1}</p>
              <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.02]">{p.name}</h2>
              <p className="mt-4 text-muted-foreground">{p.tagline}</p>
              <div className="mt-8 aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="space-y-8">
              <Block title="Challenge" body={p.challenge} />
              <Block title="Solution" body={p.solution} />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {p.results.map((r, j) => (
                  <div key={j} className="rounded-xl border border-border p-4">
                    <p className="font-display text-2xl md:text-3xl gold-text">{r.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{r.label}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="eyebrow mb-3">Highlights</p>
                <ul className="space-y-2">
                  {p.highlights.map((h, j) => (
                    <li key={j} className="text-foreground/90 border-l-2 border-primary pl-4">{h}</li>
                  ))}
                </ul>
              </div>

              <Link
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="btn-ghost mt-4"
              >
                Read full case study <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <CTASection />
    </SiteLayout>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="eyebrow mb-3">{title}</p>
      <p className="text-lg leading-relaxed text-foreground/90">{body}</p>
    </div>
  );
}
