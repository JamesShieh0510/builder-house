import Image from "next/image";
import React from "react";

export default function PartnersM(props: {
  logo: { pic: string; w: any }[];
  type: string;
  grid?: string;
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-12 rounded-[2rem] px-12 py-16">
      <div className="bg-primary bg-clip-text text-center text-2xl font-bold uppercase text-transparent">
        {props.type}
      </div>
      {props.logo.map((item: any, idx: any) => (
        <div className="mt-8 flex w-full items-center justify-center" key={idx}>
          <Image
            src={item.pic}
            width={item.w ? item.w : "250"}
            height="200"
            alt="avatar"
          />
        </div>
      ))}
    </div>
  );
}
