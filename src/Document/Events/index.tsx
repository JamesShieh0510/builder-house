import eventPic from "@/assets/events1.svg";
import eventPic0 from "@/assets/Activity/LeadUptheNight_0802_1000X500.png";
import lead0816 from "@/assets/Activity/LeadUpTheNight_0816_1000X500.png";
import trader0719 from "@/assets/Activity/trader0719.png";
import After_party from "@/assets/Activity/After_party.png";
import NTUFC from "@/assets/Activity/NTUFC.png";
import BNBhackathon from "@/assets/Activity/BNBhackathon.jpg"
import suievent from "@/assets/Activity/suievent.png"

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
      pic: BNBhackathon.src,
      date: `Q4 ,2024`,
      title: "BNB Online Hackthon",
      content: `#BNBHack 2024 Q4 kicks off with a total prize pool of over $458,000, making this one of the most rewarding hackathons yet!Ready to build the future of Web3? Let’s dive in 🧵👇`,
      link: "https://www.bnbchain.org/en/blog/bnb-hack-2024-q4-the-ultimate-battle-of-hacker-heroes",
    },
    {
      pic: suievent.src,
      date: `Q4 ,2024`,
      title: "BNB Online Hackthon",
      content: `#BNBHack 2024 Q4 kicks off with a total prize pool of over $458,000, making this one of the most rewarding hackathons yet!Ready to build the future of Web3? Let’s dive in 🧵👇`,
      link: "https://www.bnbchain.org/en/blog/bnb-hack-2024-q4-the-ultimate-battle-of-hacker-heroes",
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
