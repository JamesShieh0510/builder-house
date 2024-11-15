import { useTranslation } from "next-i18next";

function ActivityDoc() {
  const { t } = useTranslation("activity");
  const ActivityContent = [
    {
      title: t("subTitle"),
      color: "red",
      content: `- ${t("odC1")}\n- ${t("odC2")}\n- ${t("odC3")}\n- ${t(
        "odC4"
      )}\n- ${t("odC5")}`,
      date: t("odD"),
      detail: ``,
    },
    {
      title: "LeadUp The Night",
      color: "red",
      content: `- ${t("LU1")}\n- ${t("LU2")}\n- ${t("LU3")}\n- ${t("LU4")}`,
      date: t("LUD"),
      detail: ``,
      link: "https://linktr.ee/builder_dao",
    },
    {
      title: "BootCamp",
      color: "red",
      content: `- ${t("BC1")}\n- ${t("BC2")}\n- ${t("BC3")}\n- ${t("BC4")}`,
      date: t("BCD"),
      detail: ``,
    },
  ];
  const ActivityData = {
    title: { name: t("title"), color: "red" },
    subTitle: t("subTitle"),
    id: "Activity",
    data: ActivityContent,
  };
  return ActivityData;
}
export default ActivityDoc;
