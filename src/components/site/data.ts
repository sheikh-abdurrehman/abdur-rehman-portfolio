import clothing from "@/assets/proj-clothing.jpg";
import beauty from "@/assets/proj-beauty.jpg";
import coffee from "@/assets/proj-coffee.jpg";
import watches from "@/assets/proj-watches.jpg";
import supplements from "@/assets/proj-supplements.jpg";
import furniture from "@/assets/proj-furniture.jpg";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  industry: string;
  year: string;
  image: string;
  accent: string;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  results: { label: string; value: string }[];
  highlights: string[];
  skills: string[];
  stack: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "maison-lumen",
    name: "Maison Lumen",
    tagline: "Premium clothing brand — Paris",
    industry: "Fashion & Apparel",
    year: "2025",
    image: clothing,
    accent: "#d9b382",
    overview:
      "A quiet-luxury womenswear label needed a headless Shopify storefront that felt like an editorial print magazine — but converted like a high-performance DTC brand.",
    challenge:
      "The existing theme collapsed on mobile, PDPs lacked size confidence, and cart abandonment sat at 78%. International shoppers hit currency and shipping friction at checkout.",
    solution:
      "Custom Shopify 2.0 theme with headless PLP, size-recommender, geo-aware currency & duty display, and a cinematic look-book PDP. Rebuilt checkout with Shop Pay, custom bundles, and a single-page cart drawer.",
    features: [
      "Editorial look-book product pages with scroll-linked storytelling",
      "AI-assisted size recommender trained on returns data",
      "Multi-currency & duty-inclusive pricing for 34 markets",
      "Custom cart drawer with gift-note, samples upsell",
      "Klaviyo abandoned browse & post-purchase flows",
    ],
    technologies: ["Shopify Plus", "Hydrogen", "Liquid", "Klaviyo", "Judge.me", "Loop Returns"],
    results: [
      { label: "Conversion rate", value: "+186%" },
      { label: "AOV", value: "+42%" },
      { label: "Mobile revenue", value: "3.1×" },
      { label: "Page speed", value: "94 / 100" },
    ],
    highlights: [
      "Featured in Shopify's 2025 Design Awards shortlist",
      "Reduced return rate by 31% through the size recommender",
      "Launched in 4 new markets in the first 90 days",
    ],
    skills: ["Headless architecture", "CRO", "Internationalization", "Design systems"],
    stack: ["Hydrogen", "Remix", "Tailwind", "GraphQL", "Sanity CMS", "Vercel"],
  },
  {
    slug: "aurelia-skin",
    name: "Aurelia Skin",
    tagline: "Clinical beauty & skincare — New York",
    industry: "Beauty & Cosmetics",
    year: "2025",
    image: beauty,
    accent: "#f0c8cf",
    overview:
      "A dermatologist-founded skincare brand launching a hero serum required a science-backed storefront with a subscription engine and quiz-driven personalization.",
    challenge:
      "Complex product benefits confused shoppers, subscription attach was under 8%, and the wholesale portal was manual and error-prone.",
    solution:
      "Built a modular Shopify Plus store with an ingredient explorer, skin-quiz funnel routed to bundles, Recharge subscription flows, and a B2B portal with tiered pricing.",
    features: [
      "Interactive ingredient explorer with clinical citations",
      "12-question skin quiz → personalized routine bundle",
      "Recharge subscription upgrade / swap / pause UX",
      "Shopify B2B wholesale portal with net-30 terms",
      "PDP with before/after slider and clinical study cards",
    ],
    technologies: ["Shopify Plus", "Recharge", "Yotpo", "Gorgias", "Nosto", "Shogun"],
    results: [
      { label: "Subscription attach", value: "37%" },
      { label: "Revenue lift", value: "+228%" },
      { label: "LTV", value: "+64%" },
      { label: "Support tickets", value: "-41%" },
    ],
    highlights: [
      "Sold out launch batch in 72 hours",
      "Quiz completion rate of 68% across 190k sessions",
      "Wholesale channel scaled to $1.4M in 6 months",
    ],
    skills: ["Subscription strategy", "Quiz funnels", "B2B commerce", "CRO"],
    stack: ["Shopify Plus", "Liquid", "React", "Recharge API", "Contentful"],
  },
  {
    slug: "north-roast",
    name: "North Roast Coffee",
    tagline: "Specialty coffee roaster — Melbourne",
    industry: "Food & Beverage",
    year: "2024",
    image: coffee,
    accent: "#c99871",
    overview:
      "A third-wave roaster wanted a storefront that felt like a printed zine, with a coffee subscription engine and wholesale ordering for 140 cafés.",
    challenge:
      "Legacy site was slow, subscription churn hit 22% monthly, and wholesale orders came in via email spreadsheets.",
    solution:
      "Editorial Shopify 2.0 theme with brew-guide content hub, Recharge-powered adjustable subscriptions, and a self-serve wholesale portal with SKU-level pricing.",
    features: [
      "Roast-freshness dashboard on every product page",
      "Adjustable grind size, cadence and blend swaps for subscribers",
      "Wholesale portal with quick-reorder and invoice history",
      "Content hub: brew guides, origin stories, roaster journal",
      "Loyalty program with referral & tasting-flight rewards",
    ],
    technologies: ["Shopify", "Recharge", "Smile.io", "Klaviyo", "Sanity"],
    results: [
      { label: "Subscription churn", value: "-58%" },
      { label: "Wholesale orders", value: "+3.4×" },
      { label: "Return customers", value: "62%" },
      { label: "LCP", value: "1.2s" },
    ],
    highlights: [
      "Wholesale ops team reduced by 3 FTE via self-serve",
      "Ranked #1 organic for 'melbourne subscription coffee'",
      "Featured in Sprudge and Broadsheet",
    ],
    skills: ["Subscriptions", "B2B portals", "Content architecture"],
    stack: ["Shopify 2.0", "Liquid", "Alpine.js", "Sanity", "Cloudflare"],
  },
  {
    slug: "vessel-horology",
    name: "Vessel Horology",
    tagline: "Independent luxury watchmaker — Geneva",
    industry: "Luxury & Timepieces",
    year: "2025",
    image: watches,
    accent: "#c9a24a",
    overview:
      "An independent watchmaker producing 400 pieces a year needed a made-to-order storefront that could handle waitlists, deposits, and white-glove concierge sales.",
    challenge:
      "High-value AOV ($8k–$40k) required trust-building. Buyers expected a private-client experience; the previous site felt like a template.",
    solution:
      "Bespoke Shopify Plus build with reservation flow, partial-deposit checkout via Shopify Scripts, and a private-client dashboard for order tracking and service history.",
    features: [
      "Reservation & waitlist system with deposit checkout",
      "Private-client dashboard: certificates, service, provenance",
      "Cinematic PDP with 360° watch spins and caliber detail",
      "Concierge booking (in-person & video try-on)",
      "Multi-currency, tax-inclusive display, DHL express",
    ],
    technologies: ["Shopify Plus", "Shopify Functions", "Klaviyo", "Passport"],
    results: [
      { label: "Waitlist signups", value: "2,400+" },
      { label: "Concierge bookings", value: "+312%" },
      { label: "AOV", value: "$14,200" },
      { label: "Sold-out drops", value: "6/6" },
    ],
    highlights: [
      "Sold out the entire 2025 caliber in 11 days",
      "Featured on Hodinkee and A Collected Man",
      "Concierge program now runs across 3 continents",
    ],
    skills: ["Luxury UX", "High-AOV CRO", "Shopify Functions"],
    stack: ["Shopify Plus", "Hydrogen", "Shopify Functions", "Klaviyo"],
  },
  {
    slug: "raw-forge",
    name: "Raw Forge Supplements",
    tagline: "Performance nutrition — Los Angeles",
    industry: "Health & Fitness",
    year: "2024",
    image: supplements,
    accent: "#c8ff5b",
    overview:
      "A challenger sports-nutrition brand needed a storefront that could stack-build, subscribe, and convert cold traffic from paid social at scale.",
    challenge:
      "Landing pages built in a page-builder were slow, LTV was under $80, and post-purchase upsells were non-existent.",
    solution:
      "Custom Shopify theme with a stack builder, dynamic paid-traffic landing pages, one-click post-purchase upsells, and Recharge subscription bundles.",
    features: [
      "'Stack builder' — configurable bundles with live pricing",
      "Landing-page framework tuned for paid social traffic",
      "One-click post-purchase upsells (Zipify)",
      "Reviews with verified-athlete social proof",
      "Loyalty tier system with training rewards",
    ],
    technologies: ["Shopify", "Recharge", "Zipify OCU", "Yotpo", "Triple Whale"],
    results: [
      { label: "ROAS", value: "4.8×" },
      { label: "LTV", value: "$182" },
      { label: "Post-purchase attach", value: "34%" },
      { label: "Repeat rate", value: "51%" },
    ],
    highlights: [
      "Scaled to $6M ARR in year one",
      "Reduced CAC by 44% through landing-page framework",
      "Featured in DTC Newsletter case study",
    ],
    skills: ["CRO", "Paid-traffic UX", "Subscriptions", "Analytics"],
    stack: ["Shopify", "Liquid", "React", "GA4", "Triple Whale"],
  },
  {
    slug: "atelier-nord",
    name: "Atelier Nord",
    tagline: "Design-led furniture house — Copenhagen",
    industry: "Furniture & Interior",
    year: "2025",
    image: furniture,
    accent: "#b7a58c",
    overview:
      "A design-led furniture atelier needed a high-consideration storefront with room-scale AR previews, made-to-order lead times, and a trade program.",
    challenge:
      "Complex product configurations (fabric, wood, size) confused shoppers, and 60% of revenue came through offline trade — with no digital equivalent.",
    solution:
      "Bespoke Shopify 2.0 storefront with a live product configurator, WebAR room preview, and a trade portal with volume pricing and swatch requests.",
    features: [
      "Real-time configurator: fabric, finish, dimension",
      "WebAR 'view in your room' for every piece",
      "Trade portal: net terms, swatch orders, spec sheets",
      "Made-to-order lead-time transparency",
      "Editorial project stories & interior stylist collaborations",
    ],
    technologies: ["Shopify Plus", "Shopify Functions", "Shopify AR", "Klaviyo"],
    results: [
      { label: "Online revenue", value: "+412%" },
      { label: "Trade signups", value: "1,180" },
      { label: "AOV", value: "€3,800" },
      { label: "Configurator uses", value: "78%" },
    ],
    highlights: [
      "Won 2025 Awwwards Site of the Day",
      "Opened US market with zero physical showrooms",
      "Trade channel now 45% of total revenue",
    ],
    skills: ["Configurators", "AR commerce", "B2B / trade"],
    stack: ["Shopify Plus", "Hydrogen", "Three.js", "GLTF", "Sanity"],
  },
];

export const SERVICES = [
  {
    slug: "shopify-development",
    icon: "Code2",
    name: "Custom Shopify Development",
    lede: "Bespoke Shopify Plus & 2.0 storefronts engineered for scale, speed, and conversion.",
    includes: [
      "Custom theme architecture (Shopify 2.0 & Plus)",
      "Headless Hydrogen / Remix builds",
      "Section & block library tailored to your brand",
      "App integrations & custom Shopify Functions",
      "Checkout extensibility & Shop Pay optimization",
    ],
    benefits: [
      "Sites that load under 1.5s on 4G mobile",
      "A theme your marketing team actually enjoys editing",
      "Zero page-builder bloat, no theme lock-in",
      "Foundation ready for 10× revenue growth",
    ],
    ideal: "DTC brands doing $500k–$50M+ ready to move off templated themes.",
    process: [
      "Discovery & technical audit",
      "Architecture & design system",
      "Iterative build in staged environments",
      "QA, speed & accessibility hardening",
      "Launch, monitoring, hand-over",
    ],
    deliverables: [
      "Production-ready theme or Hydrogen storefront",
      "Design system & component library",
      "Documentation & Loom walkthroughs",
      "Post-launch support window",
    ],
    timeline: "6 – 12 weeks",
    faqs: [
      { q: "Do you work with Shopify Plus only?", a: "No — I work across Shopify, Shopify 2.0, and Shopify Plus. I'll recommend the plan that fits your economics." },
      { q: "Can you migrate from BigCommerce, Magento or WooCommerce?", a: "Yes. I've led migrations preserving SEO equity, historical orders, subscribers, and 301 mapping." },
      { q: "Will I own the code?", a: "Absolutely. Every line of code and every design asset is yours." },
    ],
  },
  {
    slug: "cro-optimization",
    icon: "TrendingUp",
    name: "Conversion Rate Optimization",
    lede: "Research-driven CRO programs that lift revenue without spending more on ads.",
    includes: [
      "Full-funnel heuristic & analytics audit",
      "Roadmap of prioritized A/B tests",
      "PDP, PLP, cart & checkout optimization",
      "Copy, layout & visual hierarchy testing",
      "Ongoing experimentation program",
    ],
    benefits: [
      "Compounding revenue lift with no extra ad spend",
      "Data-backed decisions, not opinions",
      "Reduced CAC through higher conversion",
    ],
    ideal: "Brands with 30k+ monthly sessions ready to make testing a habit.",
    process: [
      "Audit, heatmaps, session replay",
      "Hypothesis backlog with ICE scoring",
      "Design & build tests in Convert / VWO",
      "Analyze, ship winners, iterate",
    ],
    deliverables: [
      "Audit deck & prioritized roadmap",
      "Monthly experiments with reporting",
      "Winning variants shipped to production",
    ],
    timeline: "Ongoing (min. 3 months)",
    faqs: [
      { q: "How fast will I see lift?", a: "Most brands see meaningful lift by month two. Cumulative lift 15–40% is typical over a 6-month program." },
      { q: "Do you handle the design & dev of tests?", a: "Yes — end-to-end. You approve, I ship." },
    ],
  },
  {
    slug: "store-audit",
    icon: "Search",
    name: "Store Audit & Strategy",
    lede: "A forensic look at your storefront — with a 90-day plan to fix it.",
    includes: [
      "UX, performance & SEO audit",
      "Analytics & funnel review",
      "Tech-stack rationalization",
      "Prioritized 90-day roadmap",
      "Loom walkthrough + written report",
    ],
    benefits: [
      "Clarity on what's leaking revenue",
      "A prioritized plan you can hand to any developer",
      "Second opinion before a redesign or replatform",
    ],
    ideal: "Founders considering a rebuild, replatform, or CRO investment.",
    process: [
      "Access & goal-setting call",
      "5-day deep audit",
      "Findings review",
      "Roadmap delivery",
    ],
    deliverables: [
      "60+ page audit deck",
      "1-hour Loom walkthrough",
      "Prioritized roadmap in Notion",
    ],
    timeline: "1 – 2 weeks",
    faqs: [
      { q: "Do I need to implement everything?", a: "No. The roadmap is prioritized so you can start with the 20% of work that drives 80% of results." },
    ],
  },
  {
    slug: "headless-hydrogen",
    icon: "Layers",
    name: "Headless & Hydrogen Builds",
    lede: "Ultra-fast, framework-driven storefronts on Hydrogen, Remix or Next.js.",
    includes: [
      "Hydrogen / Remix / Next.js storefronts",
      "Storefront API architecture",
      "Custom checkout extensibility",
      "CMS integration (Sanity, Contentful, Storyblok)",
      "Edge deployment (Vercel, Cloudflare, Oxygen)",
    ],
    benefits: [
      "Editorial creative freedom without Liquid constraints",
      "Sub-second interactions and Core Web Vitals wins",
      "Composable, future-proof commerce stack",
    ],
    ideal: "Brands with editorial ambition and a real content strategy.",
    process: [
      "Composable stack workshop",
      "Architecture & schema design",
      "Build in feature branches",
      "Load-test, launch, monitor",
    ],
    deliverables: [
      "Hydrogen / Remix / Next.js codebase",
      "CMS schema & editor training",
      "Edge deployment pipeline",
    ],
    timeline: "10 – 16 weeks",
    faqs: [
      { q: "Do I lose Shopify apps?", a: "Not the ones that matter. I map every dependency in the audit stage." },
    ],
  },
  {
    slug: "speed-optimization",
    icon: "Zap",
    name: "Speed & Core Web Vitals",
    lede: "Get your Shopify store to a 90+ Lighthouse score without ripping it apart.",
    includes: [
      "LCP, CLS, INP diagnosis",
      "App audit & script deferral",
      "Image, font & asset pipeline",
      "Theme code refactor",
      "Ongoing speed monitoring",
    ],
    benefits: [
      "Faster stores convert. Full stop.",
      "Better SEO rankings and ad quality scores",
      "Lower bounce rates on paid traffic",
    ],
    ideal: "Stores with Lighthouse mobile score under 60.",
    process: [
      "Baseline audit",
      "Refactor sprint",
      "Verify & monitor",
    ],
    deliverables: [
      "Before/after Lighthouse report",
      "Refactored theme",
      "Speed monitoring dashboard",
    ],
    timeline: "2 – 4 weeks",
    faqs: [
      { q: "What score can I realistically hit?", a: "Most stores land at 85–95 mobile after optimization. I share targets after the audit, not before." },
    ],
  },
  {
    slug: "growth-partner",
    icon: "Sparkles",
    name: "Fractional CTO / Growth Partner",
    lede: "Ongoing Shopify partnership — I ship, you grow, we compound.",
    includes: [
      "Weekly ship + strategy cadence",
      "Roadmap ownership",
      "Vendor & app management",
      "Analytics & experimentation",
      "Direct Slack access",
    ],
    benefits: [
      "A senior Shopify partner without the agency markup",
      "Continuity — no re-onboarding a new dev every quarter",
      "One person accountable for revenue outcomes",
    ],
    ideal: "Brands past $1M ARR without an in-house Shopify team.",
    process: [
      "Onboarding & goal-setting",
      "Quarterly roadmap",
      "Weekly ship cycles",
    ],
    deliverables: [
      "Continuous shipping",
      "Monthly performance reviews",
      "Quarterly strategy sessions",
    ],
    timeline: "Ongoing retainer",
    faqs: [
      { q: "How many brands do you partner with?", a: "Max four at any time — so each gets senior attention." },
    ],
  },
];

export const PROCESS = [
  {
    step: "01",
    name: "Discover",
    desc: "Deep-dive workshop to understand your brand, customer, unit economics, and constraints. Nothing generic — every recommendation is tied to your P&L.",
    outputs: ["Discovery brief", "Success metrics", "Technical audit"],
  },
  {
    step: "02",
    name: "Design",
    desc: "Custom design system built around your brand voice and conversion goals. High-fidelity prototypes reviewed live, not over email.",
    outputs: ["Design system", "Prototype", "Component library"],
  },
  {
    step: "03",
    name: "Develop",
    desc: "Clean, documented, performance-first code. Staged environments, weekly demos, and a Loom-first communication cadence.",
    outputs: ["Production theme", "QA report", "Documentation"],
  },
  {
    step: "04",
    name: "Deploy",
    desc: "Zero-drama launches. DNS, tracking, 301s, analytics parity — all handled with a written runbook.",
    outputs: ["Launch runbook", "Analytics QA", "Handover"],
  },
  {
    step: "05",
    name: "Optimize",
    desc: "The launch is the start. Ongoing CRO, experimentation, and quarterly strategic reviews keep the store compounding.",
    outputs: ["Monthly reporting", "Experiment log", "Quarterly review"],
  },
];

export const TECH = [
  "Shopify Plus", "Shopify 2.0", "Liquid", "Hydrogen", "Remix",
  "React", "TypeScript", "Tailwind CSS", "GraphQL", "Node.js",
  "Klaviyo", "Recharge", "Yotpo", "Gorgias", "Sanity",
  "Contentful", "Vercel", "Cloudflare", "GA4", "Triple Whale",
];

export const FAQS = [
  {
    q: "What size brands do you work with?",
    a: "Most clients sit between $500k and $50M in annual revenue — mature enough to invest in bespoke Shopify work, small enough to feel every improvement.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. Around 80% of my clients are outside my home timezone — the US, UK, EU, Australia, and the UAE. Async-first communication and weekly video calls.",
  },
  {
    q: "How do you price projects?",
    a: "Fixed-fee for defined scope, monthly retainer for ongoing partnerships. You'll always know what you're paying before I start.",
  },
  {
    q: "How long is a typical Shopify build?",
    a: "6–12 weeks for a custom theme, 10–16 weeks for a headless / Hydrogen build. I share a realistic timeline with the proposal — not before.",
  },
  {
    q: "Do you handle design as well as development?",
    a: "Yes. I lead design, development, and CRO end-to-end. When needed, I bring in a small trusted team for illustration, photography, or copy.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes a post-launch support window. Most clients continue on a retainer for ongoing CRO and iteration.",
  },
  {
    q: "Do you work with new brands or only established ones?",
    a: "Both — but new brands should have a validated product and a real go-to-market plan. I'll tell you honestly if the timing isn't right.",
  },
  {
    q: "Can you fix a store built by someone else?",
    a: "Regularly. Rescue projects and inherited-codebase clean-ups are a large part of my work.",
  },
];
