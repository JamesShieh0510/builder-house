import { useTranslation } from "next-i18next";
import After_party from "@/assets/Activity/After_party.png";
import City1 from "@/assets/Overview/city1.png";
import City2 from "@/assets/Overview/city2.png";
import City3 from "@/assets/Overview/city3.png";
import City4 from "@/assets/Overview/city4.png";

function CityDoc() {
  const { t } = useTranslation("city");

  const CityData = {
    title: t("title"),
    content: t("content"),
    data: [
      {
        img: City1.src,
      },
      {
        img: City2.src,
      },
      {
        img: City3.src,
      },
      {
        img: City4.src,
      },
    ],
  };
  return CityData;
}
export default CityDoc;
