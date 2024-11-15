import { Divider } from "@chakra-ui/react";
import React from "react";
import LinearButton from "../LinearButton/LinearButton";
//border-green
//border-blue
//border-red
export default function TaskCard(props: {
  name: string;
  content: string;
  date: string;
  color: "green" | "blue" | "red";
}) {
  return (
    <div className="mb-6">
      <div className="flex flex-col items-end gap-5 lg:flex-row lg:gap-0">
        <div className="flex w-full flex-col">
          <div
            className={`flex flex-col gap-3 border-l-8 border-${props.color} mb-5 py-2 pl-4`}
          >
            <div className="text-5xl">{props.name}</div>
            <div className="text-2xl">{props.date}</div>
          </div>
          <div className="whitespace-pre-wrap px-6 text-lg font-normal lg:pl-6">
            {props.content}
          </div>
        </div>
        <div className="flex w-full justify-center px-6 lg:w-1/3 lg:justify-end lg:pl-0">
          <div
            className={`h-12 w-full bg-gradient-to-r lg:w-52 from-${props?.color}F to-${props?.color}T p-[3px] transition-all`}
          >
            <button
              className={`flex h-full w-full items-center justify-center bg-bg text-base font-medium text-text`}
            >
              詳情
            </button>
          </div>
        </div>
      </div>
      <Divider py="3" />
    </div>
  );
}
