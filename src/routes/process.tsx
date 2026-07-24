import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageIntro, CTASection } from "@/components/site/Layout";
import { PROCESS } from "@/components/site/data";
import { Check } from "lucide-react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — How I Ship Shopify Projects | Studio Sera" },
      { name: "description", content: "A five-step process for delivering Shopify builds: discover, design, develop, deploy, optimize. Refined over a decade." },
      { property: "og:title", content: "Process — Studio Sera" },
      { property: "og:description", content: "The five-step Shopify delivery process behind every Studio Sera engagement." },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Process"
        title={<>Predictable delivery. <span className="italic gold-text">Zero drama</span>.</>}
        lede="Every Studio Sera engagement follows the same five-step process — refined over a decade of Shopify builds. Transparent milestones, weekly demos, and a runbook for every launch."
      />

      <section className="container-x pb-24">
        <div className="space-y-6">
          {PROCESS.map((p, i) => (
            <div
              key={p.step}
              className="group relative grid gap-10 md:grid-cols-[auto_1fr_1fr] items-start rounded-3xl border border-border p-8 md:p-12 hover:border-primary/50 transition-all duration-500"
            >
              <div className="flex md:flex-col items-baseline gap-4">
                <p className="font-display text-6xl md:text-8xl gold-text">{p.step}</p>
              </div>
              <div>
                <h2 className="font-display text-3xl md:text-5xl">{p.name}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-lg">{p.desc}</p>
              </div>
              <div>
                <p className="eyebrow mb-4">Outputs</p>
                <ul className="space-y-2">
                  {p.outputs.map((o, j) => (
                    <li key={j} className="flex gap-3 text-foreground/90">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {i < PROCESS.length - 1 && (
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-8 w-px bg-gradient-to-b from-primary/60 to-transparent hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="card-glass rounded-3xl p-10 md:p-16">
          <p className="eyebrow">The commitment</p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05]">
            Weekly demos. <br />
            <span className="italic gold-text">Written status updates.</span>
            <br /> No surprises.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { t: "Weekly demos", d: "Live 30-min walkthrough of what shipped this week — recorded for your team." },
              { t: "Async by default", d: "Loom-first updates, Slack for quick threads, calls only when they earn the time." },
              { t: "Documented handover", d: "Every project ends with a Loom library, README, and Notion doc your team can use." },
            ].map((c, i) => (
              <div key={i}>
                <h3 className="font-display text-2xl">{c.t}</h3>
                <p className="mt-3 text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
