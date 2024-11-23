import React, { useState } from "react";
import Section from "../Section/Section";
import { LuClock3 } from "react-icons/lu";
import { useBreakpointValue } from "@chakra-ui/react";

export default function Agenda(props: { data: any }) {
  const { data } = props;
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const [currentDay, setCurrentDay] = useState<"Day1" | "Day2">("Day1"); // 默認顯示 Day1

  return (
    <Section
      title={{ title: data.title.name, color: data.title.color }}
      subTitle={data.subTitle}
      id={data.id}
    >
      <div className="flex mb-4 gap-4">
        <button
          className={`px-6 py-2 font-semibold rounded border-2 ${
            currentDay === "Day1"
              ? "bg-pink-500 text-white border-pink-500"
              : "bg-gray-200 text-gray-800 border-gray-400"
          }`}
          onClick={() => setCurrentDay("Day1")}
        >
          Day 1
        </button>
        <button
          className={`px-6 py-2 font-semibold rounded border-2 ${
            currentDay === "Day2"
              ? "bg-pink-500 text-white border-pink-500"
              : "bg-gray-200 text-gray-800 border-gray-400"
          }`}
          onClick={() => setCurrentDay("Day2")}
        >
          Day 2
        </button>
      </div>
      <div className="flex w-full flex-col text-black">
        {data.data[currentDay]?.map((item: any, index: any) => (
          <div
            className="flex flex-col w-full border-b border-primary py-6"
            key={index}
          >
            <div className="flex justify-start text-primary">
              <div className="flex items-center justify-center gap-4 text-lg font-bold lg:text-xl">
                {!isMobile && <LuClock3 />}
                {item.time}
              </div>
            </div>
            <div className="flex items-center justify-start">
              <div className="text-start text-xl font-bold lg:text-2xl">
                {item.topic}
              </div>
            </div>
            <div className="flex flex-col justify-start">
              {item.subTitle &&
                item.subTitle.map((sub: any, idx: number) => (
                  <div
                    className="whitespace-pre-wrap text-start text-sm font-semibold text-gray1 lg:text-base"
                    key={idx}
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