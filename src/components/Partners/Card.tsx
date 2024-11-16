import Image from "next/image";
import React from "react";

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

  const isCommunityPartner = props.type === "Community Partner";

  return (
    <div className="flex w-4/5 flex-col items-start justify-center gap-8 rounded-[2rem] bg-white py-12">
      <div className="text-[2rem] font-bold text-primary">{props.type}</div>
      {isCommunityPartner ? (
        <>
          <div className="grid grid-cols-2 gap-10">
            {props.logo.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="z-50 flex w-full items-center justify-center shadow-2xl rounded-2xl h-[120px] p-3"
              >
                <picture>
                  <img
                    alt="logo"
                    src={item.pic}
                    className="object-contain h-[120px] w-[280px]"
                    onClick={item.link ? () => openLink(item.link) : undefined}
                  />
                </picture>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-10">
            {props.logo.slice(2).map((item, index) => (
              <div
                key={index}
                className="z-50 flex w-full items-center justify-center shadow-2xl rounded-2xl h-[120px] p-3"
              >
                <picture>
                  <img
                    alt="logo"
                    src={item.pic}
                    className="object-contain h-[120px] w-[280px]"
                    onClick={item.link ? () => openLink(item.link) : undefined}
                  />
                </picture>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-10`}>
          {props.logo.map((item, index) => (
            <div
              key={index}
              className="z-50 flex w-full items-center justify-center shadow-2xl rounded-2xl h-[120px] p-3"
            >
              <picture>
                <img
                  alt="logo"
                  src={item.pic}
                  className="object-contain h-[120px] w-[280px]"
                  onClick={item.link ? () => openLink(item.link) : undefined}
                />
              </picture>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}