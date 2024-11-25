import { useTranslation } from "next-i18next";

import Lin from "@/assets/Judges/Director_Lin.jpg";
import Hsieh from "@/assets/Judges/Director_Hsieh.jpg";
import Amy from "@/assets/Judges/Amy_Cetus.png";
import Antoine from "@/assets/Judges/Antoine.jpeg";
import Alan from "@/assets/Judges/Alan_Torch.jpg";
import Ben from "@/assets/Judges/Benjamin_Ong.jpeg";
import Carl from "@/assets/Judges/Carl_Navx.jpg";
import Chanel from "@/assets/Judges/Chanel_coredao.jpg";
import Cheryl from "@/assets/Judges/Cheryl_Law.jpg";
import David_Kim from "@/assets/Judges/David_Kim.jpeg";
import David from "@/assets/Judges/AIPost_davin.jpg";
import Ethan from "@/assets/Judges/Ethan.jpg";
import Godot from "@/assets/Judges/godot.jpg";
import Igeuwu from "@/assets/Judges/igeuwu.jpg";
import Jerry from "@/assets/Judges/jerry_gaia.jpg";
import Kay from "@/assets/Judges/kay.jpeg";
import Kevin from "@/assets/Judges/Kevin_Isle.jpeg";
import Kinjo from "@/assets/Judges/kinjo_akindo.jpg";
import Kyrie from "@/assets/Judges/kyrie.jpg";
import Maxim from "@/assets/Judges/Maxim_Shen.jpg";
import Nana104 from "@/assets/Judges/nana104.jpg";
import Newyellow from "@/assets/Judges/Newyellow_white.jpg";
import NUVA from "@/assets/Judges/NUVA.jpg";
import Oliver from "@/assets/Judges/Oliver_Aggregata.jpeg";
import Pro1 from "@/assets/Judges/pro1.png";
import Ryder from "@/assets/Judges/Ryder.jpeg";
import Scott from "@/assets/Judges/Scott.jpg";
import Selina from "@/assets/Judges/Selina.jpg";
import Ton_Yang from "@/assets/Judges/TON_YANG.jpg";



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
      name: "Benjamin Ong",
      company: "Radiance\nPartner",
      avatar: Ben.src,
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
      name: "Alan",
      company: "Torch\nFounder",
      avatar: Alan.src,
    },
    {
      name: "Brad Lin",
      company: "NUVA\nFounder",
      avatar: NUVA.src,
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
      company: "Trust Wallet \nTechnical Lead",
      avatar: David_Kim.src,
    },
    {
      name: "David",
      company: "AI Post\nCo-Founder",
      avatar: David.src,
    },
    {
      name: "Ethan",
      company: "AC Capital\nFounding Partner ",
      avatar: Ethan.src,
    },
    {
      name: "Godot",
      company: "Manta Network\nHead of Research",
      avatar: Ethan.src,
    },
    {
      name: "Jerry",
      company: "Gaia Information\nAccount Manager",
      avatar: Jerry.src,
    },
    {
      name: "Kay",
      company: "HSK\nCore Contributor ",
      avatar: Kay.src,
    },
    {
      name: "Kevin",
      company: "Isle\nFounder ",
      avatar: Kevin.src,
    },
    {
      name: "Kinjo",
      company: "AKINDO\nFounder ",
      avatar: Kinjo.src,
    },
    {
      name: "Kyrie",
      company: "Typus\nCGO ",
      avatar: Kyrie.src,
    },
    {
      name: "Maxim Shen",
      company: "Anti Capital\nCEO",
      avatar: Maxim.src,
    },
    {
      name: "Nana",
      company: "104\nBrading Designer",
      avatar: Nana104.src,
    },
    {
      name: "Newyellow",
      company: "Generative Artist",
      avatar: Newyellow.src,
    },
    {
      name: "Oliver",
      company: "Aggregata\nCo-Founder",
      avatar: Oliver.src,
    },
    {
      name: "Scott",
      company: "Cashcashbot\nFounder",
      avatar: Scott.src,
    },
    {
      name: "Selina",
      company: "GPTSavyy\nFounder",
      avatar: Selina.src,
    },
    {
      name: "Yang",
      company: "Ton\nSyndicate",
      avatar: Ton_Yang.src,
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
