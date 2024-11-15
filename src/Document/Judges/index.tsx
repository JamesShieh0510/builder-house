import { useTranslation } from "next-i18next";
import henry from "@/assets/Judges/henry.jpeg";
import michael from "@/assets/Judges/michael.jpg";
import damien from "@/assets/Judges/damien.jpeg";
import Josh from "@/assets/Judges/Josh.jpeg";
import Albert from "@/assets/Judges/albert.jpeg";
import Ryder from "@/assets/Judges/Ryder.jpeg";


//icon-website
//icon-twitter
//icon-discord
//icon-telegram

function JudgesDoc() {
  const { t } = useTranslation("judges");

  const JudgesArray = [
    {
      name: "Damien",
      company: "Binance\nGlobal Partnerships",
      avatar: damien.src,
      linkin: "https://www.linkedin.com/in/damien-ho-70339935/",
    },
    {
      name: "Henry",
      company: "Meta\nGSR Sales Director",
      avatar: henry.src,
      linkin: "https://www.linkedin.com/in/lin-heng-07607988/",
    },
    {
      name: "Michael",
      company: "Lead Capital\nCo-Founder",
      avatar: michael.src,
      linkin: "https://www.linkedin.com/in/michae1chen/",
    },
    {
      name: "Josh",
      company: "BingX\nAPAC Business Director ",
      avatar: Josh.src,
      linkin: "",
    },
    {
      name: "Albert",
      company: "Genopets\nFounder ",
      avatar: Albert.src,
      linkin: "",
    },
    {
      name: "Ryder",
      company: "Google Cloud \n Field Sales Representative",
      avatar: Ryder.src,
      linkin: "",
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
