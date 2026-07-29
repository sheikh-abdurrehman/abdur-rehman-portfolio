import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageIntro, CTASection } from "@/components/site/Layout";
import { SectionHeading } from "./index";
import { TECH } from "@/components/site/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Abdur Rehman" },
      {
        name: "description",
        content:
          "Learn more about Abdur Rehman, a Shopify developer focused on modern e-commerce stores, custom themes, and responsive Shopify development.",
      },
      { property: "og:title", content: "About | Abdur Rehman" },
      {
        property: "og:description",
        content:
          "Shopify developer specializing in modern e-commerce websites and custom Shopify solutions.",
      },
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
        eyebrow="About Me"
        title={
          <>
            Building modern <span className="italic gold-text">Shopify experiences.</span>.
          </>
        }
        lede="I’m Abdur Rehman, a Shopify Developer focused on building responsive, modern, and user-friendly e-commerce stores. I enjoy creating clean Shopify themes, custom storefronts, and improving online shopping experiences using Liquid, HTML, CSS, JavaScript, and Shopify best practices. Every good developer continues learning."
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-16 md:grid-cols-3">
          {[
            { k: "Shopify", v: "Focused Development" },
            { k: "100%", v: "Responsive Design" },
            { k: "Modern", v: "E-commerce Solutions" },
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
          <SectionHeading
            eyebrow="Experience"
            title={
              <>
                Building <span className="italic gold-text">Modern Shopify Stores</span>.
              </>
            }
          />
          <div className="space-y-8 text-lg leading-relaxed text-foreground/85">
            <p>
              I focus on creating clean, responsive, and high-performing Shopify stores that provide
              a great shopping experience across all devices.
            </p>
            <p>
              My primary expertise includes Shopify theme customization, Liquid development, HTML,
              CSS, JavaScript, and modern e-commerce design principles.
            </p>
            <p>
              I'm continuously improving my skills by building personal projects, studying Shopify
              best practices, and keeping up with the latest features in the Shopify ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="container-x py-24">
          <SectionHeading
            eyebrow="Capabilities"
            title={
              <>
                Where<span className="italic gold-text">I Can Help</span>.
              </>
            }
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Shopify Store Setup",
                d: "elping businesses set up clean, responsive Shopify stores ready for growth.",
              },
              {
                t: "Shopify Theme Customization",
                d: "Customizing Shopify themes to match your brand, improve usability, and enhance the shopping experience.",
              },
              {
                t: "Performance Optimization",
                d: "Improving store speed, responsiveness, and overall user experience.",
              },
              {
                t: "Responsive Design",
                d: "Creating mobile-friendly layouts that work smoothly across all devices.",
              },
              {
                t: "SEO & Store Improvements",
                d: "Improving store structure, usability, and basic on-page SEO.",
              },
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
        <SectionHeading
          eyebrow="Problem solving"
          title={
            <>
              How I <span className="italic gold-text">Work</span>.
            </>
          }
        />
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {[
            {
              t: "Understanding Client Requirements",
              d: "I begin every project by understanding the client's goals, business, and target audience.",
            },
            {
              t: "Clear Communication",
              d: "Keeping clients informed with clear communication throughout the project.",
            },
            {
              t: "Quality Development",
              d: "I focus on building fast, responsive, and user-friendly Shopify stores using clean and maintainable code.",
            },
            {
              t: "Writing clean and maintainable code that is easy to update in the future.",
              d: "Writing clean and maintainable code that is easy to update and manage in the future.",
            },
          ].map((p, i) => (
            <div key={i} className="border-t border-border pt-8">
              <h3 className="font-display text-3xl">{p.t}</h3>
              <p className="mt-4 text-muted-foreground max-w-lg leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <SectionHeading
          eyebrow="Stack"
          title={
            <>
              Tools of the <span className="italic gold-text">trade</span>.
            </>
          }
        />
        <div className="mt-12 flex flex-wrap gap-3">
          {TECH.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-5 py-2.5 text-sm hover:border-primary hover:text-primary transition"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
