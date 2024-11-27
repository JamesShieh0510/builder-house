import Image from "next/image";
import React from "react";

export default function PartnersM(props: {
  logo: { pic: string; w: any; link: string }[];
  type: string;
}) {
  const isSingleColumn =
    props.type === "HOST" || props.type === "CO-HOST" || props.type === "Strategic Partner";

  return (
    <div className="flex w-full flex-col items-center justify-center gap-12 rounded-[2rem] px-12 py-16">
      <div className="bg-primary bg-clip-text text-center text-2xl font-bold uppercase text-transparent">
        {props.type}
      </div>
      <div
        className={`grid ${
          isSingleColumn ? "grid-cols-1" : "grid-cols-2"
        } gap-10 w-full`}
      >
        {props.logo.map((item: any, idx: any) => (
          <div className="flex w-full items-center justify-center" key={idx}>
            <Image
              src={item.pic}
              width={item.w ? item.w : "250"}
              height="200"
              alt="avatar"
              onClick={() => window.open(item.link, "_blank")}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}