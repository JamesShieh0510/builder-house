import React from "react";
import title from "@/assets/FAQ.svg";
import style from "@/assets/PartnersStyle.svg";
import Mask from "@/assets/Mask.svg";
import { Box } from "@chakra-ui/react";
import Footer from "@/components/Footer/Footer";

export default function FAQ(props: { data: any }) {
  const { data } = props;
  return (
    <>
      <Box
        className="flex flex-col items-center justify-between gap-32 bg-white"
        id="FAQ"
      >
        <div className="flex w-full flex-col items-center justify-center gap-16 px-6 pt-28 text-black lg:px-0 lg:pb-14">
          <div className="z-10 flex flex-col items-start justify-start lg:items-start lg:justify-between">
            <div className="flex flex-col gap-6 lg:items-center lg:justify-center lg:gap-10">
              <div className="bg-primary bg-clip-text text-[4rem] font-bold uppercase text-transparent">
                FAQ
              </div>
              {/* <div className="pl-2 text-center text-4xl font-extrabold">
              {props.subTitle}
            </div> */}
            </div>
          </div>
          <div className="flex w-full flex-col gap-24 px-10 lg:flex-row">
            <div className="flex w-full justify-end lg:w-1/2">
              <div className="flex flex-col gap-2 lg:w-1/2">
                <div className="text-4xl">General</div>
                {data.general.map((item: any, idx: any) => (
                  <div className="flex flex-col gap-6" key={idx}>
                    <div className="text-base">{item.q}</div>
                    <div className="font-normal">{item.a}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-start lg:w-1/2">
              <div className="flex flex-col gap-2 lg:w-1/2">
                <div className="text-4xl">Event</div>
                {data.event.map((item: any, idx: any) => (
                  <div className="flex flex-col gap-6" key={idx}>
                    <div className="text-base">{item.q}</div>
                    <div className="font-normal">{item.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Box>
    </>
  );
}
