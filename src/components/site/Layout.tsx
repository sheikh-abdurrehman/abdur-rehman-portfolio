import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/process", label: "Process" },
  { to: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg leading-none">
            S
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg text-foreground">Studio Sera</span>
            <span className="eyebrow !text-[9px] !tracking-[0.28em]">Shopify Practice</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="text-sm transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-gold btn-gold-hover">
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-x flex flex-col gap-1 py-5">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground/90"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-gold btn-gold-hover mt-3 w-fit"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-x py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="eyebrow">Studio Sera</p>
            <h3 className="mt-4 font-display text-3xl md:text-4xl text-foreground max-w-md">
              A Shopify practice for brands that refuse to look like everyone else.
            </h3>
            <Link
              to="/contact"
              className="btn-gold btn-gold-hover mt-8"
            >
              Book an intro call <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <FooterCol title="Navigate" links={NAV} />
          <FooterCol
            title="Services"
            links={[
              { to: "/services", label: "Shopify Development" },
              { to: "/services", label: "Headless / Hydrogen" },
              { to: "/services", label: "CRO & Optimization" },
              { to: "/services", label: "Store Audit" },
              { to: "/services", label: "Growth Partner" },
            ]}
          />
          <div>
            <p className="eyebrow mb-5">Contact</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:hello@studiosera.co" className="text-foreground hover:text-primary">
                  hello@studiosera.co
                </a>
              </li>
              <li className="text-muted-foreground">Available worldwide, remote</li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_theme(colors.emerald.400)]" />
                Taking projects for Q3
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline my-12" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Studio Sera. Independent Shopify practice.</p>
          <p className="font-mono">Crafted in Liquid, Hydrogen & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <p className="eyebrow mb-5">{title}</p>
      <ul className="space-y-3 text-sm">
        {links.map((l, i) => (
          <li key={i}>
            <Link to={l.to} className="text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grain">
      <SiteHeader />
      <main className="pt-16 md:pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
}) {
  return (
    <section className="container-x pt-16 pb-12 md:pt-24 md:pb-16">
      <p className="eyebrow animate-rise">{eyebrow}</p>
      <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] tracking-tight animate-rise max-w-5xl">
        {title}
      </h1>
      {lede && (
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground animate-rise">
          {lede}
        </p>
      )}
    </section>
  );
}

export function CTASection() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="card-glass grain relative overflow-hidden rounded-3xl p-10 md:p-20 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(600px 300px at 50% 0%, oklch(0.82 0.14 78 / 0.18), transparent 70%)",
          }}
        />
        <p className="eyebrow relative">Let's build something worth talking about</p>
        <h2 className="relative mt-6 font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto">
          Your next Shopify build should <span className="gold-text">outperform</span> the last one.
        </h2>
        <p className="relative mt-6 text-muted-foreground max-w-xl mx-auto">
          Book a 30-minute intro call. No slides, no pitch deck — just a straight conversation
          about your store and where it's leaking revenue.
        </p>
        <div className="relative mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="btn-gold btn-gold-hover">
            Book intro call <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/portfolio" className="btn-ghost">
            See recent work
          </Link>
        </div>
      </div>
    </section>
  );
}
