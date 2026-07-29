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
    slug: "modern-apparel",
    name: "Modern Apparel Store",
    tagline: "Premium Streetwear Demo Store",
    industry: "Fashion & Apparel",
    year: "2026",
    image: clothing,
    accent: "#d9b382",
    overview:
      "A modern Shopify concept store created to demonstrate responsive design, clean storefront architecture, and an engaging shopping experience.",
    challenge:
      "This concept  was created to practice responsive Shopify development, modern layouts, and user-focused e-commerce design.",
    solution:
      "Designed a clean and conversion-focused Shopify storefront using modern UI principles with responsive layouts and reusable sections.",
    features: [
      "Responsive Homepage",
      "Modern Product Pages",
      "Collection Layout",
      "Mobile Optimized",
      "Clean Navigation",
      "Reusable Shopify Sections",
    ],
    technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    results: [
      { label: "Project Type ", value: "Concept " },
      { label: "Design", value: "Responsive" },
      { label: "Platform", value: "Shopify" },
      { label: "Purpose", value: "Portfolio" },
    ],
    highlights: [
      "Personal portfolio project",
      "Focused on responsive design",
      "Built for learning and demonstration",
    ],
    skills: [
      "Shopify Development",
      "Responsive Design",
      "Theme Customization",
      "Frontend Development",
    ],
    stack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
  },
  {
    slug: "skin-brand",
    name: "Skin Brand Store",
    tagline: "Shopify Concept Store",
    industry: "Beauty & Skincare",
    year: "2026",
    image: beauty,
    accent: "#f0c8cf",

    overview:
      "A modern Shopify concept store created to showcase a clean and premium shopping experience for a skincare brand.",

    challenge:
      "The goal of this concept project was to practice designing an elegant Shopify storefront with a strong focus on user experience, mobile responsiveness, and product presentation.",

    solution:
      "Designed a clean Shopify storefront featuring organized collections, modern product pages, reusable sections, and an intuitive shopping experience.",

    features: [
      "Responsive homepage design",
      "Modern product page layout",
      "Collection page design",
      "Clean navigation",
      "Mobile-friendly interface",
      "Reusable Shopify sections",
    ],

    technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],

    results: [
      { label: "Project Type", value: "Concept" },
      { label: "Platform", value: "Shopify" },
      { label: "Design", value: "Responsive" },
      { label: "Purpose", value: "Portfolio" },
    ],

    highlights: [
      "Concept project",
      "Focused on modern UI design",
      "Built for portfolio demonstration",
    ],

    skills: [
      "Shopify Development",
      "Theme Customization",
      "Responsive Design",
      "Frontend Development",
    ],

    stack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
  },
  {
    slug: "coffee-roaster",
    name: "Coffee Roaster Store",
    tagline: "Shopify Concept Store",
    industry: "Food & Beverage",
    year: "2026",
    image: coffee,
    accent: "#c99871",

    overview:
      "A Shopify concept store designed for a specialty coffee brand with an emphasis on clean layouts and an engaging shopping experience.",

    challenge:
      "This project was created to improve my Shopify development skills by designing a modern e-commerce store with responsive layouts and well-structured product pages.",

    solution:
      "Developed a responsive Shopify concept featuring organized collections, attractive product displays, and a smooth browsing experience across desktop and mobile devices.",

    features: [
      "Responsive homepage",
      "Product collection pages",
      "Modern product layouts",
      "Simple navigation",
      "Mobile optimized design",
      "Reusable Shopify sections",
    ],

    technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],

    results: [
      { label: "Project Type", value: "Concept" },
      { label: "Platform", value: "Shopify" },
      { label: "Design", value: "Responsive" },
      { label: "Purpose", value: "Portfolio" },
    ],

    highlights: [
      "Personal concept project",
      "Clean e-commerce design",
      "Built for learning and demonstration",
    ],

    skills: [
      "Shopify Development",
      "Responsive Design",
      "Theme Customization",
      "Frontend Development",
    ],

    stack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
  },
  {
    slug: "luxury-watch",
    name: "Luxury Watch Store",
    tagline: "Luxury Shopify Concept",
    industry: "Luxury & Timepieces",
    year: "2026",
    image: watches,
    accent: "#c9a24a",
    overview:
      "A premium Shopify concept store designed for luxury watch brands with a clean layout, elegant product pages, and a high-end shopping experience.",

    challenge:
      "The goal was to create a modern luxury shopping experience that feels premium while remaining fast, responsive, and easy to navigate.",

    solution:
      "Built a custom Shopify concept featuring responsive layouts, optimized collections, refined product pages, and a smooth customer journey.",

    features: [
      "Responsive homepage",
      "Luxury product page",
      "Optimized collection pages",
      "Clean navigation",
      "Mobile optimized",
    ],

    technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],

    results: [
      { label: "Project Type", value: "Concept Project" },
      { label: "Platform", value: "Shopify" },
      { label: "Design", value: "Responsive" },
      { label: "Purpose", value: "Portfolio" },
    ],

    highlights: ["Luxury UI design", "Fast page structure", "Mobile-first experience"],

    skills: ["Shopify Development", "Responsive Design", "UI Development"],

    stack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
  },
  {
    slug: "sports-nutrition",
    name: "Sports Nutrition Store",
    tagline: "Fitness Shopify Concept",
    industry: "Health & Fitness",
    year: "2026",
    image: supplements,
    accent: "#c8ff5b",

    overview:
      "A Shopify concept store created for sports nutrition products with a focus on clean product presentation and an easy shopping experience.",

    challenge:
      "The objective was to design a modern fitness store that feels fast, organized, and simple for customers to browse supplements.",

    solution:
      "Developed a responsive Shopify concept with organized collections, modern product pages, and a mobile-friendly interface.",

    features: [
      "Modern homepage",
      "Responsive product pages",
      "Easy navigation",
      "Collection filtering",
      "Mobile optimization",
    ],

    technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],

    results: [
      { label: "Project Type", value: "Concept Project" },
      { label: "Platform", value: "Shopify" },
      { label: "Design", value: "Responsive" },
      { label: "Purpose", value: "Portfolio" },
    ],

    highlights: ["Clean fitness UI", "Fast loading pages", "Responsive layout"],

    skills: ["Shopify Development", "Theme Customization", "Responsive Design"],

    stack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
  },
  {
    slug: "modern-furniture",
    name: "Modern Furniture Store",
    tagline: "Furniture Shopify Concept",
    industry: "Furniture & Interior",
    year: "2026",
    image: furniture,
    accent: "#b7a58c",

    overview:
      "A modern Shopify furniture concept designed with a clean layout, premium visuals, and a simple shopping experience.",

    challenge:
      "The aim was to showcase furniture products with a premium look while keeping navigation intuitive and responsive across all devices.",

    solution:
      "Created a responsive Shopify concept featuring elegant collection pages, clean product layouts, and an improved browsing experience.",

    features: [
      "Responsive homepage",
      "Modern collection pages",
      "Responsive product pages",
      "Simple navigation",
      "Mobile optimized",
    ],

    technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],

    results: [
      { label: "Project Type", value: "Concept Project" },
      { label: "Platform", value: "Shopify" },
      { label: "Design", value: "Responsive" },
      { label: "Purpose", value: "Portfolio" },
    ],

    highlights: ["Minimal UI", "Responsive layout", "Modern shopping experience"],

    skills: ["Shopify Development", "Theme Development", "Responsive Design"],

    stack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
  },
];

export const SERVICES = [
  {
    slug: "shopify-development",
    icon: "Code2",
    name: "Shopify Store Development",
    lede: "Custom Shopify stores built with clean code, responsive layouts, and modern e-commerce best practices.",

    includes: [
      "Custom Shopify theme development",
      "Shopify theme customization",
      "Responsive store design",
      "Custom landing page development",
      "App integration",
    ],

    benefits: [
      "Clean and maintainable code",
      "Mobile-friendly experience",
      "Performance-focused pages",
      "Easy-to-manage Shopify sections",
    ],

    ideal: "Small businesses, startups, and brands looking for a professional Shopify store.",

    process: [
      "Requirement discussion",
      "Store planning",
      "Development & customization",
      "Testing across devices",
      "Final delivery",
    ],

    deliverables: [
      "Responsive Shopify store",
      "Custom theme sections",
      "Optimized pages",
      "Basic documentation",
    ],

    timeline: "Timeline discussed after requirements",

    faqs: [
      {
        q: "Can you customize an existing Shopify theme?",
        a: "Yes. I can customize Shopify themes based on your business requirements.",
      },
      {
        q: "Do you build responsive Shopify stores?",
        a: "Yes. Every store is designed to work smoothly across desktop, tablet, and mobile devices.",
      },
      {
        q: "Can you integrate Shopify apps?",
        a: "Yes. I can integrate commonly used Shopify apps where required.",
      },
    ],
  },
  {
    slug: "store-customization",
    icon: "TrendingUp",
    name: "Shopify Store Customization",

    lede: "Customize existing Shopify themes to better match your brand and improve the shopping experience.",

    includes: [
      "Homepage customization",
      "Product page improvements",
      "Collection page customization",
      "Navigation updates",
      "UI improvements",
    ],

    benefits: [
      "Professional appearance",
      "Improved usability",
      "Better mobile experience",
      "Brand-focused design",
    ],

    ideal: "Businesses looking to improve or personalize their Shopify store.",

    process: [
      "Understand requirements",
      "Plan customization",
      "Implement changes",
      "Testing",
      "Final delivery",
    ],

    deliverables: ["Customized Shopify theme", "Responsive layouts", "Optimized sections"],

    timeline: "Timeline discussed after requirements ",

    faqs: [
      {
        q: "Can you customize a premium Shopify theme?",
        a: "Yes, I can customize both free and premium Shopify themes.",
      },
      {
        q: "Will the store remain editable?",
        a: "Yes. Changes are made while keeping the store easy to manage.",
      },
    ],
  },
  {
    slug: "store-audit",
    icon: "Search",
    name: "Shopify Store Review",

    lede: "A detailed review of your Shopify store with practical suggestions to improve design, usability, and performance.",

    includes: [
      "Homepage review",
      "Product page review",
      "Navigation review",
      "Mobile responsiveness check",
      "Basic performance recommendations",
    ],

    benefits: [
      "Identify usability issues",
      "Improve customer experience",
      "Receive actionable recommendations",
    ],

    ideal: "Businesses looking to improve their existing Shopify store.",

    process: [
      "Review the store",
      "Identify improvement areas",
      "Prepare recommendations",
      "Deliver feedback",
    ],

    deliverables: ["Store review report", "Improvement suggestions", "Priority action list"],

    timeline: "Timeline discussed after requirements",

    faqs: [
      {
        q: "Will you redesign my store?",
        a: "This service focuses on reviewing your current store and providing improvement recommendations.",
      },
    ],
  },
  {
    slug: "custom-sections",
    icon: "Layers",

    name: "Custom Shopify Sections",

    lede: "Build reusable Shopify sections that match your brand and are easy to manage.",

    includes: [
      "Custom homepage sections",
      "Product page sections",
      "Collection page sections",
      "Responsive layouts",
      "Theme customization",
    ],

    benefits: ["Easy content editing", "Professional appearance", "Better user experience"],

    ideal: "Businesses wanting unique Shopify sections without rebuilding the whole store.",

    process: ["Requirement discussion", "Design planning", "Development", "Testing"],

    deliverables: ["Reusable Shopify sections", "Responsive design", "Clean Liquid code"],

    timeline: "Timeline discussed after requirements",

    faqs: [
      {
        q: "Can these sections be edited later?",
        a: "Yes. They are built using Shopify's Online Store 2.0 section system whenever possible.",
      },
    ],
  },
  {
    slug: "speed-optimization",
    icon: "Zap",

    name: "Store Performance Optimization",

    lede: "Improve the speed and responsiveness of your Shopify store for a better customer experience.",

    includes: [
      "Basic performance review",
      "Image optimization",
      "Theme cleanup",
      "Code improvements",
      "Responsive testing",
    ],

    benefits: ["Improved page performance", "Improved user experience", "Better store performance"],

    ideal: "Stores looking to improve loading speed and usability.",

    process: ["Store analysis", "Optimization", "Testing", "Final delivery"],

    deliverables: ["Optimized theme", "Performance improvements", "Testing report"],

    timeline: "Timeline discussed after requirements",

    faqs: [
      {
        q: "Can you guarantee a Lighthouse score?",
        a: "Scores depend on the existing theme and installed apps, but I focus on practical performance improvements.",
      },
    ],
  },
  {
    slug: "shopify-support",
    icon: "Sparkles",

    name: "Ongoing Shopify Support",

    lede: "Continuous support for Shopify store updates, improvements, and maintenance.",

    includes: [
      "Store updates",
      "Theme modifications",
      "Bug fixes",
      "Section additions",
      "General Shopify assistance",
    ],

    benefits: ["Reliable ongoing support", "Regular improvements", "Quick issue resolution"],

    ideal: "Businesses that need ongoing Shopify development assistance.",

    process: ["Requirement discussion", "Development", "Testing", "Delivery"],

    deliverables: ["Completed updates", "Bug fixes", "Implemented store improvements"],

    timeline: "Timeline discussed after requirements",

    faqs: [
      {
        q: "Do you offer monthly support?",
        a: "Yes. Ongoing support can be arranged based on your requirements.",
      },
    ],
  },
];

export const PROCESS = [
  {
    step: "01",
    name: "Discuss",
    desc: "Understand your business goals, design preferences, and Shopify requirements before starting development.",
    outputs: ["Project Requirements", "Development Plan", "Timeline"],
  },
  {
    step: "02",
    name: "Design",
    desc: "Plan clean, modern, and responsive layouts that match your brand identity.",
    outputs: ["Layout Plan", "UI Structure", "Responsive Design"],
  },
  {
    step: "03",
    name: "Develop",
    desc: "Build your Shopify store using clean Liquid, HTML, CSS, and JavaScript code.",
    outputs: ["Responsive Store", "Custom Sections", "Theme Development"],
  },
  {
    step: "04",
    name: "Test",
    desc: "Test the store across desktop, tablet, and mobile devices to ensure everything works properly.",
    outputs: ["Cross-device Testing", "Bug Fixes", "Performance Check"],
  },
  {
    step: "05",
    name: "Launch",
    desc: "Deliver the completed Shopify store and assist with deployment and final testing if required.",
    outputs: ["Final Store", "Deployment Support", "Documentation"],
  },
];

export const TECH = [
  "Shopify",
  "Online Store 2.0",
  "Shopify Theme Edito",
  "Liquid",
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Responsive Design",
  "Shopify CLI",
  "Figma",
  "VS Code",
];

export const FAQS = [
  {
    q: "Do you build custom Shopify stores?",
    a: "Yes. I build responsive Shopify stores with clean code and modern design principles.",
  },
  {
    q: "Can you customize an existing Shopify theme?",
    a: "Yes. I can customize Shopify themes based on your business requirements.",
  },
  {
    q: "Do you build responsive Shopify websites?",
    a: "Yes. Every Shopify store is designed to work smoothly across desktop, tablet, and mobile devices.",
  },
  {
    q: "Can you integrate Shopify apps?",
    a: "Yes. I can integrate commonly used Shopify apps into your store where required.",
  },
  {
    q: "Do you use Liquid for Shopify development?",
    a: "Yes. I use Shopify Liquid along with HTML, CSS, and JavaScript to build custom storefronts.",
  },
  {
    q: "Will my store be easy to manage?",
    a: "Yes. I develop stores using Shopify best practices so content can be updated easily through the Shopify admin.",
  },
  {
    q: "Can you improve an existing Shopify store?",
    a: "Yes. I can help improve layouts, responsiveness, navigation, and overall user experience.",
  },
  {
    q: "Do you provide support after delivery?",
    a: "Yes. I can provide support for updates, fixes, and future improvements based on your requirements.",
  },
];
