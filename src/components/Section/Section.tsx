import React from "react";

export default function Section(props: {
  children: React.ReactNode;
  title: { title: string; color: "red" | "green" | "blue" };
  subTitle: string;
  id?: string;
}) {
  const containerStyle =
    props.id === "Judges"
      ? "flex h-full w-full flex-col lg:flex-row items-start gap-16 border-primary bg-white px-5 py-28 transition-all duration-300 lg:px-32 lg:py-32"
      : "flex h-full w-full flex-col items-start gap-16 border-primary bg-white px-5 py-28 transition-all duration-300 lg:px-32 lg:py-32";

  const titleStyle =
    props.id === "Judges"
      ? "bg-primary bg-clip-text text-[4rem] lg:text-[2rem] xl:text-[4rem] font-bold uppercase text-transparent"
      : "bg-primary bg-clip-text text-[4rem] font-bold uppercase text-transparent";

  return (
    <div className={containerStyle} id={props.id}>
      <div className="z-10 flex flex-col items-start justify-start lg:items-start lg:justify-between">
        <div className="flex flex-col gap-6 lg:items-center lg:justify-center lg:gap-10">
          <div className={titleStyle}>{props.title.title}</div>
          <div className="pl-2 text-center text-4xl font-extrabold">
            {props.subTitle}
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
}
