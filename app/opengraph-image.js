import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image details that LinkedIn, WhatsApp and others expect
export const alt = "Shadaab Hasan, Data Scientist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Load the site's font from the project, so the image matches the website
  const [extraBold, medium] = await Promise.all([
    readFile(join(process.cwd(), "app/fonts/PlusJakartaSans-ExtraBold.woff")),
    readFile(join(process.cwd(), "app/fonts/PlusJakartaSans-Medium.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 48px 40px",
          background: "#F1E6CC",
          color: "#1E1B15",
          fontFamily: "Jakarta",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: 40, fontWeight: 500, lineHeight: 1.25, letterSpacing: "-0.02em", maxWidth: 640 }}>
            I train models that find and follow objects in images, then I check that their results really hold up.
          </div>
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.04em" }}>SH</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 22, fontSize: 18, fontWeight: 800, color: "#1E1B15" }}>
            <span>DATA SCIENTIST</span>
            <span style={{ color: "#6E6553", fontWeight: 500 }}>+</span>
            <span>M.SC. DATA ANALYTICS</span>
            <span style={{ color: "#6E6553", fontWeight: 500 }}>+</span>
            <span>GALWAY, IRELAND</span>
          </div>
          <div style={{ fontSize: 158, fontWeight: 800, letterSpacing: "-0.055em", lineHeight: 1, marginTop: 8 }}>
            Shadaab Hasan
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Jakarta", data: extraBold, weight: 800, style: "normal" },
        { name: "Jakarta", data: medium, weight: 500, style: "normal" },
      ],
    }
  );
}