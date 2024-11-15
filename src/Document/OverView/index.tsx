import { useTranslation } from "next-i18next";

function OverViewDoc() {
  const { t } = useTranslation("overView");
  //只允許三個
  const OverViewContent = [
    {
      title: t("title1"),
      color: "red",
      content: t("content1"),
      data: {
        title: t("title1"),
        illustrate: t("subTitle1"),
        content: [
          {
            title: t("FT1"),
            detail: [t("F1-1"), t("F1-2"), t("F1-3")],
          },
          {
            title: t("FT2"),
            detail: [t("F2-1"), t("F2-2"), t("F2-3"), t("F2-4")],
          },
          {
            title: t("FT3"),
            detail: [t("F3-1"), t("F3-2"), t("F3-3"), t("F3-4")],
          },
          {
            title: t("FT4"),
            detail: [t("F4-1"), t("F4-2"), t("F4-3")],
          },
          {
            title: t("FT5"),
            detail: [t("F5-1"), t("F5-2")],
          },
        ],
        source: ``,
      },
    },
    {
      title: t("title2"),
      color: "red",
      content: t("content2"),
      data: {
        title: t("title2"),
        illustrate: t("subTitle2"),
        content: [
          {
            title: t("ST1"),
            detail: [t("S1-1"), t("S1-2")],
          },
          {
            title: t("ST2"),
            detail: [t("S2-1"), t("S2-2"), t("S2-3")],
          },
          {
            title: t("ST3"),
            detail: [t("S3-1"), t("S3-2")],
          },
          {
            title: t("ST4"),
            detail: [t("S4-1"), t("S4-2")],
          },
        ],
        source: ``,
      },
    },
    {
      title: t("title3"),
      color: "red",
      content: t("content3"),
      data: {
        title: t("title3"),
        illustrate: t("subTitle3"),
        content: [
          {
            title: t("TT1"),
            detail: [t("T1-1"), t("T1-2")],
          },
          {
            title: t("TT2"),
            detail: [t("T2-1"), t("T2-2"), t("T2-3")],
          },
          {
            title: t("TT3"),
            detail: [t("T3-1"), t("T3-2"), t("T3-3"), t("T3-4"), t("T3-5")],
          },
          {
            title: t("TT4"),
            detail: [t("T4-1"), t("T4-2"), t("T4-3")],
          },
        ],
        source: ``,
      },
    },
  ];
  const OverViewData = {
    title: { name: t("title"), color: "red" },
    subTitle: t("subTitle"),
    id: "OverView",
    data: OverViewContent,
  };
  return OverViewData;
}
export default OverViewDoc;
