import { useTranslation } from "next-i18next";

import Lin from "@/assets/Judges/Director_Lin.jpg";
import Hsieh from "@/assets/Judges/Director_Hsieh.jpg";
import Amy from "@/assets/Judges/Amy_Cetus.png";
import Antoine from "@/assets/Judges/Antoine.jpeg";
import Carl from "@/assets/Judges/Carl_Navx.jpg";
import Chanel from "@/assets/Judges/Chanel_coredao.jpg";
import Cheryl from "@/assets/Judges/Cheryl_Law.jpg";
import David_Kim from "@/assets/Judges/David_Kim.jpeg";
import David from "@/assets/Judges/AIPost_davin.jpg";



//icon-website
//icon-twitter
//icon-discord
//icon-telegram

function JudgesDoc() {
  const { t } = useTranslation("judges");

  const JudgesArray = [
    {
      name: "林榮川",
      company: "Director\nEconomic Development Bureau",
      avatar: Lin.src,
    },
    {
      name: "謝仕淵",
      company: "Director\nBureau of Culture",
      avatar: Hsieh.src,
    },
    {
      name: "Amy",
      company: "Cetus\nBD Lead",
      avatar: Amy.src,
    },
    {
      name: "Antoine",
      company: "ICP\nCo-Founder of ICP-Taiwan",
      avatar: Antoine.src,
    },
    {
      name: "Carl",
      company: "NAVI\nAPAC Growth Lead",
      avatar: Carl.src,
    },
    {
      name: "Chanel",
      company: "CoreDAO\nCore Contributor ",
      avatar: Chanel.src,
    },
    {
      name: "Cheryl Law",
      company: "Pudgy Penguins \nHead of Asia ",
      avatar: Cheryl.src,
    },
    {
      name: "David Kim",
      company: "Trust Wallet \n Technical Lead",
      avatar: David_Kim.src,
    },
    {
      name: "David",
      company: "AI Post\n Co-Founder",
      avatar: David.src,
    },
  ];
  const JudgesData = {
    title: { name: t("title"), color: "red" },
    subTitle: t("subTitle"),
    id: "Judges",
    data: JudgesArray,
  };
  return JudgesData;
}
export default JudgesDoc;
