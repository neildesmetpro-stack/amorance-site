import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { locales } from "@/i18n/routes";
import { ogImageAlt } from "@/lib/site";

export const alt = ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Une image par langue, generee a la compilation. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Image de partage. Logotype seul sur aplat Bleu Amorance, conformement
 * a la charte : purement typographique, aucun symbole, aucune illustration.
 * Spectral est lue depuis le depot a la compilation, aucune requete reseau.
 */
export default async function Image() {
  const spectralMedium = await readFile(
    join(process.cwd(), "src", "fonts", "Spectral-Medium.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#16344A",
          padding: "0 110px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Spectral",
            fontWeight: 500,
            fontSize: 132,
            letterSpacing: "0.14em",
            color: "#F5F3EE",
            lineHeight: 1,
          }}
        >
          AMORANCE
        </div>
        <div
          style={{
            display: "flex",
            width: 99,
            height: 2,
            backgroundColor: "#F5F3EE",
            marginTop: 34,
          }}
        />
        <div
          style={{
            display: "flex",
            fontFamily: "Spectral",
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: "0.22em",
            color: "#F5F3EE",
            marginTop: 26,
          }}
        >
          Distribution France
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Spectral",
          data: spectralMedium,
          weight: 500,
          style: "normal",
        },
      ],
    },
  );
}
