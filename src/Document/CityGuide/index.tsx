import r1 from "@/assets/Tait.jpg"
import r2 from "@/assets/Xilong.jpg"
import r3 from "@/assets/AnpingHistoricalArea.jpg"
import r4 from "@/assets/AnpingOldStreet.jpg"
import r5 from "@/assets/AnpingTianhouTemple.jpg"

function CityGuideDoc() {
  return {
    title: "City Guide",
    subTitle: "Tainan: The city of angels",
    id: "cityguide",
    places: [
      {
        name: "Chihkan Tower (Fort Provintia)",
        description:
          "A historic landmark showcasing the cultural and architectural history of Tainan. Perfect for history enthusiasts!",
        link: "",
      },
      {
        name: "Anping Old Street",
        description:
          "Stroll through this charming old street filled with shops, local snacks, and traditional goods.",
        link: "",
      },
      {
        name: "Tainan Confucius Temple",
        description:
          "The oldest Confucius temple in Taiwan, offering a tranquil and culturally rich experience.",
        link: "",
      },
      {
        name: "Garden Night Market",
        description:
          "One of the largest and most vibrant night markets in Tainan, offering an incredible variety of street food and shopping.",
        link: "",
      },
      {
        name: "Shennong Street",
        description:
          "A beautiful historic street with traditional architecture, cozy cafes, and unique boutiques.",
        link: "",
      },
      {
        name: "Anping Tree House",
        description:
          "A unique and surreal site where nature and history collide, with trees growing over and through an old warehouse.",
        link: "",
      },
      {
        name: "Crowne Plaza Tainan",
        description:
          "Situated near Sicao Bridge and Tainan National Park, this luxury hotel offers stunning views, excellent amenities, and easy access to Anping's historical sites.",
        link: "https://www.cptainan.com/",
      },
      {
        name: "Formosa Yacht Resort",
        description:
          "Located in Tainan's Anping District, this luxury resort combines modern design and vacation comfort. Explore nearby Anping Old Street and Fort Zeelandia while enjoying top-notch facilities.",
        link: "https://www.formosayacht.com.tw/",
      },
      {
        name: "Hotel Cozzi Ximen Tainan",
        description:
          "A stylish and modern hotel situated near popular tourist attractions, perfect for both leisure and business travelers.",
        link: "https://www.hotelcozzi.com/en/tainan/",
      },
      {
        name: "U.I.J. Hotel & Hostel",
        description:
          "A trendy boutique hotel offering both private and dormitory-style accommodations for travelers on a budget.",
        link: "https://uijhotel.com/",
      },
      {
        name: "Tayih Landis Hotel Tainan",
        description:
          "A luxurious hotel offering spacious rooms and a wide range of amenities, located near major shopping districts.",
        link: "https://www.landishotelsresorts.com/en/TAINAN",
      },
    ],
    recommendations: [
      {
        name: "Former British Tait & Co. Merchant House",
        description: "The green hills remain, and the sunsets linger. Experience the rich historical atmosphere.",
        image: r1.src,
        link: "",
      },
      {
        name: "Xishe Xilong Temple",
        description: "A historic temple well-preserved and worth a visit.",
        image: r2.src,
        link: "",
      },
      {
        name: "Anping Harbor National Historical Scenic Area",
        description: "A national park with beautiful scenery, perfect for family outings.",
        image: r3.src,
        link: "",
      },
      {
        name: "Anping Old Street",
        description: "A perfect place to enjoy local snacks and handmade crafts.",
        image: r4.src,
        link: "",
      },
      {
        name: "Anping Tianhou Temple",
        description: "A historic Tianhou Temple with a rich cultural heritage, perfect for history enthusiasts.",
        image: r5.src,
        link: "",
      },
    ],
  };
}

export default CityGuideDoc;