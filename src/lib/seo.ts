import { personalInfo } from "@/data/portfolio";

export const siteUrl = "https://ignacio-product.vercel.app";
export const siteName = personalInfo.displayName;
export const siteTitle = `${siteName} | Senior Product Manager`;
export const siteDescription =
  "Senior Product Manager specialized in identity, onboarding, KYC, authentication, fintech, crypto, UX, content design, and frontend-aware product leadership.";
export const siteKeywords = [
  "Ignacio Perez Roca",
  "Senior Product Manager",
  "Identity",
  "Onboarding",
  "KYC",
  "Authentication",
  "Fintech",
  "Crypto",
  "UX",
  "Content Design",
  "Product-Led Growth",
  "Buenos Aires"
];

export const socialImagePath = "/social-preview-v3.png";
export const socialImageUrl = `${siteUrl}${socialImagePath}`;
export const socialImageAlt = `${siteName} | Senior Product Manager`;

export const robotsMetadata = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    maxImagePreview: "large",
    maxSnippet: -1,
    maxVideoPreview: -1
  }
} as const;

