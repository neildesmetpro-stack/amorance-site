import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

/**
 * Favicon. Initiale du logotype en Spectral 500, Papier sur Bleu Amorance.
 * Purement typographique, comme le logotype.
 */
export default async function Icon() {
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#16344A",
          color: "#F5F3EE",
          fontFamily: "Spectral",
          fontWeight: 500,
          fontSize: 34,
          lineHeight: 1,
        }}
      >
        A
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Spectral", data: spectralMedium, weight: 500, style: "normal" },
      ],
    },
  );
}
