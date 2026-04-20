import type { Metadata, Viewport } from "next";
import { personalInfo } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ignacio-portfolio.vercel.app"),
  title: {
    default: `${personalInfo.displayName} - Senior Product Manager`,
    template: `%s - ${personalInfo.displayName}`
  },
  description:
    "Premium product portfolio for a Senior Product Manager specialized in fintech, crypto, onboarding, KYC, authentication, digital identity, and product-led growth.",
  keywords: [
    "Senior Product Manager",
    "Fintech Product Manager",
    "Crypto Product Manager",
    "KYC",
    "Authentication",
    "Digital Identity",
    "Onboarding",
    "Product-Led Growth",
    "Buenos Aires"
  ],
  authors: [{ name: personalInfo.displayName }],
  creator: personalInfo.displayName,
  openGraph: {
    type: "website",
    url: "https://ignacio-portfolio.vercel.app",
    title: `${personalInfo.displayName} - Senior Product Manager`,
    description:
      "Trust-critical product strategy across fintech, crypto, onboarding, KYC, authentication, identity, and growth.",
    siteName: `${personalInfo.displayName} Portfolio`
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.displayName} - Senior Product Manager`,
    description:
      "Trust-critical product strategy across fintech, crypto, onboarding, KYC, authentication, identity, and growth."
  },
  alternates: {
    canonical: "/"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f5ef" },
    { media: "(prefers-color-scheme: dark)", color: "#12110f" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
