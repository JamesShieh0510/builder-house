import { Image } from "@chakra-ui/react";
import React from "react";
import Section from "../Section/Section";
import ProfileCard from "./ProfileCard";

export default function Judges(props: { data: any }) {
  const { data } = props;
  return (
    <Section
      title={{ title: data.title.name, color: data.title.color }}
      subTitle={data.subTitle}
      id={data.id}
    >
      <div className="relative left-[-280px] top-[400px]">
        <div className="absolute h-[200px] w-[200px] rounded-full border-[40px] border-[#EAFF6E] lg:top-0 lg:h-[380px] lg:w-[380px] lg:border-[60px]"></div>
      </div>
      <div className="grid w-full grid-cols-2 gap-5 px-4 md:grid-cols-3 xl:grid-cols-4 lg:px-0 z-10">
        {/* <div className="flex w-full flex-col justify-center gap-5 px-0 lg:flex-row"> */}
        {data.data.map((item: any, idx: any) => (
          <ProfileCard
            avatar={item.avatar}
            name={item.name}
            company={item.company}
            linkin={item.linkin}
            key={idx}
          />
        ))}
      </div>
    </Section>
  );
}
