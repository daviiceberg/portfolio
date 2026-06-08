import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sansFont = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://davirojtenberg.com"),
  title: {
    default: "Davi Rojtenberg | Senior Product Designer",
    template: "%s | Davi Rojtenberg",
  },
  description:
    "Senior Product Designer operating at the intersection of product strategy, UX, SaaS, design systems, and AI-assisted product development. 10+ years creating scalable digital experiences.",
  keywords: [
    "Senior Product Designer",
    "AI Product Designer",
    "Product Strategy",
    "SaaS Design",
    "UX Design",
    "Design Systems",
    "Functional Prototyping",
    "Claude Code",
    "AI-Assisted Design",
  ],
  authors: [{ name: "Davi Rojtenberg" }],
  creator: "Davi Rojtenberg",
  openGraph: {
    title: "Davi Rojtenberg | Senior Product Designer",
    description:
      "Designing scalable digital products through UX, business strategy, design systems, and AI-assisted workflows.",
    url: "https://davirojtenberg.com",
    siteName: "Davi Rojtenberg",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Davi Rojtenberg | Senior Product Designer",
    description:
      "Senior product designer turning complex business problems into scalable digital products — accelerated by AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${sansFont.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-canvas font-sans text-ink antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
