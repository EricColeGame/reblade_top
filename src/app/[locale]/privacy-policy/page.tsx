import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return { title: t("privacyTitle"), description: t("privacyIntro") };
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return (
    <LegalPage title={t("privacyTitle")}>
      <p>{t("privacyIntro")}</p>
      <p>{t("privacyData")}</p>
      <p>{t("privacyLinks")}</p>
      <p>{t("privacyContact")}</p>
    </LegalPage>
  );
}
