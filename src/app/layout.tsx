import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "@/i18n/LanguageContext";
import {
  robotsMetadata,
  siteDescription,
  siteKeywords,
  siteName,
  siteTitle,
  siteUrl,
  socialImageAlt,
  socialImageUrl
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  robots: robotsMetadata,
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName,
    locale: "en_US",
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: socialImageAlt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: socialImageUrl,
        alt: socialImageAlt
      }
    ]
  },
  alternates: {
    canonical: siteUrl
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
