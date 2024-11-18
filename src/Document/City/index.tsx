import { useTranslation } from "next-i18next";
import After_party from "@/assets/Activity/After_party.png";
import City1 from "@/assets/Overview/bn1.jpg";
import City2 from "@/assets/Overview/bn2.jpg";
import City3 from "@/assets/Overview/bn3.jpg";
import City4 from "@/assets/Overview/bn4.jpg";
import City5 from "@/assets/Overview/bn5.jpg";

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
      {
        img: City5.src,
      },
    ],
  };
  return CityData;
}
export default CityDoc;
