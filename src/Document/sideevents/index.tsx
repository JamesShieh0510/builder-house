import NCKUWorkshop from "@/assets/Sideevents/TBH_NCKUworkshop.jpeg"
import YachtParty from "@/assets/Sideevents/TBH_YachtParty.png"
import PrivateDinner from "@/assets/Sideevents/TBH_PrivateDinner.png"
import ClosingParty from "@/assets/Sideevents/TBH_ClosingParty.png"
import Workshop from "@/assets/Sideevents/TBH_workshop.png"
import Cheers from "@/assets/Sideevents/TBH_Cheers.png"


function SideEventsDoc() {
    return {
      title: { name: "Side Events", color: "pink" },
      subTitle: "Explore our exciting side events!",
      id: "sideevents",
      data: [
        {
          title: "TBH X NCKU Blockchain Club Workshop",
          link: "https://lu.ma/nmtreryc",
          img: NCKUWorkshop,
        },
        {
          title: "2024 Taiwan Builder House : The Builder’s Cheers",
          link: "https://lu.ma/l7o8ph5b",
          img: Cheers,
        },
        {
          title: "PRIVATE DINNER",
          link: "https://lu.ma/koeg9l3z",
          img: PrivateDinner,
        },
        {
          title: "Closing Party",
          link: "https://lu.ma/q4pl3xfi",
          img: ClosingParty,
        },
      ],
    };
  }
  
  export default SideEventsDoc;