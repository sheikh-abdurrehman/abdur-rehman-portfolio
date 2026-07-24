import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { PROJECTS } from "@/components/site/data";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          { path: "/", priority: "1.0" },
          { path: "/about", priority: "0.8" },
          { path: "/services", priority: "0.9" },
          { path: "/portfolio", priority: "0.9" },
          { path: "/case-studies", priority: "0.8" },
          { path: "/process", priority: "0.7" },
          { path: "/faq", priority: "0.6" },
          { path: "/contact", priority: "0.9" },
          ...PROJECTS.map((p) => ({ path: `/portfolio/${p.slug}`, priority: "0.7" })),
        ];

        const urls = paths
          .map(
            (u) =>
              `  <url><loc>${BASE_URL}${u.path}</loc><changefreq>weekly</changefreq><priority>${u.priority}</priority></url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
