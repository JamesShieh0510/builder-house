import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import House from "@/assets/house.svg";
import dotT from "@/assets/dotT.svg";
import dotThree from "@/assets/dotThree.svg";
import Vector from "@/assets/Vector.svg";
import LinearButton from "../LinearButton/LinearButton";
import { useTranslation } from "next-i18next";

export default function MainDesktop() {
  const { t } = useTranslation("main");
  return (
    <Flex
      className="h-full w-full flex-col px-16 pb-8 transition-all"
      display={{ base: "none", lg: "flex" }}
    >
      <div className="relative flex h-3/5 w-full flex-col items-center justify-end gap-11 pb-12 mt-20">
        <img src={House.src} alt="" className="z-10 w-[560px]" />
        {/* <div className="flex w-full justify-between pr-10">
          <div className="bg-gradient-to-r from-greenF to-greenT bg-clip-text p-2 text-5xl font-medium text-transparent">
            {t("subTitle")}
          </div>
          <img src={dotThree.src} alt="" className="h-12" />
        </div> */}
        {/* <img
          src={dotT.src}
          alt=""
          className="absolute right-96 top-16 h-10 xl:left-96"
        /> */}
      </div>
      <div className="relative flex h-2/5 w-full justify-center py-6">
        {/* <div className="absolute -left-4 -top-[26px]">
          <img src={Vector.src} alt="" width="50" height="50" />
        </div>
        <div className="absolute -top-[26px] right-72">
          <img src={Vector.src} alt="" width="50" height="50" />
        </div>
        <div className="absolute -bottom-[26px] right-24">
          <img src={Vector.src} alt="" width="50" height="50" />
        </div> */}
        {/* <div className="absolute right-[312px] top-0 h-full w-[2px] bg-text" /> */}
        <div className="relative flex w-full flex-col items-center justify-between gap-2">
          <div className="max-w-xl text-center text-base font-normal xl:max-w-4xl">
            {t("content")}
          </div>
          <div className="relative flex h-12 gap-6 mt-20 z-[50]">
            <LinearButton buttonClass="w-[250px]" color="white" href="https://bit.ly/Register_TBH2024">
              {t("joinL")}
            </LinearButton>
            <LinearButton buttonClass="w-[250px]" color="white" href="https://app.moongate.id/e/tbh2024">
              {t("joinR")}
            </LinearButton>
            <div className="absolute transition-all lg:flex hidden -top-10 -right-20">
              <div className="absolute w-[160px] h-[160px] border-[#FF3366] border-[40px] rounded-full"/>
            </div>
          </div>
        </div>
      </div>
    </Flex>
  );
}
