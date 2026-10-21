import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return { title: t("aboutTitle"), description: t("aboutIntro") };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return (
    <LegalPage title={t("aboutTitle")}>
      <p>{t("aboutIntro")}</p>
      <p>{t("aboutGame")}</p>
      <p>{t("aboutContact")}</p>
    </LegalPage>
  );
}
