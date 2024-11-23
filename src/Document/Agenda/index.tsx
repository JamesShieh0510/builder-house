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
        topic: "The next wave of venture capital in a decentralized economy",
        subTitle: ["Jaden, Investor, Flow Traders","Ben, Partner, Radiance Ventures","Lai, Partner, Horizon Capital"],
      },
      {
        time: "13:30",
        topic: "Opening",
        subTitle: ["黃偉哲, Mayor, Tainan","林榮川, Director, Economic Development Bureau","謝仕淵, Director, Bureau of Culture"],
      },
      {
        time: "13:45",
        topic: "Unlocking the potential of seamless interaction across L2 ",
        subTitle: ["TBD"],
      },
      {
        time: "14:30",
        topic: "TBD",
        subTitle: ["Davin, AIPost, Co-Founder (Host)","Harrison, Owl Protocol, Head of BD","Ben, Lychee ACHO, Founder","Kevin, Mustaverse Digital, Founder"],
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
        subTitle: ["Jenks Guo, Babylon Labs, Head of Developer Relations","Chanel, CoreDAO, Core Contributor"],
      },
      {
        time: "14:00",
        topic: "TBD",
        subTitle: ["Ethan, AC Capital, Founding Partner (Host)","Amy, Cetus, Head of BD","Carl, NAVI, APAC Growth Lead","Kyrie, Typus, CGO"],
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