import { useTranslation } from "next-i18next";

function AgendaDoc() {
  const { t } = useTranslation("agenda");

  const agendaData = {
    MainStage: {
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
          topic: "The Next Wave of Venture Capital in a Decentralized Economy",
          subTitle: ["Jaden, Investor, Flow Traders","Ben, Partner, Radiance Ventures","Lai, Partner, Horizon Capital"],
        },
        {
          time: "13:30",
          topic: "Opening",
          subTitle: ["葉澤山, Deputy Mayor, Tainan","林榮川, Director, Economic Development Bureau","謝仕淵, Director, Bureau of Culture"],
        },
        {
          time: "14:00",
          topic: "TBD",
          subTitle: ["Davin, Ai Post, Co-Founder (Host)","Brad Lin, NUVA, Founder","Eugenia, EU Free Life Academy, Founder","NANA, 104, Designer","Selina, GPTSavyy, Founder"],
        },
        //{
        //  time: "14:30",
        //  topic: "TBD",
        //  subTitle: ["Davin, AIPost, Co-Founder (Host)","Harrison, Owl Protocol, Head of BD","Ben, Lychee ACHO, Founder","Kevin, Mustaverse Digital, Founder"],
        //},
        {
          time: "14:45",
          topic: "Account Abstraction",
          subTitle: ["David Kim, Trust Wallet, Technical Lead"],
        },
        {
          time: "15:00",
          topic: "BSC Ecosystem",
          subTitle: ["Claire Dang, Hooked Protocol, Head of BD","Nell, Seraph, Brand Director"],
        },
        {
          time: "15:45",
          topic: "TBD",
          subTitle: ["Martinet Lee, Zircuit, Head of Developer Relations"],
        },
        {
          time: "16:00",
          topic: "Future of Defi on Ton",
          subTitle: ["Maxey, Torch, Founder","Yang, Ton, Syndicate"],
        },
      ],
      Day2: [
        {
          time: "10:00",
          topic: "Unlocking the Potential of Seamless Interaction Across L2 ",
          subTitle: ["TBD"],
        },
        {
          time: "11:15",
          topic: "Bitcoin as Catalyst for Change : Exploring New Horizons",
          subTitle: ["Jenks Guo, Babylon Labs, Head of Developer Relations","Chanel, CoreDAO, Core Contributor"],
        },
        {
          time: "14:00",
          topic: "TBD",
          subTitle: ["Ethan, AC Capital, Founding Partner (Host)","Amy, Cetus, Head of BD","Carl, NAVI, APAC Growth Lead","Kyrie, Typus, CGO"],
        },
        {
          time: "14:45",
          topic: "Empowing Web3 Startups",
          subTitle: ["Oliver, Aggregata, Co-Founder","Craig, Isle Finance, Co-Founder","Scott, CopeX, Co-Founder"],
        },
        {
          time: "15:30",
          topic: "Demo",
          subTitle: ["CopeX","Twin3.ai","Isle Finance","Aggregata"],
        },
  
      ],
    },
    
    RadianceStage: {
      Day1: [
        {
          time: "12:00",
          topic: "Radiance Session 1",
          subTitle: ["Speaker A", "Speaker B"],
        },
        {
          time: "13:00",
          topic: "Radiance Session 2",
          subTitle: ["Speaker C", "Speaker D"],
        },
        // Radiance Stage 的 Day1 数据
      ],
      Day2: [
        {
          time: "12:00",
          topic: "Radiance Session 3",
          subTitle: ["Speaker E", "Speaker F"],
        },
        // Radiance Stage 的 Day2 数据
      ],
    },
    RoundTable: {
      Day1: [
        {
          time: "14:00",
          topic: "Round Table Discussion 1",
          subTitle: ["Participant X", "Participant Y"],
        },
        // Round Table 的 Day1 数据
      ],
      Day2: [
        {
          time: "15:00",
          topic: "Round Table Discussion 2",
          subTitle: ["Participant Z", "Participant W"],
        },
        // Round Table 的 Day2 数据
      ],
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