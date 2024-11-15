import React, { useEffect, useState } from "react";
import sideBgT from "@/assets/sideBgT.svg";
import Section from "../Section/Section";
import HunterCard from "./Card";
import sideBgTM from "@/assets/sideBgTM.svg";
import totalPrize from "@/assets/totalPrize.svg";
import { useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useInView, animated } from "@react-spring/web";
import InputHunter from "../InputModal/InputHunter";
import InputModal from "../InputModal/InputModal";

const Odometer = dynamic(import("react-odometerjs"), {
  ssr: false,
  loading: () => null,
});

export default function GemHunter(props: { data: any }) {
  const { data } = props;
  const [ref, inView] = useInView();
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [value, setValue] = useState<number>(0);
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    if (inView) {
      const timeoutId = setTimeout(() => setValue(data.totalPrize), 100);
      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      setValue(0);
    }
  }, [data.totalPrize, inView]);

  return (
    <>
      <div className="flex w-full bg-white flex-row items-center justify-center py-12 gap-10 px-5 lg:pt-32 lg:px-32">
        <div className="flex-1">
          <div className="text-[2rem] uppercase text-primary">Total Prize</div>
          <div className="h-32 w-4/5 rounded-2xl bg-white transition-all">
            <div className="relative flex h-full w-full items-center justify-start gap-6 rounded-2xl bg-white md:gap-2">
              <animated.div
                className="flex items-center gap-4 text-[3rem] md:text-[6rem]"
                ref={ref}
              >
                <div className="bg-black bg-clip-text text-transparent">
                  $
                </div>
                <Odometer
                  value={value}
                  format=",ddd"
                  animation="count"
                  theme="minimal"
                  className="text-black"
                />
              </animated.div>
              <button
                className="absolute bottom-1 right-4 text-xl uppercase underline hover:text-text"
                onClick={() => onOpen()}
              >
                Detail
              </button>
              <InputModal
                isOpen={isOpen}
                onClose={onClose}
                data={data.detail}
              />
            </div>
          </div>
        </div>
        <div className="hidden flex-1 md:flex">
          <img src={totalPrize.src} alt="prize" className="w-7/8" />
        </div>
      </div>
      <Section
        title={{ title: data.title.name, color: data.title.color }}
        subTitle={data.subTitle}
        id={data.id}
      >
        <div className="grid w-full grid-cols-1 gap-5 px-4 md:grid-cols-3 xl:grid-cols-5">
          {data?.data.map((item: any, idx: any) => (
            <HunterCard
              key={idx}
              title={item.title}
              prize={item.prize}
              pic={{ pic: item.pic, w: item?.w ? item?.w : "50" }}
              data={item.data}
              mr={item?.w ? "2" : ""}
            />
          ))}
        </div>
      </Section>

      {/* <img
        src={isMobile ? sideBgTM.src : sideBgT.src}
        alt="TimeLine"
        className="w-full"
      /> */}
    </>
  );
}
