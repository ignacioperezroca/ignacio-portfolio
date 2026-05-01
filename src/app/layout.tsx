import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { MotionConfig } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ignacio-product.vercel.app"),
  title: {
    default: `${personalInfo.displayName} | Senior Product Manager`,
    template: `%s | ${personalInfo.displayName}`
  },
  description:
    "Senior Product Manager specialized in fintech, crypto, digital identity, KYC, onboarding, authentication and product-led growth across LatAm.",
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
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg"
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://ignacio-product.vercel.app",
    title: `${personalInfo.displayName} | Senior Product Manager`,
    description:
      "Senior Product Manager specialized in fintech, crypto, digital identity, KYC, onboarding, authentication and product-led growth across LatAm.",
    siteName: personalInfo.displayName,
    images: [
      {
        url: "/social-preview-v3.png",
        width: 1200,
        height: 630,
        alt: `${personalInfo.displayName} | Senior Product Manager`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.displayName} | Senior Product Manager`,
    description:
      "Senior Product Manager specialized in fintech, crypto, digital identity, KYC, onboarding, authentication and product-led growth across LatAm.",
    images: ["/social-preview-v3.png"]
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
      <body>
        <MotionConfig reducedMotion="user">
          <LanguageProvider>{children}</LanguageProvider>
        </MotionConfig>
        <Analytics />
      </body>
    </html>
  );
}
