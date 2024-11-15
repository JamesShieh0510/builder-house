import React from "react";
import Section from "../Section/Section";
import { LuClock3 } from "react-icons/lu";
import { useBreakpointValue } from "@chakra-ui/react";

export default function Agenda(props: { data: any }) {
  const { data } = props;
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Section
      title={{ title: data.title.name, color: data.title.color }}
      subTitle={data.subTitle}
      id={data.id}
    >
      <div className="flex w-full flex-col text-black">
        {/* <div className="h-full w-full bg-gradient-to-r from-blueF to-blueT pb-[2px] transition-all">
          <div className="flex w-full bg-white pb-6 text-lg lg:text-2xl">
            <div className="w-1/5">
              <div className="text-center">TIME</div>
            </div>
            <div className="w-2/5">
              <div className="text-center">TOPIC</div>
            </div>
            <div className="w-2/5">
              <div className="text-center">SPEAKER</div>
            </div>
          </div>
        </div> */}
        {data.data?.map((data: any, index: any) => (
          <div className="flex flex-col w-full border-b border-primary py-6" key={index}>
            <div className="flex justify-start text-primary">
              <div className="flex items-center justify-center gap-4 text-base font-normal lg:text-base">
                {!isMobile && <LuClock3 />}
                {data.time}
              </div>
            </div>
            <div className="flex items-center justify-start">
              <div className="text-start text-base font-semibold lg:text-xl">
                {data.topic}
              </div>
            </div>
            <div className="flex flex-col justify-start">
              {data.subTitle &&
                data.subTitle.map((sub: any, index: any) => (
                  <div
                    className="whitespace-pre-wrap text-start text-sm font-semibold text-gray1 lg:text-base"
                    key={index}
                  >
                    {sub}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
