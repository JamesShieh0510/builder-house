import Lead from "@/assets/Prizes/Lead.png";
import Wormhole from "@/assets/Prizes/wormhole.png";
import bingX from "@/assets/Prizes/bingX.png";
import bingxVe from "@/assets/Prizes/bingxVe.png";
import huobi from "@/assets/Prizes/huobi.png";
import chaintimes from "@/assets/Prizes/chaintimes.png";
import Orderly from "@/assets/Prizes/Orderly.svg";
import TBH1 from "@/assets/Prizes/TBH_Tiffany_1.png";
import TBH2 from "@/assets/Prizes/TBH_Tiffany_3.png";
import TBH3 from "@/assets/Prizes/TBH_White_3.png";
import Tzapac from "@/assets/Partners/tzapac_logo.svg";
import icp from "@/assets/Prizes/icp_centered.png";


import { useTranslation } from "next-i18next";

function PrizeDoc() {
  const { t } = useTranslation("prize");

  const prizeArray = [
    {
      title: "TBH：Best Overall",
      prize: "$3,000",
      pic: TBH1.src,
      data: {
        title: "Taiwan Builder House：Best Overall",
        prize: `${t("pA")}：$3,000U`,
        illustrate: t("1T"),
        content: [
          {
            title: t("pT"),
            detail: [
              `${t("pf")}`,
              `${t("ps")}`,
              `${t("pt")}`,
            ],
          },
        ],

        source: t("1S"),
      },
    },
    {
      title: "TBH：Most Potential",
      prize: "$2,000",
      pic: TBH1.src,
      data: {
        title: "Taiwan Builder House：Most Potential",
        prize: `${t("pA")}：$2,000U`,
        illustrate: t("2T"),
        content: [
          {
            title: t("pT"),
            detail: [
              `${t("pf1")}`,
              `${t("ps1")}`,
              `${t("pt1")}`,
            ],
          },
        ],

        source: t("2S"),
      },
    },
    {
      title: "TBH：Community Favorites",
      prize: "$1,000",
      pic: TBH1.src,
      data: {
        title: "Taiwan Builder House：Best Overall",
        prize: `${t("pA")}：$6,000U`,
        illustrate: t("3T"),
        content: [
          {
            title: t("pT"),
            detail: [
              `${t("pf")}500U , Onekey mini * 1`,
              `${t("ps")}300U`,
              `${t("pt")}200U`,
            ],
          },
        ],
      },
    },
    {
      title: "ICP",
      prize: "$1,000",
      pic: icp.src,
      data: {
        title: "ICP Online Hackathon",
        prize: `${t("pA")}：$1,000U`,
        illustrate: t("3T"),
        content: [
          {
            title: t("TZ"),
            detail: [`​參加方式：

​📱 追蹤 TBH 的 Instagram：
在 IG 上搜尋並關注我們的官方帳號，掌握最新活動資訊和福利。

​📚 註冊帳號並完成課程：
1️⃣ 前往活動網址：👉

​https://dacade.org/communities/icp/challenges/256f0a1c-5f4f-495f-a1b3-90559ab3c51f

​
2️⃣ 註冊一個新的帳號，並選修指定的 ICP 課程。
3️⃣ 認真學習並完成課程內容，最後提交作業。

​獎勵機制：

​🏆 先到先得！
前 20 位完成課程並提交作業的參與者，每人可獲得 $30 美元獎勵！ 💵

​🎁 驚喜大獎！
其他完成課程並擁有 TBH Ticket 的參與者，我們將抽出 1 位幸運兒，贏得 $500 美元的超級獎勵！ 🎉

​快來參加吧！ 🚀`],
          },
        ],
      },
    },
    // {
    //   title: "Orderly",
    //   prize: "$10,000",
    //   pic: Orderly.src,
    //   data: {
    //     title: "Orderly's growth and boost",
    //     prize: `${t("pA")}：$10,000U`,
    //     illustrate: ``,
    //     content: [
    //       {
    //         title: `Innovative Product Challenge tailored for Orderly V2 SDK：5,000U`,
    //         detail: [
    //           `Your task is to utilize the Orderly V2 SDK and create an innovative product that will redefine the decentralized exchange landscape. It could be a product or tool that brings efficiency, enhances user experience, or introduces a brand new feature to our platform. The successful development and implementation of an innovative solution can win you a prize of $5000. Be the architect of the future, and make your mark in the evolution of DEXs.`,
    //         ],
    //       },
    //       {
    //         title: `Retail Bounty Program Challenge tailored for Orderly V2 SDK：3,000U`,
    //         detail: [
    //           `We are inviting you to design a compelling retail bounty program to attract retail traders to our platform. This bounty program should incentivize participation, encourage engagement, and ultimately, increase our platform's user base. A well-structured, attractive, and impactful retail bounty program can bag you a reward of $3000. Remember, our goal is to create an inclusive, dynamic, and engaging trading environment.`,
    //         ],
    //       },
    //       {
    //         title: `Lottery Tool Challenge tailored for Orderly V2 SDK：1,000U`,
    //         detail: [
    //           `We're inviting you to make trading on our platform an exhilarating experience by designing a Lottery Tool. The tool should allow our users to enter a lottery funded by us each time they trade. The aim is to enhance the user experience by introducing an element of thrill, where each transaction made on our platform could potentially result in significant lottery winnings. The most innovative and user-friendly lottery tool stands a chance to win $1000.`,
    //         ],
    //       },
    //       {
    //         title: `Creating a compelling Referral System Tool：1,000U`,
    //         detail: [
    //           `We invite you to contribute to our community's growth and boost our platform's trading volume by creating a compelling Referral System Tool. This tool should facilitate our users to share unique promotional links and in return, earn affiliate rewards when their referrals join and trade on our platform. By motivating widespread sharing and expanding our user base, this tool is aimed at driving higher trading volumes. Craft a referral system tool that not only promotes our platform but also significantly ramps up our trading activity. You could earn a reward of $1000 for a well-executed design that aligns with these goals.`,
    //         ],
    //       },
    //     ],

    //     source: ``,
    //   },
    // },
    // {
    //   title: "TZ APAC",
    //   prize: "$10,000",
    //   pic: Tzapac.src,
    //   data: {
    //     title: "AI x Blockchain",
    //     prize: `${t("pA")}：$10,000U`,
    //     illustrate: ``,
    //     content: [
    //       {
    //         title: t("TZ"),
    //         detail: [`Need to integrate with Tezos`],
    //       },
    //     ],
    //   },
    // },
    // {
    //   title: "Lead Capital",
    //   prize: "$5,000",
    //   pic: Lead.src,
    //   data: {
    //     title: t("LCT"),
    //     prize: `${t("pA")}：$5,000U`,
    //     illustrate: t("LCC"),
    //     content: [
    //       {
    //         title: t("LC1T"),
    //         detail: [t("LC1C1"), t("LC1C2"), t("LC1C3")],
    //       },
    //       {
    //         title: t("LC2T"),
    //         detail: [],
    //       },
    //     ],
    //   },
    // },
    // {
    //   title: "Bonk",
    //   prize: "$4,000",
    //   pic: Bonk.src,
    //   data: {
    //     title: t("Bonkt"),
    //     prize: `${t("pA")}：$4,000U`,
    //     illustrate: t("Bonki"),
    //     content: [
    //       {
    //         title: t("Bonkt1"),
    //         detail: [],
    //       },
    //     ],
    //   },
    // },
    // {
    //   title: "Wormhole",
    //   prize: "$2,000",
    //   pic: Wormhole.src,
    //   data: {
    //     title: t("WHT"),
    //     prize: `${t("pA")}：$2,000U`,
    //     illustrate: t("WHC"),
    //     content: [
    //       {
    //         title: t("WH1T"),
    //         detail: [],
    //       },
    //       {
    //         title: t("WH2T"),
    //         detail: [],
    //       },
    //       {
    //         title: t("WH3T"),
    //         detail: [],
    //       },
    //       {
    //         title: t("WH4T"),
    //         detail: [],
    //       },
    //     ],
    //     source: t("WHS"),
    //   },
    // },
    // {
    //   title: "FileCoin",
    //   prize: "$2,000",
    //   pic: Filecoin.src,
    //   data: {
    //     title: t("FCT"),
    //     prize: `${t("pA")}：$2,000U`,
    //     illustrate: t("FCC"),
    //     content: [
    //       {
    //         title: t("FC1T"),
    //         detail: [],
    //       },
    //       {
    //         title: t("FC2T"),
    //         detail: [],
    //       },
    //       {
    //         title: t("FC3T"),
    //         detail: [],
    //       },
    //       {
    //         title: t("FC4T"),
    //         detail: [],
    //       },
    //       {
    //         title: t("FC5T"),
    //         detail: [],
    //       },
    //     ],
    //     source: t("FCS"),
    //   },
    // },
    // {
    //   title: "Huobi Ventures",
    //   prize: "$2,000",
    //   pic: huobi.src,
    //   data: {
    //     title: t("HVT"),
    //     prize: `${t("pA")}：$2,000U`,
    //     illustrate: t("HVC"),
    //     content: [
    //       {
    //         title: t("HV1T"),
    //         detail: [],
    //       },
    //     ],

    //     //source: ``,
    //   },
    // },
    // {
    //   title: "Chaintimes Ventures",
    //   prize: "$1,000",
    //   pic: chaintimes.src,
    //   data: {
    //     title: t("CTT"),
    //     prize: `${t("pA")}：$1,000U`,
    //     illustrate: t("CTC"),
    //     content: [
    //       {
    //         title: t("CT1T"),
    //         detail: [t("CT1C1"), t("CT1C2"), t("CT1C3"), t("CT1C4")],
    //       },
    //       {
    //         title: t("CT2T"),
    //         detail: [t("CT2C1"), t("CT2C2"), t("CT2C3"), t("CT2C4")],
    //       },
    //     ],
    //   },
    // },
    // {
    //   title: "ACE Exchange",
    //   prize: t("ACE"),
    //   pic: Ace.src,
    //   data: {
    //     title: t("ACET"),
    //     prize: t("ACEP"),
    //     illustrate: t("ACEC"),
    //     content: [
    //       {
    //         title: t("ACE1T"),
    //         detail: [t("ACE1C1")],
    //       },
    //       {
    //         title: t("ACE2T"),
    //         detail: [t("ACE2C1")],
    //       },
    //       {
    //         title: t("ACE3T"),
    //         detail: [t("ACE3C1"), t("ACE3C2"), t("ACE3C3")],
    //       },
    //     ],

    //     //source: ``,
    //   },
    // },
    //{
    //  title: "BingX",
    //  prize: "$ -",
    //  pic: bingX.src,
    //},
  ];
  const prizeData = {
    title: { name: "PRIZES", color: "red" },
    subTitle: t("subTitle"),
    id: "Prizes",
    data: prizeArray,
    totalPrize: 11000,
  };
  return prizeData;
}
export default PrizeDoc;
