export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "ReBlade Wiki",
  shortName: "ReBlade",
  logoText: "R",
  tagline: "Builds, Weapons, Chips & Combat Guides",
  description: "Master ReBlade: The Death Spiral with weapon builds, chip and augment combinations, combat strategies, enemy guides, demo details, and the latest game news.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://reblade.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://reblade.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/3489340/ReBlade_The_Death_Spiral/",
  heroVideoId: "-8S0xIgzHJg", // Official Steam Next Fest Demo Trailer
  social: {
    youtube: "https://www.youtube.com/@ChillyRoom",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
