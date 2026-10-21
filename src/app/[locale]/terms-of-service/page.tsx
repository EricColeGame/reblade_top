import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return { title: t("termsTitle"), description: t("termsIntro") };
}

export default async function TermsOfServicePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return (
    <LegalPage title={t("termsTitle")}>
      <p>{t("termsIntro")}</p>
      <p>{t("termsChanges")}</p>
      <p>{t("termsUse")}</p>
    </LegalPage>
  );
}
