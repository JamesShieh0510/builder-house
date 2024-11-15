import React from "react";

export default function SectionOld(props: {
  children: React.ReactNode;
  title: { pic: string; w: string };
  subTitle: string;
  style: { pic: string; w: string };
  id?: string;
}) {
  return (
    <div
      className="flex h-full w-full flex-col items-center gap-16 px-5 py-28 transition-all duration-300 lg:px-32"
      id={props.id}
    >
      <div className="flex w-full flex-row justify-start lg:items-end lg:justify-between">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-center lg:gap-0">
          <img
            src={props.title?.pic}
            alt=""
            width={props.title?.w}
            height="100"
          />
          <div className="pl-2 text-4xl font-extrabold lg:pl-6">
            {props.subTitle}
          </div>
        </div>
        <img
          src={props.style?.pic}
          alt=""
          width={props.style?.w}
          height="100"
          className="hidden lg:block"
        />
      </div>
      {props.children}
    </div>
  );
}
