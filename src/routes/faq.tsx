import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageIntro, CTASection } from "@/components/site/Layout";
import { FAQS } from "@/components/site/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Abdur Rehman" },
      {
        name: "description",
        content:
          "Answers to the most common questions about working with Abdur Rehman on Shopify development.",
      },
      { property: "og:title", content: "FAQ | Abdur Rehman" },
      {
        property: "og:description",
        content: "Everything you need to know before starting a Shopify project with Abdur Rehman.",
      },
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
        eyebrow="Frequently Asked Questions"

        title={
          <>
            Shopify <span className="italic gold-text">FAQs</span>
          </>
        }

        lede="Find answers to common questions about my Shopify services, project timelines, communication, and ongoing support."
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
