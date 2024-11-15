import Bla from "@/assets/Hunter/bla.svg";
import CA from "@/assets/Hunter/ca.png";
import Friends from "@/assets/Hunter/friends.png";
import Rentii from "@/assets/Hunter/rentii.png";
import Tikki from "@/assets/Hunter/tikki.png";
import Followin from "@/assets/Partners/followIn.svg";
import Bucket from "@/assets/Hunter/bucket.png";
import Dmail from "@/assets/Hunter/dmail.png";
import Pawnfi from "@/assets/Hunter/pawnfi_logo.png";
import Bonk from "@/assets/Hunter/bonk.png";
import Genopets from "@/assets/Hunter/genopets.png";
import Paraspace from "@/assets/Hunter/paraspace_logo.png";
import Mexc from "@/assets/Prizes/mexc.png";
import Orderly from "@/assets/Prizes/Orderly.svg";
import Term from "@/assets/Hunter/logo_term.png";
import Gash from "@/assets/Hunter/GASH.png";
import Mayg from "@/assets/Hunter/MAYG.png";
import noneland from "@/assets/Partners/noneland.svg";
import PA from "@/assets/Hunter/PANews_hunter.png";

import Okx from "@/assets/Hunter/OKX_Logo_white.png";
import Zomma from "@/assets/Hunter/zomma_hunter.png";

//icon-website
//icon-twitter
//icon-discord
//icon-telegram
import { useTranslation } from "next-i18next";

function HunterDoc() {
  const { t } = useTranslation("hunter");

  const hunterArray = [
    {
      title: "MEXC",
      prize: "1,000USDT",
      pic: Mexc.src,
      data: {
        title: "MEXC",
        linkArr: [
          {
            icon: "icon-website",
            link: "https://www.mexc.com/zh-TW/register?inviteCode=mexc-TBH",
          },
        ],
        illustrate: t("MEXCC"),
        content: [{ title: t("MEXC1T"), detail: [t("MEXC1C1")] }],
      },
    },
    {
      title: "OKX",
      prize: "Task",
      pic: Okx.src,
      data: {
        title: "OKX",
        linkArr: [
          {
            icon: "icon-website",
            link: "https://www.okx.com/join/TBH2023",
          },
        ],
        illustrate: t("OKXi"),
        content: [
          { title: t("OKX1")},
          { title: t("OKX2")},
          { title: t("OKX3")},
          { title: t("OKX4")},
        ],
      },
    },
    {
      title: "Followin",
      prize: "Task",
      pic: Followin.src,
      data: {
        title: "Followin",
        linkArr: [
          { icon: "icon-website", link: "https://followin.io/" },
          { icon: "icon-twitter", link: "https://twitter.com/followin_io" },
          { icon: "icon-telegram", link: "https://t.me/followin_io" },
          {
            icon: "icon-discord",
            link: "https://discord.com/invite/vPdAfjZ7ja",
          },
        ],
        illustrate: t("FNC"),
        content: [
          {
            title: t("FN1T"),
            detail: [],
          },
          {
            title: t("FN2T"),
            detail: [],
          },
          {
            title: t("FN3T"),
            detail: [],
          },
        ],
      },
    },
    {
      title: "MAYG",
      prize: "Task",
      pic: Mayg.src,
      data: {
        title: "MAYG",
        linkArr: [
          { icon: "icon-website", link: "https://www.mayg.io/" },
          { icon: "icon-twitter", link: "https://twitter.com/Maygnft" },
          {
            icon: "icon-discord",
            link: "https://discord.com/invite/hr9YJ84AsK",
          },
        ],
        illustrate: t("MAYGi"),
        content: [
          { title: t("MAYG1"), detail: [] },
          { title: t("MAYG2"), detail: [] },
          { title: t("MAYG3"), detail: [] },
        ],
      },
    },
    {
      title: "PANews",
      prize: "Task",
      pic: PA.src,
      w: "34",
      data: {
        title: "PANews",
        linkArr: [
          { icon: "icon-website", link: "https://www.panews.io/" },
          { icon: "icon-twitter", link: "https://twitter.com/PANewsCN" },
          { icon: "icon-telegram", link: "https://t.me/PANewsLab" },
        ],
        illustrate: t("PAi"),
        content: [
          { title: t("PA1"), detail: [] },
          { title: t("PA2"), detail: [] },
        ],
      },
    },
    {
      title: "GASH",
      prize: "Task",
      pic: Gash.src,
      data: {
        title: "GASH",
        linkArr: [
          { icon: "icon-website", link: "https://www.bonkcoin.com/" },
          { icon: "icon-twitter", link: "https://twitter.com/GASH_tw" },
          {
            icon: "icon-discord",
            link: "https://discord.com/invite/gash-invitelink",
          },
        ],
        illustrate: t("GASHi"),
        content: [
          { title: t("GASH1"), detail: [] },
          { title: t("GASH2"), detail: [] },
          { title: t("GASH3"), detail: [] },
        ],
      },
    },
    {
      title: "NONE LAND",
      prize: "Task",
      pic: noneland.src,
      data: {
        title: "NONE LAND",
        linkArr: [{ icon: "icon-website", link: "https://none.land" }],
        illustrate: t("NLS"),
        content: [
          { title: t("NL1T"), detail: [] },
          { title: t("NL2T"), detail: [] },
          { title: t("NL3T"), detail: [] },
        ],
      },
    },
    {
      title: "Blablablock",
      prize: "Task",
      pic: Bla.src,
      data: {
        title: "Blablablock",
        linkArr: [
          { icon: "icon-website", link: "https://www.blablablock.com" },
          { icon: "icon-twitter", link: "https://twitter.com/__BlablaBlock__" },
          {
            icon: "icon-discord",
            link: "https://discord.com/invite/C82wRDecbS",
          },
        ],
        illustrate: t("BLS"),
        content: [
          { title: t("BL1T"), detail: [] },
          { title: t("BL2T"), detail: [] },
          { title: t("BL3T"), detail: [] },
          { title: t("BL4T"), detail: [] },
        ],
        //source: ``,
      },
    },
    {
      title: "Bucket Protocol",
      prize: "Task",
      pic: Bucket.src,
      data: {
        title: "Bucket Protocol",
        linkArr: [
          { icon: "icon-website", link: "https://app.bucketprotocol.io/" },
          { icon: "icon-twitter", link: "https://twitter.com/bucket_protocol" },
          { icon: "icon-telegram", link: "https://t.me/bucketprotocol" },
          {
            icon: "icon-discord",
            link: "https://discord.com/invite/nYCnNJE6Tr",
          },
        ],
        illustrate: t("BPS"),
        content: [
          { title: t("BP1T"), detail: [] },
          { title: t("BP2T"), detail: [] },
        ],
      },
    },
    {
      title: "Crypto Arsenal",
      prize: t("CAP"),
      pic: CA.src,
      data: {
        title: "Crypto Arsenal",
        linkArr: [
          { icon: "icon-website", link: "https://crypto-arsenal.io/" },
          { icon: "icon-twitter", link: "https://twitter.com/CryptoArsena1" },
          { icon: "icon-telegram", link: "https://t.me/TG_Crypto_Arsenal" },
          {
            icon: "icon-discord",
            link: "https://discord.com/invite/DfVSwYprvK",
          },
        ],
        illustrate: t("CAS"),
        content: [
          { title: t("CA1T"), detail: [] },
          { title: t("CA2T"), detail: [] },
          { title: t("CA3T"), detail: [t("CA3C1"), t("CA3C2")] },
        ],
      },
    },
    {
      title: "Dmail",
      prize: "Task",
      pic: Dmail.src,
      data: {
        title: "Dmail",
        linkArr: [
          { icon: "icon-website", link: "https://dmail.ai/" },
          { icon: "icon-twitter", link: "https://twitter.com/Dmailofficial" },
          {
            icon: "icon-discord",
            link: "https://discord.com/invite/5HH4R5KTA3",
          },
        ],
        illustrate: t("DMS"),
        content: [
          { title: t("DM1T"), detail: [t("DM1C1")] },
          { title: t("DM2T"), detail: [t("DM2C1")] },
        ],
      },
    },
    {
      title: "Friends Protocal",
      prize: "Mint 50%OFF",
      pic: Friends.src,
      data: {
        title: "Friends Protocal",
        linkArr: [
          { icon: "icon-website", link: "https://4riends.org/" },
          { icon: "icon-twitter", link: "https://twitter.com/FriendsProtocol" },
          { icon: "icon-telegram", link: "https://t.me/Friends_Protocol" },
        ],
        illustrate: "",
        content: [
          { title: t("FP1T"), detail: [] },
          { title: t("FP2T"), detail: [] },
          { title: t("FP3T"), detail: [] },
        ],
      },
    },
    {
      title: "Genopets",
      prize: "Task",
      pic: Genopets.src,
      data: {
        title: "Genopets",
        linkArr: [
          { icon: "icon-website", link: "https://www.genopets.me/" },
          { icon: "icon-twitter", link: "https://twitter.com/genopets" },
          { icon: "icon-discord", link: "https://discord.com/invite/genopets" },
        ],
        illustrate: t("Genoi"),
        content: [
          { title: t("Geno1"), detail: [] },
          { title: t("Geno2"), detail: [] },
          { title: t("Geno3"), detail: [] },
        ],
      },
    },
    {
      title: "Paraspace",
      prize: "Task",
      pic: Paraspace.src,
      data: {
        title: "Paraspace",
        linkArr: [
          { icon: "icon-website", link: "https://para.space/" },
          { icon: "icon-twitter", link: "https://twitter.com/ParaSpace_NFT" },
          {
            icon: "icon-discord",
            link: "https://discord.com/invite/paraspace",
          },
        ],
        illustrate: "",
        content: [
          {
            title: `1. Supplying ERC-20/ERC-721”`,
            detail: [],
          },
          {
            title: `2. Borrowing ERC-20`,
            detail: [],
          },
          {
            title: `3. Follow Social Media`,
            detail: [
              "Twitter：<a href='https://twitter.com/ParaSpace_NFT' target='_blank' class=\" underline underline-offset-2 text-greenT\">@ParaSpace_NFT</a> <a href='https://twitter.com/ParaSpace_CN' target='_blank' class=\" underline underline-offset-2 text-greenT\">@ParaSpace_CN</a>",
              "Join <a href='https://discord.com/invite/paraspace' target='_blank' class=\" underline underline-offset-2 text-greenT\">Discord</a>",
            ],
          },
        ],
      },
    },
    {
      title: "Pawnfi",
      prize: "Task",
      pic: Pawnfi.src,
      data: {
        title: "PawnFi",
        linkArr: [
          { icon: "icon-website", link: "https://pawnfi.com/" },
          { icon: "icon-twitter", link: "https://twitter.com/pawnfiofficial" },
          { icon: "icon-telegram", link: "https://t.me/pawnfiprotocol" },
          { icon: "icon-discord", link: "https://discord.com/invite/pawnfi" },
        ],
        illustrate:
          "Backed by Digital Currency Group, Coinbase, Crypto.com and so forth, Pawnfi is a pioneering NFT liquidity initiator that supports NFT trading, lending and earning in one go.",
        content: [
          {
            title: `1. Successfully connect with a wallet. (Signature only, no further interaction required)”`,
            detail: [],
          },
          {
            title: `2. Follow Social Media`,
            detail: [
              "Twitter：<a href='https://twitter.com/pawnfiofficial' target='_blank' class=\" underline underline-offset-2 text-greenT\">@PawnfiOfficial</a> + Join <a href='https://discord.com/invite/pawnfi' target='_blank' class=\" underline underline-offset-2 text-greenT\">Discord</a>",
            ],
          },
          {
            title: `3. Retweet their pinned post`,
            detail: [],
          },
        ],
      },
    },
    {
      title: "Rentii",
      prize: "Task",
      pic: Rentii.src,
      data: {
        title: "Rentii",
        linkArr: [
          { icon: "icon-website", link: "https://www.rentii.xyz/" },
          { icon: "icon-twitter", link: "" },
          { icon: "icon-telegram", link: "" },
          { icon: "icon-discord", link: "" },
        ],
        illustrate: "",
        content: [
          { title: t("RE1T"), detail: [] },
          { title: t("RE2T"), detail: [] },
          { title: t("RE3T"), detail: [] },
        ],
      },
    },
    {
      title: "Tikki",
      prize: "Task",
      pic: Tikki.src,
      data: {
        title: "Tikki",
        linkArr: [
          { icon: "icon-website", link: "https://app.tikki.app/explore" },
          { icon: "icon-twitter", link: "https://twitter.com/Tikki_NFT" },
          { icon: "icon-discord", link: "https://discord.gg/edMrxhjn" },
        ],
        illustrate: t("TIS"),
        content: [
          { title: t("TI1T"), detail: [t("TI1C1")] },
          { title: t("TI2T"), detail: [t("TI2C1")] },
          { title: t("TI3T"), detail: [] },
        ],
      },
    },
    {
      title: "Term Structure",
      prize: "Task",
      pic: Term.src,
      data: {
        title: "Term Structure",
        linkArr: [
          { icon: "icon-website", link: "https://termstructure.com/" },
          { icon: "icon-twitter", link: "https://twitter.com/TermStructLabs" },
          {
            icon: "icon-discord",
            link: "https://discord.com/invite/XQdGCMGjaR",
          },
        ],
        illustrate: t("Termi"),
        content: [
          { title: t("Term1"), detail: [] },
          { title: t("Term2"), detail: [] },
          { title: t("Term3"), detail: [] },
          { title: t("Term4"), detail: [] },
          { title: t("Term5"), detail: [] },
        ],
      },
    },
    {
      title: "Bonk",
      prize: "Task",
      pic: Bonk.src,
      data: {
        title: "Bonk",
        linkArr: [
          { icon: "icon-website", link: "https://www.bonkcoin.com/" },
          { icon: "icon-twitter", link: "https://twitter.com/bonk_inu" },
          { icon: "icon-discord", link: "https://discord.com/invite/bonkcoin" },
        ],
        illustrate: t("BONKS"),
        content: [
          { title: t("BONK1"), detail: [] },
          { title: t("BONK2"), detail: [] },
          { title: t("BONK3"), detail: [] },
        ],
      },
    },
    {
      title: "Zomma Protocol",
      prize: "Task",
      pic: Zomma.src,
      data: {
        title: "Zomma Protocol",
        linkArr: [
          { icon: "icon-website", link: "https://app.zomma.pro/en/main/trade" },
          { icon: "icon-twitter", link: "https://twitter.com/ZommaProtocol" },
          { icon: "icon-telegram", link: "https://t.me/ZommaProtocol" },
          { icon: "icon-discord", link: "https://discord.com/invite/VAkBKQKXnh" },
        ],
        illustrate: t("Zommai"),
        content: [
          { title: t("Zomma1"), detail: [] },
          { title: t("Zomma2"), detail: [] },
          { title: t("Zomma3"), detail: [] },
        ],
      },
    },
  ];
  const detail = {
    title: "Gem Hunter 挑戰活動規則",
    illustrate:
      "Hunter 有機會完成 GEM 任務以獲取 GEM NFT。收集特定數量的 GEM NFT 可以解鎖對應等級的獎品抽獎資格。接受挑戰，成為真正的 Gem Hunter！任務完成要求與獎品分配(只可擇一兌換)：",
    content: [
      {
        title: "1. 完成收集 8 個 GEM NFT",
        detail: [
          "權益：能抽取 Silver 抽獎箱(先到先抽，抽完為止)",
          "Silver 抽獎箱包括：10 USDT*30、TBH衣服20件、Binance 非刺繡黑T*10、MEXC衣服*10、MEXC 袋子10、MEXC 帽子20。",
        ],
      },
      {
        title: "2. 完成收集 12 個 GEM NFT",
        detail: [
          "直接獎勵：Gem Hunter VIP PASS",
          "權益：能選擇抽取 Gold 抽獎箱(先到先抽，抽完為止)",
          "Gold 抽獎箱包括：300 USDT *1、100 USDT *1、30 USDT *10、TBH不鏽鋼杯*10、Binance 刺繡黑色T*5 白*1、Binance 黃色帽T *2、Binance 黑色帽T *2、Orderly 禮包、OKX 咖啡組 * 1、Pionex 充電盤 * 5。",
        ],
      },
      {
        title: "3. 完成收集 16 個 GEM NFT",
        detail: [
          "直接獎勵：Gem Hunter VIP PASS",
          "權益：能選擇抽取 Diamond 抽獎箱(先到先抽，抽完為止)",
          "Diamond 抽獎箱包括：1000USDT *1、500 USDT*1、300 USDT*1、100 USDT*2、Binance 五週年禮盒*1、Binance 六週年禮盒*1、Binance 行李箱*1、Binance 滑板*1、Binance 按摩槍*1、OKEX 禮包*3、Onekey mini*2、OKX機械鍵盤禮盒 * 1、Pionex 行李箱 * 1。",
        ],
      },
      {
        title: "活動流程",
        detail: [
          "Hunters 完成任務後會收到 GEM NFT。",
          "在活動當天，Hunters 帶著自己的 GEM NFT 到指定地點，由工作人員進行驗證。",
          "根據驗證結果，Hunters 可根據擁有的 GEM NFT 數量選擇抽獎箱進行抽獎。",
          "每位 Hunter 只能抽取一項獎品。",
          "獎品數量有限，先到先抽，抽完為止。",
        ],
      },
      {
        title: "注意事項",
        detail: [
          "工作人員驗證後，Hunter 可以進行抽獎。",
          "每位 Hunter 只能從符合其資格的抽獎箱中選擇一個進行抽取。",
        ],
      },
      {
        title: "免責聲明",
        detail: [
          "活動主辦方保留最終解釋權。如有任何更改，將會事先通知參與者。",
        ],
      },
    ],
  };

  const hunterData = {
    title: { name: "Gem Hunter", color: "red" },
    subTitle: t("subTitle"),
    id: "GemHunter",
    data: hunterArray,
    detail: detail,
    totalPrize: 3000,
  };
  return hunterData;
}
export default HunterDoc;
