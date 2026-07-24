import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageIntro } from "@/components/site/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Clock, Mail, Globe, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Start a Shopify Project | Studio Sera" },
      { name: "description", content: "Book an intro call or send a project brief. Async, international, one senior partner." },
      { property: "og:title", content: "Contact — Studio Sera" },
      { property: "og:description", content: "Start a premium Shopify project with an independent senior developer." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Contact"
        title={<>Let's build something <span className="italic gold-text">worth talking about</span>.</>}
        lede="Tell me about your brand, your Shopify setup, and where you'd like to be twelve months from now. I read every message personally and reply within one business day."
      />

      <section className="container-x pb-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <aside className="space-y-8">
            <StatusCard />
            <InfoRow icon={<Clock className="h-4 w-4" />} label="Response time" value="Within 1 business day" />
            <InfoRow icon={<Mail className="h-4 w-4" />} label="Email" value="hello@studiosera.co" href="mailto:hello@studiosera.co" />
            <InfoRow icon={<Globe className="h-4 w-4" />} label="Working with" value="US · UK · EU · AU · MENA" />

            <div className="card-glass rounded-2xl p-6">
              <p className="eyebrow mb-3">Prefer a call?</p>
              <p className="text-sm text-muted-foreground">
                Skip the form and book a 30-minute intro call directly.
              </p>
              <a href="https://cal.com" target="_blank" rel="noreferrer" className="btn-gold btn-gold-hover mt-5">
                Book intro call <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </aside>

          <div className="card-glass rounded-3xl p-8 md:p-12">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-16">
                <CheckCircle2 className="h-14 w-14 text-primary" />
                <h3 className="mt-6 font-display text-3xl">Message received.</h3>
                <p className="mt-3 text-muted-foreground max-w-md">
                  Thanks — I'll be in touch within one business day with next steps.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <Field id="name" label="Your name" required />
                  <Field id="email" label="Email" type="email" required />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field id="company" label="Brand / company" />
                  <Field id="website" label="Store URL" placeholder="brand.com" />
                </div>

                <div>
                  <Label className="eyebrow mb-3 block">Project type</Label>
                  <div className="flex flex-wrap gap-2">
                    {["New Shopify build", "Replatform / migration", "Headless / Hydrogen", "CRO program", "Store audit", "Ongoing partner"].map((t) => (
                      <label key={t} className="cursor-pointer rounded-full border border-border px-4 py-2 text-sm text-foreground/85 hover:border-primary hover:text-primary transition [&:has(input:checked)]:border-primary [&:has(input:checked)]:bg-primary/10 [&:has(input:checked)]:text-primary">
                        <input type="checkbox" name="type" value={t} className="hidden" />
                        {t}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="eyebrow mb-3 block">Estimated budget</Label>
                  <div className="flex flex-wrap gap-2">
                    {["< $15k", "$15k – $40k", "$40k – $100k", "$100k+"].map((t) => (
                      <label key={t} className="cursor-pointer rounded-full border border-border px-4 py-2 text-sm text-foreground/85 hover:border-primary hover:text-primary transition [&:has(input:checked)]:border-primary [&:has(input:checked)]:bg-primary/10 [&:has(input:checked)]:text-primary">
                        <input type="radio" name="budget" value={t} className="hidden" />
                        {t}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="eyebrow mb-3 block">Tell me about your project</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="Current stack, goals, timelines, and anything else worth knowing."
                    className="bg-background border-border focus-visible:ring-primary"
                  />
                </div>

                <button type="submit" className="btn-gold btn-gold-hover w-full justify-center py-4">
                  Send message <ArrowUpRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Your details stay private and are never shared. I reply personally.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  id, label, type = "text", required, placeholder,
}: { id: string; label: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <Label htmlFor={id} className="eyebrow mb-3 block">{label}</Label>
      <Input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="bg-background border-border focus-visible:ring-primary h-12"
      />
    </div>
  );
}

function InfoRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const Wrap: any = href ? "a" : "div";
  return (
    <Wrap href={href} className="flex items-start gap-4 border-t border-border pt-6 group">
      <span className="mt-1 grid h-8 w-8 place-items-center rounded-full bg-primary/15 text-primary">{icon}</span>
      <div>
        <p className="eyebrow">{label}</p>
        <p className={`mt-1 text-lg ${href ? "group-hover:text-primary transition" : ""}`}>{value}</p>
      </div>
    </Wrap>
  );
}

function StatusCard() {
  return (
    <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-6">
      <div className="flex items-center gap-2">
        <span className="relative inline-flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
        <p className="font-mono text-xs uppercase tracking-widest text-emerald-300">Available</p>
      </div>
      <p className="mt-4 font-display text-2xl">Taking two projects for Q3.</p>
      <p className="mt-2 text-sm text-muted-foreground">
        Q4 is filling — waitlist opens next month.
      </p>
    </div>
  );
}
