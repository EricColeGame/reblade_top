export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  communityUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
    instagram?: string;
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
  supportEmail: "support@reblade.top",
  gameUrl: "https://store.steampowered.com/app/3489340/ReBlade_The_Death_Spiral/",
  communityUrl: "https://steamcommunity.com/app/3489340/",
  heroVideoId: "-8S0xIgzHJg", // Official Steam Next Fest Demo Trailer
  social: {
    discord: "https://discord.gg/8V7aawbPur",
    youtube: "https://www.youtube.com/@ChillyRoom",
    twitter: "https://x.com/ReBladeG",
    tiktok: "https://www.tiktok.com/@rebladegame",
    instagram: "https://www.instagram.com/rebladegame/",
  },
  locales: ["en", "ja", "ko", "pt-BR"],
  defaultLocale: "en",
};
