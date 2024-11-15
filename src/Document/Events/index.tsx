import eventPic from "@/assets/events1.svg";
import eventPic0 from "@/assets/Activity/LeadUptheNight_0802_1000X500.png";
import lead0816 from "@/assets/Activity/LeadUpTheNight_0816_1000X500.png";
import trader0719 from "@/assets/Activity/trader0719.png";
import After_party from "@/assets/Activity/After_party.png";
import NTUFC from "@/assets/Activity/NTUFC.png";
import { useTranslation } from "next-i18next";

//新增link即可點擊
//icon-website
//icon-twitter
//icon-discord
//icon-telegram

function EventsDoc() {
  const { t } = useTranslation("events");

  const EventsContent = [
    {
      pic: lead0816.src,
      date: `August 16,2023`,
      title: "LeadUp The Night: 開啟可能性",
      content: `Chainlink 預言機的潜力以及挑戰`,
      link: "https://lu.ma/LeadUpTheNight_13",
    },
    {
      pic: NTUFC.src,
      date: `August 1 ~ August 24,2023`,
      title: "NTUFC X Gen3 Solana 開發者訓練營",
      content: `以開發者為主體所設計的課程，從初階到進階地認識 Solana 生態系並利用專題的方式介紹所需的工具與套件！`,
      link: "https://www.accupass.com/event/2306050643383605147930",
    },
    {
      pic: After_party.src,
      date: `18:30 ~ 23:00, August 31,2023`,
      title: "TBH After Party",
      content: `Tabwain Builder House end with its amazing closing party held on 12/17 at Taipei Babylon.`,
      link: "https://lu.ma/TBH2023",
    },
    {
      pic: eventPic0.src,
      date: `August 12,2023`,
      title: "Build on Tezos",
      content: `資深公鏈看 Ai 的可能性`,
      link: "https://www.youtube.com/watch?v=YKv_R09_pgY",
    },
    {
      pic: trader0719.src,
      date: `JULY 19,2023`,
      title: "Trader House",
      content: `量化101，策略交易只有 CTA？`,
      link: "https://lu.ma/TraderHouse_1",
    },
  ];

  const EventsData = {
    title: { name: t("title"), color: "blue" },
    subTitle: t("subTitle"),
    id: "Events",
    data: EventsContent,
  };
  return EventsData;
}
export default EventsDoc;
