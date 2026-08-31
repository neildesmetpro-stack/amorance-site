import type { MetadataRoute } from "next";
import { allRoutes, pathFor } from "@/i18n/routes";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes().map(({ locale, id }) => ({
    url: `${siteUrl}${pathFor(id, locale)}`,
    changeFrequency: "monthly",
    priority: id === "home" ? 1 : 0.7,
    alternates: {
      languages: {
        fr: `${siteUrl}${pathFor(id, "fr")}`,
        en: `${siteUrl}${pathFor(id, "en")}`,
      },
    },
  }));
}
