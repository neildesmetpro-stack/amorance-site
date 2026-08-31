import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n";
import { isLocale, locales } from "@/i18n/routes";
import { archivo, spectral } from "@/lib/fonts";
import { siteUrl } from "@/lib/site";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Amorance", template: "%s | Amorance" },
  applicationName: "Amorance",
  formatDetection: { telephone: false, address: false, email: false },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${spectral.variable} ${archivo.variable}`}>
      <body>
        <a className="skip-link" href="#contenu">
          {dict.nav.skipToContent}
        </a>
        <Header locale={locale} dict={dict} />
        <main id="contenu">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
