import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-data";

export const runtime = "edge";
export const alt = "North Owl - Building Intelligent Systems for Modern Organizations.";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111111",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "Inter, Arial, sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px", color: "#A3A3A3" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              border: "1px solid rgba(96,165,250,0.55)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#60A5FA",
              fontSize: 28,
              fontWeight: 800
            }}
          >
            N
          </div>
          <span style={{ fontSize: 28 }}>{siteConfig.name}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ maxWidth: 920, margin: 0, fontSize: 78, lineHeight: 1.02, fontWeight: 720 }}>
            Building Intelligent Systems for Modern Organizations
          </h1>
          <p style={{ maxWidth: 780, marginTop: 28, color: "#A3A3A3", fontSize: 28, lineHeight: 1.35 }}>
            AI agents, enterprise software, healthcare intelligence, automation, and digital transformation.
          </p>
        </div>
        <div style={{ display: "flex", gap: "18px", color: "#60A5FA", fontSize: 24 }}>
          <span>{siteConfig.domain}</span>
          <span>Founder-led systems engineering</span>
        </div>
      </div>
    ),
    size
  );
}
