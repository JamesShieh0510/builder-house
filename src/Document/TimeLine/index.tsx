import { useTranslation } from "next-i18next";

function TimeLineDoc() {
  const { t } = useTranslation("timeLine");
  //只允許三個
  const timeLineArray = [
    {
      title: t("title1"),
      date: t("date1"),
      content: t("content1"),
    },
    {
      title: t("title2"),
      date: t("date2"),
      content: t("content2"),
    },
    {
      title: t("title3"),
      date: t("date3"),
      content: t("content3"),
    },
  ];
  const timeLineData = {
    data: timeLineArray,
  };
  return timeLineData;
}
export default TimeLineDoc;
