import { useTranslation } from "next-i18next";

function AgendaDoc() {
  const { t } = useTranslation("agenda");

  const normalizeSubTitle = (subTitle: any) => {
    return Array.isArray(subTitle) ? subTitle : [subTitle];
  };

  const mainStageDay1 = Array.from({ length: 14 }, (_, i) => {
    const index = i + 1;
    return {
      time: t(`MainStage.Day1.item${index}.time`),
      topic: t(`MainStage.Day1.item${index}.topic`),
      subTitle: normalizeSubTitle(
        t(`MainStage.Day1.item${index}.subTitle`, { returnObjects: true })
      ),
    };
  });

  const mainStageDay2 = Array.from({ length: 7 }, (_, i) => {
    const index = i + 1;
    return {
      time: t(`MainStage.Day2.item${index}.time`),
      topic: t(`MainStage.Day2.item${index}.topic`),
      subTitle: normalizeSubTitle(
        t(`MainStage.Day2.item${index}.subTitle`, { returnObjects: true })
      ),
    };
  });

  const radianceStageDay1 = Array.from({ length: 8 }, (_, i) => {
    const index = i + 1;
    return {
      time: t(`RadianceStage.Day1.item${index}.time`),
      topic: t(`RadianceStage.Day1.item${index}.topic`),
      subTitle: normalizeSubTitle(
        t(`RadianceStage.Day1.item${index}.subTitle`, { returnObjects: true })
      ),
    };
  });

  const radianceStageDay2 = Array.from({ length: 6 }, (_, i) => {
    const index = i + 1;
    return {
      time: t(`RadianceStage.Day2.item${index}.time`),
      topic: t(`RadianceStage.Day2.item${index}.topic`),
      subTitle: normalizeSubTitle(
        t(`RadianceStage.Day2.item${index}.subTitle`, { returnObjects: true })
      ),
    };
  });

  const roundTableDay1 = [
    {
      time: t("RoundTable.Day1.item1.time"),
      topic: t("RoundTable.Day1.item1.topic"),
      subTitle: normalizeSubTitle(
        t("RoundTable.Day1.item1.subTitle", { returnObjects: true })
      ),
    },
  ];

  const roundTableDay2 = [
    {
      time: t("RoundTable.Day2.item1.time"),
      topic: t("RoundTable.Day2.item1.topic"),
      subTitle: normalizeSubTitle(
        t("RoundTable.Day2.item1.subTitle", { returnObjects: true })
      ),
    },
  ];

  const agendaData = {
    MainStage: {
      Day1: mainStageDay1,
      Day2: mainStageDay2,
    },
    RadianceStage: {
      Day1: radianceStageDay1,
      Day2: radianceStageDay2,
    },
    RoundTable: {
      Day1: roundTableDay1,
      Day2: roundTableDay2,
    },
  };

  const AgendaData = {
    title: { name: t("title"), color: "blue" },
    subTitle: t("subTitle"),
    id: "Agenda",
    data: agendaData,
  };

  return AgendaData;
}

export default AgendaDoc;