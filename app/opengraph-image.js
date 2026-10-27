import { ImageResponse } from "next/og";

// Image details that LinkedIn, WhatsApp and others expect
export const alt = "Shadaab Hasan, Data Scientist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #064e3b 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 80 }}>Shadaab Hasan</div>
        <div style={{ fontSize: 44, marginTop: 16, color: "#6ee7b7" }}>Data Scientist</div>
        <div style={{ fontSize: 30, marginTop: 40, color: "#cbd5e1" }}>
          Machine learning · Computer vision · NLP
        </div>
        <div style={{ fontSize: 26, marginTop: 60, color: "#94a3b8" }}>
          M.Sc. Data Analytics, University of Galway · shadaabhasan.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}