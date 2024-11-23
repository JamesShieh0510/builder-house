import { useTranslation } from "next-i18next";

function AgendaDoc() {
  const { t } = useTranslation("agenda");

  const agendaData = {
    Day1: [
      {
        time: "09:00",
        topic: "Opening",
        subTitle: [
          "TBD",
        ],
      },
      {
        time: "11:15",
        topic: "VC",
        subTitle: ["TBD"],
      },
      {
        time: "14:15",
        topic: "L2 Interoperability",
        subTitle: ["TBD"],
      },
      {
        time: "15:00",
        topic: "Empowering Web3 Startups",
        subTitle: ["TBD"],
      },
      {
        time: "15:45",
        topic: "Account Abstraction",
        subTitle: ["TBD"],
      },
      {
        time: "16:15",
        topic: "Future of Defi on Ton",
        subTitle: ["TBD"],
      },
    ],
    Day2: [
      {
        time: "11:15",
        topic: "Bitcoin as Catalyst for Change:Exploring New Horizons",
        subTitle: ["TBD"],
      },
      {
        time: "14:00",
        topic: "SUI",
        subTitle: ["TBD"],
      },

    ],
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