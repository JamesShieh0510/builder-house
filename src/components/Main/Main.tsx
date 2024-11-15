import React from "react";
// import Image from 'next/dist/client/image';
import { Button, Divider, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Desktop from "./MainDesktop";
import Mobile from "./MainMobile";
import Header from "../Header/Header";
import City from "@/assets/city.svg";
import City2 from "@/assets/city2.svg";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import Marquee from "react-fast-marquee";

export default function Main() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const router = useRouter();
  const goPage = (page: string) => {
    router.push(page);
  };
  return (
    <>
      <Header />
      <Flex
        className="relative flex-col items-center overflow-hidden bg-gradient-to-b from-white from-5% via-[#FBD4AD] via-15% to-[#FF3366] to-100%"
        minH={isMobile ? "full" : ""}
        h={isMobile ? "" : "auto"}
        pt="5rem"
      >
        <div className="absolute right-[280px] top-32 hidden transition-all md:flex lg:right-[280px] lg:top-52">
          <div className="absolute h-[380px] w-[380px] rounded-full border-[60px] border-[#EAFF6E]" />
        </div>
        <div className="absolute left-0 top-32 hidden transition-all lg:-left-[200px] lg:top-[380px] lg:flex">
          <div className="absolute h-[430px] w-[430px] rounded-full border-[80px] border-[#99FFFF]" />
        </div>
        <Desktop />
        <Mobile />
        <div className="relative flex h-3/5 w-full flex-col items-center justify-end gap-11">
          <img src={City.src} alt="" className="z-20 w-[1280px]" />
          <img src={City2.src} alt="" className="absolute z-20 w-[1280px]" />
        </div>
      </Flex>
      <Marquee className="border-[1px] bg-secondary text-2xl">
        <div className="mx-2">TAIWAN BUILDER HOUSE</div>
        <div className="mx-2 text-stroke leading-6">THE BLOCK</div>
        <div className="mx-2">TAIWAN BUILDER HOUSE</div>
        <div className="mx-2 text-stroke leading-6">THE BLOCK</div>
        <div className="mx-2">TAIWAN BUILDER HOUSE</div>
        <div className="mx-2 text-stroke leading-6">THE BLOCK</div>
        <div className="mx-2">TAIWAN BUILDER HOUSE</div>
        <div className="mx-2 text-stroke leading-6">THE BLOCK</div>
        <div className="mx-2">TAIWAN BUILDER HOUSE</div>
        <div className="mx-2 text-stroke leading-6">THE BLOCK</div>
      </Marquee>
    </>
  );
}
