import eventPic from "@/assets/events1.svg";
import eventPic0 from "@/assets/Activity/LeadUptheNight_0802_1000X500.png";
import lead0816 from "@/assets/Activity/LeadUpTheNight_0816_1000X500.png";
import trader0719 from "@/assets/Activity/trader0719.png";
import After_party from "@/assets/Activity/After_party.png";
import NTUFC from "@/assets/Activity/NTUFC.png";
import BNBhackathon from "@/assets/Activity/BNBhackathon.jpg";
import suievent from "@/assets/Activity/SuiMover_event.png";
import solanaevent from "@/assets/Activity/solana.jpg";

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
      pic: solanaevent.src,
      date: `Nov.13, 2024 ~ Dec.12, 2024`,
      title: "Solana Hackathon @TBW2024",
      content: `Join us for the TBW 2024 Solana Hackathon, where we focus on the next steps after winning. This session will cover strategies for scaling your project, leveraging Solana’s ecosystem resources, and learning from past hackathon winners who have turned their success into long-term growth.`,
      link: "https://lu.ma/Solana-TBW2024",
    },
    {
      pic: BNBhackathon.src,
      date: `Q4 ,2024`,
      title: "BNB Online Hackthon",
      content: `#BNBHack 2024 Q4 kicks off with a total prize pool of over $458,000, making this one of the most rewarding hackathons yet!Ready to build the future of Web3? Let’s dive in 🧵👇`,
      link: "https://www.bnbchain.org/en/blog/bnb-hack-2024-q4-the-ultimate-battle-of-hacker-heroes",
    },
    {
      pic: suievent.src,
      date: `Nov.23, 2024 ~ Jan.11, 2025`,
      title: "Master Sui Move in 8 Lessons: A Quick Guide to Smart Contract Development",
      content: `This workshop offers an 8-lesson journey over two months, guiding developers through the basics to advanced topics for mastering the Sui Move programming language.。`,
      link: "https://lu.ma/eajq2r68",
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
