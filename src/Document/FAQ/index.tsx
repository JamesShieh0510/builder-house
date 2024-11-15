import { useTranslation } from "next-i18next";

function FAQDoc() {
  const { t } = useTranslation("FAQ");

  const generalArr = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
    { q: t("q5"), a: t("a5") },
    { q: t("q6"), a: t("a6") },
    { q: t("q7"), a: t("a7") },
    { q: t("q8"), a: t("a8") },
    { q: t("q9"), a: t("a9") },
    { q: t("q10"), a: t("a10") },
    { q: t("q11"), a: t("a11") },
  ];
  const eventArr = [
    { q: t("q12"), a: t("a12") },
    { q: t("q13"), a: t("a13") },
    { q: t("q14"), a: t("a14") },
    { q: t("q15"), a: t("a15") },
    { q: t("q16"), a: t("a16") },
    { q: t("q17"), a: t("a17") },
    { q: t("q18"), a: t("a18") },
    { q: t("q19"), a: t("a19") },
    { q: t("q20"), a: t("a20") },
  ];
  const FAQData = {
    general: generalArr,
    event: eventArr,
  };
  return FAQData;
}
export default FAQDoc;
