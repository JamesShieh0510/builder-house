import React from "react";
import style from "@/assets/Partners/partnerStyle.svg";
import BG from "@/assets/Partners/partnerBg.svg";
import Mask from "@/assets/Mask.svg";
import { Box } from "@chakra-ui/react";
import PartnersCard from "./Card";
import PartnersM from "./MobileCard";

export default function Partners(props: { data: any }) {
  const { data } = props;
  const {
    host,
    coHost,
    strategic,
    diamond,
    gold,
    silver,
    projects,
    partners,
    vc,
    technical,
    adviser,
    gem,
    media,
    community,
  } = data;

  return (
    <>
      <div className="relative bg-white">
        {/* <div className="absolute z-10 w-full">
          <img
            src={BG.src}
            alt=""
            width="100%"
            height="100%"
            className="pointer-events-none -z-10"
          />
        </div> */}
        <div className="flex w-full justify-start gap-14 pb-36 pt-36 lg:pt-72 lg:px-32">
          {/* <img
            src={style.src}
            alt=""
            width="70"
            height="100"
            className="hidden lg:block"
          /> */}
          <div className="flex flex-col items-center">
            <div
              className={`bg-primary bg-clip-text text-[4rem] font-bold uppercase text-transparent mx-5 lg:mx-0`}
            >
              {data.title}
            </div>
            <div className="flex text-4xl font-extrabold leading-[64px]">
              {data.subTitle}
            </div>
          </div>
          {/* <img
            src={style.src}
            alt=""
            width="70"
            height="100"
            className="hidden lg:block"
          /> */}
        </div>
      </div>
      <div className="z-50 flex h-full items-center justify-center bg-white">
        <div className="hidden w-full flex-col items-center gap-16 lg:flex">
          <PartnersCard logo={host} type="HOST" grid="4" />
          <PartnersCard logo={coHost} type="CO-HOST" grid="4" />
          <PartnersCard logo={strategic} grid="4" type="Strategic Partner" />
          {/* <PartnersCard logo={diamond} type="Diamond Sponsor" /> */}
          {/* <PartnersCard logo={gold} type="Gold Sponsor" /> */}
          {/* <PartnersCard logo={silver} type="Silver Partner" /> */}
          <PartnersCard logo={partners} grid="4" type="Partner" />
          <PartnersCard logo={vc} grid="4" type="VC Partner" />
          <PartnersCard logo={projects} grid="4" type="Project Partner" />
          {/* <PartnersCard logo={technical} type="Technical Support" /> */}
          {/* <PartnersCard logo={adviser} type="Advised by" /> */}
          {/* <PartnersCard logo={gem} grid="4" type="Gem Partner" /> */}
          <PartnersCard logo={media} grid="4" type="Media Partner" />
          <PartnersCard logo={community} type="Community Partner" />
        </div>
        {/* Mobile  */}
        <div className="flex w-full flex-col items-center gap-12 px-6 lg:hidden">
          <PartnersM logo={host} type="HOST" />
          <PartnersM logo={coHost} type="CO - HOST" />
          <PartnersM logo={strategic} type="Strategic Partner" />
          {/* <PartnersM logo={diamond} type="Diamond Sponsor" /> */}
          {/* <PartnersM logo={gold} type="Gold Sponsor" /> */}
          {/* <PartnersM logo={silver} type="Silver partner" /> */}
          <PartnersM logo={partners} type="Partner" />
          <PartnersM logo={vc} type="VC Partner" />
          <PartnersM logo={projects} type="Project Partner" />
          {/* <PartnersM logo={technical} type="Technical Support" /> */}
          {/* <PartnersM logo={adviser} type="Advised by" /> */}
          {/* <PartnersM logo={gem} type="Gem Partner" /> */}
          <PartnersM logo={media} type="Media Partner" />
          <PartnersM logo={community} type="Community Partner" />
        </div>
      </div>
      {/* <Box
        className="flex h-56 w-full"
        bgImg={Mask.src}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="top"
      /> */}
    </>
  );
}
