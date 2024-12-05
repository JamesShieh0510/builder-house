import { useTranslation } from "next-i18next";

import Yeh from "@/assets/Judges/Yeh.jpg";
import Lin from "@/assets/Judges/Director_Lin.jpg";
import Hsieh from "@/assets/Judges/Director_Hsieh.jpg";
import Zhuo from "@/assets/Judges/Director_ Zhuo.png";
import Amy from "@/assets/Judges/Amy_Cetus.png";
import Antoine from "@/assets/Judges/Antoine.jpeg";
import Artemis from "@/assets/Judges/Artemis.jpg";
import Asher from "@/assets/Judges/Asher_L.jpg";
import Maxey from "@/assets/Judges/Maxey.jpg";
import Ben from "@/assets/Judges/Benjamin_Ong.jpeg";
import Ben_Ho from "@/assets/Judges/Ben_Ho_Lychee.jpg";
import Carl from "@/assets/Judges/Carl_Navx.jpg";
import Chairman_Huang from "@/assets/Judges/Chairman_Huang.png";
import Chanel from "@/assets/Judges/Chanel_coredao.jpg";
import Cheryl from "@/assets/Judges/Cheryl_Law.jpg";
import Claire_Dang from "@/assets/Judges/Claire_Dang.jpg";
import David_Kim from "@/assets/Judges/David_Kim.jpeg";
import Davin from "@/assets/Judges/AIPost_davin.jpg";
import dawin from "@/assets/Judges/dawin.jpg";
import Directir_Tai from "@/assets/Judges/Directir_Tai.png";
import Director_Chung from "@/assets/Judges/Director_Chung.png";
import Ethan from "@/assets/Judges/Ethan.jpg";
import Edward from "@/assets/Judges/Edward_JH_Liao.jpg";
import Godot from "@/assets/Judges/godot.jpg";
import Harrison from "@/assets/Judges/Harrison_Goldsmith.jpg";
import Igeuwu from "@/assets/Judges/igeuwu.jpg";
import Jaden from "@/assets/Judges/Jaden.jpg";
import Jason_Cheng from "@/assets/Judges/Jason_Cheng.jpeg";
import Josh from "@/assets/Judges/Josh_Lu.jpg";
import Jenks_Guo from "@/assets/Judges/Jenks_Guo_speaker_photo_1.jpg";
import Jerry from "@/assets/Judges/jerry_gaia.jpg";
import Kay from "@/assets/Judges/kay.jpeg";
import Kevin from "@/assets/Judges/Kevin_Isle.jpeg";
import Kelvin_Yan from "@/assets/Judges/Kelvin_Yan.jpg";
import Kevin_Chang from "@/assets/Judges/Kevin_Chang_Mustaverse.jpg";
import Kinjo from "@/assets/Judges/kinjo_akindo.jpg";
import Kyrie from "@/assets/Judges/kyrie.jpg";
import lulu from "@/assets/Judges/luluisangry.jpg";
import Maxim from "@/assets/Judges/Maxim_Shen.jpg";
import Martinet from "@/assets/Judges/Martinet_Lee.jpg";
import Ming_Wen from "@/assets/Judges/Ming_Wen.jpeg";
import Nana104 from "@/assets/Judges/nana104.jpg";
import NUVA from "@/assets/Judges/NUVA.jpg";
import nell from "@/assets/Judges/nell.jpg";
import Oliver from "@/assets/Judges/Oliver_Aggregata.jpeg";
import pancake from "@/assets/Judges/pancake_che.jpg";
import Pro1 from "@/assets/Judges/pro1.png";
import Peter_Yang from "@/assets/Judges/Peter_Yang.jpg";
import Ryder from "@/assets/Judges/Ryder.jpeg";
import Scott from "@/assets/Judges/Scott.jpg";
import Selina from "@/assets/Judges/Selina.jpg";
import Sean_Tao from "@/assets/Judges/Sean_Tao.jpg";
import Singa from "@/assets/Judges/SINGA_GAO.jpg";
import Sunny_Wu from "@/assets/Judges/Sunny_Wu.jpg";
import TAKO from "@/assets/Judges/TAKO.png";
import Ton_Yang from "@/assets/Judges/TON_YANG.jpg";
import WOODY from "@/assets/Judges/WOODY.png";
import Weike_Li from "@/assets/Judges/Weike_Li.jpg";


//icon-website
//icon-twitter
//icon-discord
//icon-telegram

function JudgesDoc() {
  const { t } = useTranslation("judges");

  const JudgesArray = [
    {
      name: "葉澤山",
      company: "Deputy mayor\nTainan",
      avatar: Yeh.src,
    },
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
      name: "黃仲銘",
      company: "Chairman\nInstitute for Information Industry (III)",
      avatar: Chairman_Huang.src,
    },
    {
      name: "Edward Liao",
      company: "INNOLUX\nAssociate VP and General Manager of Intelligent Automatic Solutions Business Center",
      avatar: Edward.src,
    },
    {
      name: "戴偉峻",
      company: "Director\nArtificial Intelligence Innovation Institute",
      avatar: Directir_Tai.src,
    },
    {
      name: "鍾松剛",
      company: "Deputy Director\nCybersecurity Technology Institute",
      avatar: Director_Chung.src,
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
      name: "Artemis",
      company: "THENA\nGrowth Lead ",
      avatar: Artemis.src,
    },
    {
      name: "Asher L",
      company: "BitDoctor\nCo-Founder",
      avatar: Asher.src,
    },
    {
      name: "Antoine",
      company: "ICP\nCo-Founder of ICP-Taiwan",
      avatar: Antoine.src,
    },
    {
      name: "Ben Ho",
      company: "Lychee & NoPFP Lab\nFounder",
      avatar: Ben_Ho.src,
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
      name: "Claire Dang",
      company: "Hooked Protocol \nBD Head",
      avatar: Claire_Dang.src,
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
      name: "Davin",
      company: "AI Post\nCo-Founder",
      avatar: Davin.src,
    },
    {
      name: "Dawin",
      company: "DawinCorp\nFounder",
      avatar: dawin.src,
    },
    {
      name: "Ethan",
      company: "AC Capital\nFounding Partner ",
      avatar: Ethan.src,
    },
    {
      name: "Eugenia",
      company: "EU Free Life Academy\nFounder",
      avatar: Igeuwu.src,
    },
    {
      name: "Godot",
      company: "Manta Network\nHead of Research",
      avatar: Godot.src,
    },
    {
      name: "Harrison",
      company: "VeraBridge, Owl Protocol\nBD Lead",
      avatar: Harrison.src,
    },
    {
      name: "Josh Lu",
      company: "Bing Ventures\nAPAC Investment Department Director",
      avatar: Josh.src,
    },
    {
      name: "Jaden",
      company: "Flow Traders\nInvestor",
      avatar: Jaden.src,
    },
    {
      name: "Jason Cheng",
      company: "Domin Network\nCEO",
      avatar: Jason_Cheng.src,
    },
    {
      name: "Jenks Guo",
      company: "Babylon Labs\nHead of DevRel",
      avatar: Jenks_Guo.src,
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
      name: "Kelvin Yan",
      company: "BuzzUp\nGeneral Manager",
      avatar: Kelvin_Yan.src,
    },
    {
      name: "Kevin Lin",
      company: "Isle\nFounder ",
      avatar: Kevin.src,
    },
    {
      name: "Kevin Chang",
      company: "Mustaverse\nFounder ",
      avatar: Kevin_Chang.src,
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
      name: "Lulu",
      company: "BeWater\nPartner",
      avatar: lulu.src,
    },
    {
      name: "Maxim Shen",
      company: "Anti Capital\nCEO",
      avatar: Maxim.src,
    },
    {
      name: "Martinet Lee",
      company: "Zircuit\nHead of Developer Relations",
      avatar: Martinet.src,
    },
    {
      name: "Maxey",
      company: "Torch\nFounder",
      avatar: Maxey.src,
    },
    {
      name: "Ming Wen",
      company: "Twin3.ai\nFounder",
      avatar: Ming_Wen.src,
    },
    {
      name: "Nana",
      company: "104\nProduct Designer",
      avatar: Nana104.src,
    },
    {
      name: "Nell",
      company: "Seraph \nBrand Director",
      avatar: nell.src,
    },
    {
      name: "Oliver",
      company: "Aggregata\nCo-Founder",
      avatar: Oliver.src,
    },
    {
      name: "Chef Kids",
      company: "Pancake Swap\nHead Chef",
      avatar: pancake.src,
    },
    {
      name: "Scott",
      company: "CopeX\nFounder",
      avatar: Scott.src,
    },
    {
      name: "Sean_Tao",
      company: "OpenSocial\nCo-Founder",
      avatar: Sean_Tao.src,
    },
    {
      name: "Selina",
      company: "GPTSavyy\nFounder",
      avatar: Selina.src,
    },
    {
      name: "Sunny Wu",
      company: "Asus Metaverse\nCEO",
      avatar: Sunny_Wu.src,
    },
    {
      name: "Sinka Gao",
      company: "Delphinus Lab\nFounder",
      avatar: Singa.src,
    },
    {
      name: "Juile",
      company: "Tako Protocol\nGrowth Head",
      avatar: TAKO.src,
    },
    {
      name: "Yang",
      company: "Ton\nSyndicate",
      avatar: Ton_Yang.src,
    },
    {
      name: "Weike Li",
      company: "COO\nAmber Group VC",
      avatar: Weike_Li.src,
    },
    {
      name: "Woody Cheng",
      company: "SecuX\nCOO",
      avatar: WOODY.src,
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
