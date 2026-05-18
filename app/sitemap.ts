import type { MetadataRoute } from "next";

import { apps, games } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/apps"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: absoluteUrl("/games"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/support"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/privacy-policy"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/privacy-policy-ineuj"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/privacy-policy-tictac"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/terms-and-conditions"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/terms-of-services-apple"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/terms-of-services-google"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  const appRoutes: MetadataRoute.Sitemap = apps.map((app) => ({
    url: absoluteUrl(`/apps/${app.slug}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const gameRoutes: MetadataRoute.Sitemap = games.map((game) => ({
    url: absoluteUrl(`/${game.slug}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...appRoutes, ...gameRoutes];
}