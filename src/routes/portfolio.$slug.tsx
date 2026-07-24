import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, CTASection } from "@/components/site/Layout";
import { PROJECTS } from "@/components/site/data";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Case study — Studio Sera" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.name} — Case Study | Studio Sera` },
        { name: "description", content: p.overview.slice(0, 155) },
        { property: "og:title", content: `${p.name} — Case Study` },
        { property: "og:description", content: p.tagline },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/portfolio/${p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/portfolio/${p.slug}` }],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const idx = PROJECTS.findIndex((x) => x.slug === p.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <SiteLayout>
      <section className="container-x pt-12 pb-8">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition">
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>
      </section>

      <section className="container-x pb-16">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <span>{p.industry}</span>
          <span>{p.year}</span>
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-8xl leading-[0.95] tracking-tight">{p.name}</h1>
        <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl">{p.tagline}</p>
      </section>

      <section className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-border">
          <img
            src={p.image}
            alt={p.name}
            width={1600}
            height={1100}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-4">
          {p.results.map((r, i) => (
            <div key={i} className="card-glass rounded-2xl p-8">
              <p className="font-display text-4xl md:text-5xl gold-text">{r.value}</p>
              <p className="mt-3 text-sm text-muted-foreground">{r.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="grid gap-16 md:grid-cols-[1fr_1.6fr]">
          <div className="space-y-10">
            <Meta title="Skills used" items={p.skills} />
            <Meta title="Tech stack" items={p.stack} />
            <Meta title="Technologies" items={p.technologies} />
          </div>
          <div className="space-y-12">
            <Block title="Overview" body={p.overview} />
            <Block title="Business challenge" body={p.challenge} />
            <Block title="Solution" body={p.solution} />

            <div>
              <p className="eyebrow mb-4">Features shipped</p>
              <ul className="space-y-3">
                {p.features.map((f, i) => (
                  <li key={i} className="flex gap-4 border-t border-border pt-3">
                    <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4">Project highlights</p>
              <ul className="space-y-3">
                {p.highlights.map((h, i) => (
                  <li key={i} className="text-lg font-display text-foreground/95 border-l-2 border-primary pl-4">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x pb-20">
        <p className="eyebrow mb-6">Gallery</p>
        <div className="grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="aspect-[3/4] overflow-hidden rounded-2xl border border-border"
              style={{
                background: `linear-gradient(${140 + i * 20}deg, ${p.accent}22, transparent 60%), var(--surface)`,
              }}
            >
              <img
                src={p.image}
                alt={`${p.name} detail ${i + 1}`}
                loading="lazy"
                className={`h-full w-full object-cover ${i === 1 ? "scale-125" : ""} ${i === 2 ? "scale-150" : ""}`}
                style={{ objectPosition: `${20 + i * 25}% ${30 + i * 20}%` }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <Link
          to="/portfolio/$slug"
          params={{ slug: next.slug }}
          className="group flex items-center justify-between rounded-3xl border border-border p-8 md:p-12 hover:border-primary/50 transition-all"
        >
          <div>
            <p className="eyebrow">Next project</p>
            <h3 className="mt-3 font-display text-3xl md:text-5xl">{next.name}</h3>
          </div>
          <ArrowRight className="h-8 w-8 text-primary transition-transform group-hover:translate-x-2" />
        </Link>
      </section>

      <CTASection />
    </SiteLayout>
  );
}

function Meta({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="eyebrow mb-3">{title}</p>
      <ul className="flex flex-wrap gap-2">
        {items.map((i) => (
          <li key={i} className="rounded-full border border-border px-3 py-1.5 text-xs text-foreground/85">{i}</li>
        ))}
      </ul>
    </div>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="eyebrow mb-4">{title}</p>
      <p className="text-lg md:text-xl leading-relaxed text-foreground/90">{body}</p>
    </div>
  );
}
