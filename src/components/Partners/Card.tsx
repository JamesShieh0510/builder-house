import Image from "next/image";
import React, { useEffect } from "react";

//grid-cols-1
//grid-cols-2
//grid-cols-3
//grid-cols-4

export default function PartnersCard(props: {
  logo: { pic: string; w?: any; link: string }[];
  type: string;
  grid?: string;
}) {
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="flex w-4/5 flex-col items-start justify-center gap-8 rounded-[2rem] bg-white py-12">
      <div className="text-[2rem] font-bold text-primary">{props.type}</div>
      {props.grid ? (
        <div className={`grid grid-cols-4 gap-10`}>
          {props.logo.map((item, index) => {
            return (
              <div
                key={index}
                className="z-50 flex w-full border-white items-center justify-center shadow-2xl rounded-2xl h-[120px] p-3"
              >
                <picture>
                  <img
                    alt="logo"
                    src={item.pic}
                    className="object-contain h-[120px] w-[280px]"
                    onClick={item.link ? () => openLink(item.link) : () => {}}
                  />
                </picture>
              </div>
            );
          })}
        </div>
      ) : props.type === "Community Partner" ? (
        <div className="flex flex-col gap-10">
          {/* 前三個元素的映射 */}
          {/* <div className="z-50 flex w-full items-center justify-center shadow-2xl border-white rounded-2xl">
            {props.logo.slice(0, 3).map((item, index) => (
              <div
                className="flex w-full items-center justify-center shadow-2xl rounded-[20px] h-[120px] p-3"
                key={index}
              >
                <picture>
                  <img
                    alt="logo"
                    src={item.pic}
                    className="object-contain h-[120px] w-[280px]"
                    onClick={item.link ? () => openLink(item.link) : () => {}}
                  />
                </picture>
              </div>
            ))}
          </div> */}
          {/* 後面的元素的映射 */}
          <div className={`grid grid-cols-4 gap-10`}>
            {props.logo.map((item, index) => (
              <div
                key={index}
                className="other-elements flex w-full items-center justify-center shadow-2xl rounded-[20px] p-3"
              >
                <picture>
                  <img
                    alt="logo"
                    src={item.pic}
                    className="object-contain h-[120px] w-[280px]"
                    onClick={item.link ? () => openLink(item.link) : () => {}}
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="z-50 flex w-full items-center justify-center gap-10">
          {props.logo.map((item, index) => {
            return (
              <div
                key={index}
                className="flex w-full items-center justify-center shadow-2xl rounded-[20px]"
              >
                <Image
                  alt="logo"
                  src={item.pic}
                  width={item.w ? item.w : "280"}
                  height={"280"}
                  onClick={item.link ? () => openLink(item.link) : () => {}}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
