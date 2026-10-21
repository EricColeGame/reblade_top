import type { LucideIcon } from "lucide-react";
import { BookOpen, CalendarDays, Cpu, MonitorPlay, Swords, Users } from "lucide-react";

type NavigationItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cpu, isContentType: true },
  { key: "weapons", path: "/weapons", icon: Swords, isContentType: true },
  { key: "demo", path: "/demo", icon: MonitorPlay, isContentType: true },
  { key: "release", path: "/release", icon: CalendarDays, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
