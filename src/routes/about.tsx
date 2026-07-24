import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageIntro, CTASection } from "@/components/site/Layout";
import { SectionHeading } from "./index";
import { TECH } from "@/components/site/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Studio Sera" },
      { name: "description", content: "A senior Shopify developer & e-commerce specialist working with premium international DTC brands." },
      { property: "og:title", content: "About — Studio Sera" },
      { property: "og:description", content: "Ten years of Shopify craft. Serving premium DTC brands globally." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="About the studio"
        title={<>A senior Shopify practice <span className="italic gold-text">for brands that expect more</span>.</>}
        lede="Studio Sera is an independent Shopify Plus and e-commerce practice. One senior lead, a small trusted network, and a decade of shipping high-performance storefronts for premium brands worldwide."
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-16 md:grid-cols-3">
          {[
            { k: "10+", v: "Years shipping Shopify" },
            { k: "$180M+", v: "GMV run through my code" },
            { k: "17", v: "Countries served" },
          ].map((s, i) => (
            <div key={i} className="border-t border-border pt-6">
              <p className="font-display text-6xl gold-text">{s.k}</p>
              <p className="mt-3 text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-16 md:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="Experience" title={<>A decade of <span className="italic gold-text">Shopify craft</span>.</>} />
          <div className="space-y-8 text-lg leading-relaxed text-foreground/85">
            <p>
              Studio Sera has led Shopify builds and CRO programs for premium brands across
              fashion, beauty, food & beverage, luxury goods, sports nutrition, and design-led
              furniture. From boutique launches to Shopify Plus migrations doing eight figures in
              annual GMV.
            </p>
            <p>
              The practice was founded on a simple principle: a Shopify build is a business
              instrument, not a portfolio piece. Every architectural decision, every design
              choice, every line of Liquid or Hydrogen code should be defensible against a P&L.
            </p>
            <p>
              Today the studio partners with a maximum of four brands at a time. That constraint
              keeps senior attention on every project, protects the quality bar, and means clients
              get the person they hired — not an account manager.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="container-x py-24">
          <SectionHeading eyebrow="Capabilities" title={<>Where the studio <span className="italic gold-text">goes deep</span>.</>} />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Shopify Plus architecture", d: "Multi-market, multi-currency, B2B, headless — the full Plus surface, in production." },
              { t: "Hydrogen & Remix", d: "Ultra-fast headless storefronts on Oxygen, Vercel or Cloudflare." },
              { t: "Conversion rate optimization", d: "Research-driven programs. Winning tests shipped, not just designed." },
              { t: "Custom checkout & Functions", d: "Shopify Functions, Scripts, Checkout Extensibility for bespoke commerce logic." },
              { t: "Subscription & B2B", d: "Recharge, Skio, Shopify B2B — including wholesale portals and net terms." },
              { t: "Analytics & experimentation", d: "GA4, Triple Whale, Convert, VWO. Numbers you can trust and act on." },
            ].map((c, i) => (
              <div key={i} className="card-glass rounded-2xl p-8">
                <h3 className="font-display text-2xl">{c.t}</h3>
                <p className="mt-3 text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeading eyebrow="Problem solving" title={<>How the studio <span className="italic gold-text">thinks</span>.</>} />
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {[
            { t: "Understand the business first", d: "AOV, LTV, margin, channel mix. Every store recommendation is anchored to unit economics — not design trends." },
            { t: "Design for the buyer, not the founder", d: "Research the actual customer journey before touching Figma. The right question beats a great answer." },
            { t: "Ship, measure, iterate", d: "Launch is the start, not the finish. Continuous experimentation compounds every quarter." },
            { t: "Simplicity over cleverness", d: "The cleverest architecture is the one your team can maintain when I'm gone. I optimize for handover." },
          ].map((p, i) => (
            <div key={i} className="border-t border-border pt-8">
              <h3 className="font-display text-3xl">{p.t}</h3>
              <p className="mt-4 text-muted-foreground max-w-lg leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <SectionHeading eyebrow="Stack" title={<>Tools of the <span className="italic gold-text">trade</span>.</>} />
        <div className="mt-12 flex flex-wrap gap-3">
          {TECH.map((t) => (
            <span key={t} className="rounded-full border border-border px-5 py-2.5 text-sm hover:border-primary hover:text-primary transition">
              {t}
            </span>
          ))}
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
