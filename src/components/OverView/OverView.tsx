import React from "react";
import Section from "../Section/Section";
import ViewCard from "./Card";

export default function OverView(props: { data: any }) {
  const { data } = props;
  return (
    <Section
      title={{ title: data.title.name, color: data.title.color }}
      subTitle={data.subTitle}
      id={data.id}
    >
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        {data.data.map((item: any, index: number) => (
          <ViewCard
            title={item.title}
            color={item.color}
            content={item.content}
            data={item.data}
            key={index}
          />
        ))}
      </div>
      <div className="absolute right-[-120px] -translate-x-[120px]">
        <div className="relative top-[430px] w-[280px] h-[430px] overflow-hidden">
         <div className="relative border-lightblue1 w-[430px] h-[430px]  rounded-full border-[80px] bg-transparent"></div>
        </div>
      </div>
    </Section>
  );
}
