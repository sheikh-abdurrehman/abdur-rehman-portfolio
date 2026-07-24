import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageIntro, CTASection } from "@/components/site/Layout";
import { SERVICES } from "@/components/site/data";
import { Sparkles, TrendingUp, Zap, Layers, Search, Code2, Check, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Shopify Development, CRO & Headless | Studio Sera" },
      { name: "description", content: "Custom Shopify development, headless Hydrogen builds, CRO programs, audits and fractional CTO partnerships for premium DTC brands." },
      { property: "og:title", content: "Services — Studio Sera" },
      { property: "og:description", content: "Bespoke Shopify, Hydrogen, CRO and audits — priced fixed-fee or retainer." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const ICONS: Record<string, any> = { Sparkles, TrendingUp, Zap, Layers, Search, Code2 };

function ServicesPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Services"
        title={<>Six ways I can <span className="italic gold-text">grow your store</span>.</>}
        lede="Every engagement is scoped around a measurable business outcome — revenue lift, faster launches, or a more confident tech stack. Pick one, or combine several."
      />

      <section className="container-x pb-8">
        <div className="flex flex-wrap gap-3">
          {SERVICES.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-border px-4 py-2 text-sm text-foreground/80 hover:border-primary hover:text-primary transition"
            >
              {s.name}
            </a>
          ))}
        </div>
      </section>

      <div className="container-x space-y-24 md:space-y-32 py-16 md:py-24">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon] ?? Sparkles;
          return (
            <section key={s.slug} id={s.slug} className="scroll-mt-24">
              <div className="grid gap-14 md:grid-cols-[1fr_1.4fr]">
                <div>
                  <p className="font-mono text-xs text-primary">0{i + 1} / 0{SERVICES.length}</p>
                  <div className="mt-6 grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
                    {s.name}
                  </h2>
                  <p className="mt-6 text-lg text-muted-foreground max-w-md">{s.lede}</p>

                  <div className="mt-8 flex items-center gap-3 text-sm text-foreground/80">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="font-mono uppercase tracking-widest text-xs text-muted-foreground">Timeline</span>
                    <span>{s.timeline}</span>
                  </div>
                </div>

                <div className="space-y-8">
                  <Block title="What's included" items={s.includes} />
                  <Block title="Business benefits" items={s.benefits} />

                  <div>
                    <p className="eyebrow mb-3">Ideal client</p>
                    <p className="text-lg text-foreground/85">{s.ideal}</p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="eyebrow mb-3">Process</p>
                      <ol className="space-y-2 text-sm text-foreground/85">
                        {s.process.map((p, j) => (
                          <li key={j} className="flex gap-3">
                            <span className="font-mono text-primary">{String(j + 1).padStart(2, "0")}</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <p className="eyebrow mb-3">Deliverables</p>
                      <ul className="space-y-2 text-sm text-foreground/85">
                        {s.deliverables.map((d, j) => (
                          <li key={j} className="flex gap-3">
                            <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <p className="eyebrow mb-3">FAQ</p>
                    <Accordion type="single" collapsible>
                      {s.faqs.map((f, j) => (
                        <AccordionItem key={j} value={`${s.slug}-${j}`}>
                          <AccordionTrigger className="text-left font-display text-lg hover:no-underline">
                            {f.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
              <div className="hairline mt-20" />
            </section>
          );
        })}
      </div>

      <CTASection />
    </SiteLayout>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="eyebrow mb-4">{title}</p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 rounded-xl border border-border p-4 text-sm text-foreground/90">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
