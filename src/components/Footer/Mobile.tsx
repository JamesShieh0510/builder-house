import React from "react";
import Logo from "@/assets/LogoBlack.svg";
import Link from "next/link";
import Image from "next/image";
import SvgIcon from "../SvgIcon/SvgIcon";
import City from "@/assets/city.svg";
import City2 from "@/assets/city2.svg";
import Marquee from "react-fast-marquee";

export default function FooterMobile(props: any) {
  const { goPage } = props;
  const buttonStyle = "hover:opacity-80 text-white font-medium p-2 uppercase";
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <footer className="flex w-full flex-col items-start border-t-[1px] border-white bg-primary lg:hidden">
      <div className="relative flex h-[200px] w-full flex-col items-center justify-end bg-gradient-to-b from-white from-20% via-[#F77968] via-70% to-[#FF3366] to-100%">
        <img src={City.src} alt="" className="z-20 w-[1280px]" />
        <img src={City2.src} alt="" className="absolute z-20 w-[1280px]" />
      </div>
      <Marquee className="mb-6 w-full border-b-2 border-t-2 bg-primary text-2xl">
        <div className="mx-2">TAIWAN BUILDER HOUSE</div>
        <div className="text-stroke mx-2 leading-6">THE BLOCK</div>
        <div className="mx-2">TAIWAN BUILDER HOUSE</div>
        <div className="text-stroke mx-2 leading-6">THE BLOCK</div>
        <div className="mx-2">TAIWAN BUILDER HOUSE</div>
        <div className="text-stroke mx-2 leading-6">THE BLOCK</div>
        <div className="mx-2">TAIWAN BUILDER HOUSE</div>
        <div className="text-stroke mx-2 leading-6">THE BLOCK</div>
        <div className="mx-2">TAIWAN BUILDER HOUSE</div>
        <div className="text-stroke mx-2 leading-6">THE BLOCK</div>
      </Marquee>
      <div className="flex flex-col gap-8 px-8 py-10">
        <div className="cursor-pointer" onClick={() => goPage("/")}>
          <Image src={Logo.src} alt="logo" width="250" height="100" />
        </div>
        <div className="-ml-3 flex justify-start">
          <div
            className="cursor-pointer rounded-full p-3 transition-all hover:bg-white/20"
            onClick={() => openLink("https://bit.ly/TBH_twitter")}
          >
            <SvgIcon width={30} height={30} iconName="icon-twitter" />
          </div>
          <div
            className="cursor-pointer rounded-full p-3 transition-all hover:bg-white/20"
            onClick={() => openLink("https://bit.ly/3MRkvxF")}
          >
            <SvgIcon width={30} height={30} iconName="icon-telegram" />
          </div>
          {/* <div className="flex flex-col gap-2 pl-14 text-sm text-black underline underline-offset-2">
          <a
            onClick={() => goPage("/privacy")}
            className="cursor-pointer hover:opacity-80"
          >
            Privacy Policy
          </a>
          <a
            onClick={() => goPage("/terms")}
            className="cursor-pointer hover:opacity-80"
          >
            Term & Condition
          </a>
        </div> */}
        </div>
        <div className="-ml-1 grid grid-cols-2 gap-x-10 gap-y-5 text-base font-medium">
        <Link href="/" passHref>
                  <div className={buttonStyle}>HOME</div>
                </Link>
                <Link href="#speakers" passHref>
                  <div className={buttonStyle}>SPEAKERS</div>
                </Link>
                <Link href="#speakers" passHref>
                  <div className={buttonStyle}>SPEAKERS</div>
                </Link>
                <Link href="/Agenda" passHref>
                 <div className={buttonStyle}>AGENDA</div>
                </Link>
                <Link href="/CityGuide" passHref>
                 <div className={buttonStyle}>CITYGUIDE</div>
                </Link>
                <Link href="/FAQ" passHref>
                 <div className={buttonStyle}>FAQ</div>
                </Link>
        </div>
        <div className="font-medium text-white">© TAIWAN BUILDER HOUSE.<br></br> 主辦單位：卡米客動漫有限公司</div>
      </div>
    </footer>
  );
}
