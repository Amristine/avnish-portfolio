import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FRAME — Cinematic Editing & Color",
  description: "Cinematic editing and color grading for brands, creators, and stories that deserve to be seen.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "FRAME — Cinematic Editing & Color",
    description: "Every frame. A feeling.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
