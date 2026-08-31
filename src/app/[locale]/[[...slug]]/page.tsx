import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";
import ActivityPage from "@/components/pages/ActivityPage";
import FaqPage from "@/components/pages/FaqPage";
import ContactPage from "@/components/pages/ContactPage";
import LegalPage from "@/components/pages/LegalPage";
import PrivacyPage from "@/components/pages/PrivacyPage";
import { getDictionary } from "@/i18n";
import {
  allRoutes,
  isLocale,
  pageIdFromSegments,
  pathFor,
  slugs,
  type Locale,
  type PageId,
} from "@/i18n/routes";
import { ogImageAlt, siteUrl } from "@/lib/site";

type RouteParams = { locale: string; slug?: string[] };
type Props = { params: Promise<RouteParams> };

/** Seules les quatorze URL declarees sont servies. */
export const dynamicParams = false;

export function generateStaticParams(): RouteParams[] {
  return allRoutes().map(({ locale, id }) => {
    const slug = slugs[id][locale];
    return { locale, slug: slug ? slug.split("/") : [] };
  });
}

function resolve(params: RouteParams): { locale: Locale; id: PageId } {
  if (!isLocale(params.locale)) notFound();
  const id = pageIdFromSegments(params.locale, params.slug);
  if (!id) notFound();
  return { locale: params.locale, id };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = resolve(await params);
  const page = getDictionary(locale).meta.pages[id];
  const url = `${siteUrl}${pathFor(id, locale)}`;

  return {
    title: id === "home" ? { absolute: page.title } : page.title,
    description: page.description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${siteUrl}${pathFor(id, "fr")}`,
        en: `${siteUrl}${pathFor(id, "en")}`,
        "x-default": `${siteUrl}${pathFor(id, "fr")}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Amorance",
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      title: page.title,
      description: page.description,
      url,
      // Declaration explicite : definir openGraph ici empeche Next
      // d'y rattacher seul l'image issue de opengraph-image.tsx.
      images: [
        {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale, id } = resolve(await params);
  const dict = getDictionary(locale);
  const props = { locale, dict };

  switch (id) {
    case "home":
      return <HomePage {...props} />;
    case "about":
      return <AboutPage {...props} />;
    case "activity":
      return <ActivityPage {...props} />;
    case "faq":
      return <FaqPage {...props} />;
    case "contact":
      return <ContactPage {...props} />;
    case "legal":
      return <LegalPage {...props} />;
    case "privacy":
      return <PrivacyPage {...props} />;
  }
}
