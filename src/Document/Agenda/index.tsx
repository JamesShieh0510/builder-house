import { useTranslation } from "next-i18next";

function AgendaDoc() {
  const { t } = useTranslation("agenda");

  const agendaData = {
    MainStage: {
      Day1: [
        {
          time: "09:30",
          topic: "Opening",
          subTitle: [
            "TBD",
          ],
        },
        {
          time: "09:45",
          topic: "TBD",
          subTitle: ["Edward Liao, INNOLUX, Associate VP and General Manager of IASBC"],
        },
        {
          time: "11:00",
          topic: "Is AI Killing Critical Thinking?",
          subTitle: ["Brad Lin, NUVA, Founder"],
        },
        {
          time: "11:15",
          topic: "The Next Wave of Venture Capital in a Decentralized Economy",
          subTitle: ["Jaden, Investor, Flow Traders","Ben, Partner, Radiance Ventures","Lai, Partner, Horizon Capital","Josh, Bing Ventures, APAC Investment Department Director"],
        },
        {
          time: "13:30",
          topic: "Opening",
          subTitle: ["葉澤山, Deputy Mayor, Tainan","林榮川, Director, Economic Development Bureau","謝仕淵, Director, Bureau of Culture"],
        },
        {
          time: "13:45",
          topic: "AI-Powered Digital Transformation: Exploring Innovation and Real-World Applications",
          subTitle: ["林榮川, Director, Economic Development Bureau (Host)","謝仕淵, Director, Bureau of Culture","戴偉峻, Director, Artificial Intelligence Innovation Institute"],
        },
        {
          time: "14:15",
          topic: "Shaping Tomorrow: AI Innovations Redefining Industry Standards",
          subTitle: ["Davin, Ai Post, Co-Founder (Host)","Brad Lin, NUVA, Founder","Eugenia, EU Free Life Academy, Founder","NANA, 104, Designer","Selina, GPTSavyy, Founder"],
        },
        {
          time: "15:00",
          topic: "Account Abstraction",
          subTitle: ["David Kim, Trust Wallet, Technical Lead"],
        },
        {
          time: "15:15",
          topic: "BSC Ecosystem",
          subTitle: ["Claire Dang, Hooked Protocol, Head of BD","Artemis, THENA, Growth Lead","Nell, Seraph, Brand Director"],
        },
        {
          time: "15:45",
          topic: "Web3 Security",
          subTitle: ["Chang-Wu Chen, imToken, Chief Scientist"],
        },

      ],
      Day2: [
        {
          time: "10:00",
          topic: "Unlocking the Potential of Seamless Interaction Across L2 ",
          subTitle: ["TBD"],
        },
        {
          time: "11:00",
          topic: "TBD",
          subTitle: ["Martinet Lee, Zircuit, Head of Developer Relations"],
        },
        {
          time: "11:15",
          topic: "Bitcoin as Catalyst for Change : Exploring New Horizons",
          subTitle: ["Lulu, BeWater, Partner","Sunny Teng, Merlin Chain, BD Head","Jenks Guo, Babylon Labs, Head of Developer Relations","Chanel, CoreDAO, Core Contributor"],
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
          time: "11:45",
          topic: "Building Your Personal AI Brain - Unveiling the Magic of Notebooklm",
          subTitle: ["Selina, GPTSavyy, Founder"],
        },
        {
          time: "15:00",
          topic: "How AI is Reshaping Self-Media in the Digital Freedom Era",
          subTitle: ["Eugenia叡一, EU Free Life Academy, Founder"],
        },
        {
          time: "15:15",
          topic: "Using AI to Grow a 50K-Follower Instagram in Six Months",
          subTitle: ["NANA, 104, Product Designer"],
        },
        {
          time: "15:30",
          topic: "Future of Defi on Ton",
          subTitle: ["Maxey, Torch, Founder","Yang, Ton, Syndicate"],
        },
        // Radiance Stage 的 Day1 数据
      ],
      Day2: [
        {
          time: "11:15",
          topic: "Wallet Abstraction, Chain Abstraction, Onchain Consumer",
          subTitle: ["Davin, AIPost, Co-Founder (Host)","Harrison, Owl Protocol, Head of BD","Ben, Lychee ACHO, Founder","Kevin, Mustaverse Digital, Founder"],
        },
        {
          time: "14:00",
          topic: "Rules for Trading in a Bull Market: The Link Between Capital Rotation and the Attention Economy",
          subTitle: ["DA Capital"],
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