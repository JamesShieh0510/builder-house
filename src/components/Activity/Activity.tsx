import React from "react";
import Section from "../Section/Section";
import TaskCard from "./Card";

export default function Activity(props: { data: any }) {
  const { data } = props;
  return (
    <Section
      title={{ title: data.title.name, color: data.title.color }}
      subTitle={data.subTitle}
      id={data.id}
    >
      <div className="absolute right-[20px] lg:right-[20px]">
        <div className="relative top-[0px] md:top-[-40px] h-[100px] w-[100px] rounded-full border-[20px] border-purple1 lg:top-0 lg:h-[160px] lg:w-[160px] lg:border-[40px]"></div>
      </div>
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        {data.data.map((item: any, index: number) => (
          <TaskCard
            title={item.title}
            color={item.color}
            content={item.content}
            date={item.date}
            detail={item.detail}
            link={item.link}
            key={index}
          />
        ))}
      </div>
    </Section>
  );
}
