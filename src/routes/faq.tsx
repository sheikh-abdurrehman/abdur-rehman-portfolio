import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageIntro, CTASection } from "@/components/site/Layout";
import { FAQS } from "@/components/site/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Studio Sera Shopify Practice" },
      { name: "description", content: "Answers to the most common questions about working with Studio Sera on Shopify Plus, headless, CRO and audit engagements." },
      { property: "og:title", content: "FAQ — Studio Sera" },
      { property: "og:description", content: "Everything you need to know before starting a Shopify project with Studio Sera." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Frequently asked"
        title={<>Straight answers <span className="italic gold-text">up-front</span>.</>}
        lede="If your question isn't answered here, the fastest way to get one is a 30-minute intro call."
      />

      <section className="container-x pb-24">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`q-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-2xl md:text-3xl hover:no-underline py-6">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-8 max-w-3xl">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
