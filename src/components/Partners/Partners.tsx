import React from "react";
import PartnersCard from "./Card";
import PartnersM from "./MobileCard";

export default function Partners(props: { data: any }) {
  const { data } = props;
  const { host, coHost, strategic, partners, vc, projects, media, community } = data;

  return (
    <>
      <div className="relative bg-white">
        <div className="flex w-full justify-start gap-14 pb-36 pt-36 lg:pt-72 lg:px-32">
          <div className="flex flex-col items-center">
            <div
              className={`bg-primary bg-clip-text text-[4rem] font-bold uppercase text-transparent mx-5 lg:mx-0`}
            >
              {data.title}
            </div>
            <div className="flex text-4xl font-extrabold leading-[64px]">
              {data.subTitle}
            </div>
          </div>
        </div>
      </div>
      <div className="z-50 flex h-full items-center justify-center bg-white">
        {/* Desktop  */}
        <div className="hidden w-full flex-col items-center gap-16 lg:flex ">
          <PartnersCard logo={host} type="HOST" grid="4" />
          <PartnersCard logo={coHost} type="CO-HOST" grid="4" />
          <PartnersCard logo={strategic} type="Strategic Partner" grid="4" />
          <PartnersCard logo={partners} type="Partner" grid="4" />
          <PartnersCard logo={vc} type="VC Partner" grid="4" />
          <PartnersCard logo={projects} type="Project Partner" grid="4" />
          <PartnersCard logo={media} type="Media Partner" grid="4" />
          <PartnersCard logo={community} type="Community Partner" grid="4" />
        </div>

        {/* Mobile */}
        <div className="flex w-full flex-col items-center gap-12 px-6 lg:hidden ">
          <PartnersM logo={host} type="HOST" />
          <PartnersM logo={coHost} type="CO-HOST" />
          <PartnersM logo={strategic} type="Strategic Partner" />
          <PartnersM logo={partners} type="Partner" />
          <PartnersM logo={vc} type="VC Partner" />
          <PartnersM logo={projects} type="Project Partner" />
          <PartnersM logo={media} type="Media Partner" />
          <PartnersM logo={community} type="Community Partner" />
        </div>
      </div>
    </>
  );
}