import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return { title: t("copyrightTitle"), description: t("copyrightOwners") };
}

export default async function CopyrightPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return (
    <LegalPage title={t("copyrightTitle")}>
      <p>{t("copyrightOwners")}</p>
      <p>{t("copyrightFan")}</p>
      <p>{t("copyrightContact")}</p>
    </LegalPage>
  );
}
