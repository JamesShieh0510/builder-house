import React from "react";
import { Flex } from "@chakra-ui/react";
import House from "@/assets/house.svg";
import dotT from "@/assets/dotT.svg";
import dotThree from "@/assets/dotThree.svg";
import Vector from "@/assets/Vector.svg";
import LinearButton from "../LinearButton/LinearButton";
import { useTranslation } from "next-i18next";
// -top-[26px]
export default function MainMobile() {
  const { t } = useTranslation("main");
  return (
    <>
      <Flex
        className="h-full w-full flex-col items-center px-10 pb-4 pt-12 transition-all"
        display={{ base: "flex", lg: "none" }}
      >
        <div className="relative flex h-1/2 w-full flex-col items-start justify-end gap-4 pb-4">
          {/* <div className="pb-6 pl-4">
            <img src={dotThree.src} alt="" width="40" height="50" />
          </div> */}
          <img src={House.src} alt="" className="z-20 w-[300px] mt-16" />
          {/* <div className="bg-gradient-to-r from-greenF to-greenT bg-clip-text p-2 text-2xl font-medium text-transparent">
            {t("subTitle")}
          </div> */}
        </div>
        <div className="relative flex h-1/2 justify-center py-6">
          {/* <div className="absolute -left-2 -top-[16px]">
            <img src={Vector.src} alt="" width="30" height="50" />
          </div>
          <div className="absolute -top-[16px] left-44">
            <img src={Vector.src} alt="" width="30" height="50" />
          </div>
          <div className="absolute -bottom-[16px] right-24">
            <img src={Vector.src} alt="" width="30" height="50" />
          </div> */}
          <div className="flex w-full flex-col items-start justify-between gap-2 overflow-x-hidden px-2">
            <div className="text-base font-normal sm:text-lg z-10">
              {t("content")}
            </div>
            <div className="flex w-full items-start justify-between gap-2">
              <div className="flex h-5/6 flex-col gap-6">
                <LinearButton buttonClass="w-[250px]" color="white" href="https://bit.ly/Register_TBH2024">
                  {t("joinL")}
                </LinearButton>
                <LinearButton buttonClass="w-[250px]" color="white" href="https://app.moongate.id/e/tbh2024">
                  {t("joinR")}
                </LinearButton>
              </div>
              <div className="absolute transition-all top-32 left-60">
                <div className="absolute w-[160px] h-[160px] border-[#FF3366] border-[40px] rounded-full"/>
              </div>
              {/* <img src={dotT.src} alt="" width="50" height="50" /> */}
            </div>
          </div>
        </div>
      </Flex>
    </>
  );
}
