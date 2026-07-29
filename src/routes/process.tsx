import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageIntro, CTASection } from "@/components/site/Layout";
import { PROCESS } from "@/components/site/data";
import { Check } from "lucide-react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "My Shopify Development Process | Abdur Rehman" },
      {
        name: "description",
        content:
          "Learn about my Shopify development process from planning and design to development, testing, and launch.",
      },
      { property: "og:title", content: "Shopify Development Process | Abdur Rehman" },
      {
        property: "og:description",
        content: "A clear and organized process for building modern Shopify stores.",
      },
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
        title={
          <>
            My Shopify <span className="italic gold-text">Development Process</span>.
          </>
        }

        lede="Every Shopify project follows a clear process from understanding your requirements to development, testing, and launch. My goal is to deliver a reliable, responsive, and user-friendly store."
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
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-lg">
                  {p.desc}
                </p>
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
          <p className="eyebrow">What you can expect</p>

          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05]">
            Clear Communication.
            <br />
            <span className="italic gold-text">Transparent Progress.</span>
            <br />
            Reliable Delivery.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                t: "Clear Communication",
                d: "Regular updates throughout the project so you always know the current progress.",
              },
              {
                t: "Quality Development",
                d: "Clean, maintainable Shopify code following Shopify best practices.",
              },
              {
                t: "Support After Delivery",
                d: "Assistance after project completion for minor fixes and guidance.",
              },
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
