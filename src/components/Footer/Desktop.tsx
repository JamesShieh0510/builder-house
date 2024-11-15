import React from "react";
import Logo from "@/assets/LogoWhite.svg";
import Link from "next/link";
import Image from "next/image";
import SvgIcon from "../SvgIcon/SvgIcon";
import City from "@/assets/city.svg";
import City2 from "@/assets/city2.svg";
import Marquee from "react-fast-marquee";

export default function DesktopFooter(props: any) {
  const { goPage } = props;
  const buttonStyle = "font-medium hover:opacity-80 text-white p-1 uppercase";
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <footer className="hidden w-full flex-col items-center justify-center border-t-[1px] border-white bg-primary lg:flex">
      <div className="relative flex h-[500px] w-full flex-col items-center justify-end bg-gradient-to-b from-white from-20% via-[#F77968] via-70% to-[#FF3366] to-100%">
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
      <div className="mt-6 flex w-full justify-between px-24">
        <div className="cursor-pointer" onClick={() => goPage("/")}>
          <Image
            src={Logo.src}
            alt="logo"
            width="180"
            height="100"
            className="text-white"
          />
        </div>
        <div className="flex flex-col items-end justify-start text-base">
          <div className="flex gap-6 pl-6">
            <Link href="/#OverView" passHref>
              <div className={buttonStyle}>OVERVIEW</div>
            </Link>
            <Link href="/#Prizes" passHref>
              <div className={buttonStyle}>PRIZES</div>
            </Link>
            <Link href="/#GemHunter" passHref>
              <div className={buttonStyle}>Hunter</div>
            </Link>
            <Link href="/#Activity" passHref>
              <div className={buttonStyle}>Activity</div>
            </Link>
            <Link href="/#Judges" passHref>
              <div className={buttonStyle}>JUDGES</div>
            </Link>
            <Link href="/#Events" passHref>
              <div className={buttonStyle}>EVENTS</div>
            </Link>
            <Link href="/#Partners" passHref>
              <div className={buttonStyle}>PARTNERS</div>
            </Link>
            <Link href="/#FAQ" passHref>
              <div className={buttonStyle}>FAQ</div>
            </Link>
          </div>
          <div className="-ml-3 flex">
            <div
              className="cursor-pointer rounded-full p-3 transition-all hover:bg-white/20"
              onClick={() => openLink("https://bit.ly/TBH_twitter")}
            >
              <SvgIcon width={20} height={20} iconName="icon-twitter" />
            </div>
            <div
              className="cursor-pointer rounded-full p-3 transition-all hover:bg-white/20"
              onClick={() => openLink("https://bit.ly/3MRkvxF")}
            >
              <SvgIcon width={20} height={20} iconName="icon-telegram" />
            </div>
          </div>
          <div className="mb-12 flex max-w-sm justify-end font-medium text-white">
            © TAIWAN BUILDER HOUSE.
          </div>
        </div>
      </div>
      {/* <div className="flex w-full flex-col items-end justify-end px-24">
        <div className="-ml-3 flex">
          <div
            className="cursor-pointer rounded-full p-3 transition-all hover:bg-white/20"
            onClick={() => openLink("https://bit.ly/TBH_twitter")}
          >
            <SvgIcon width={20} height={20} iconName="icon-twitter" />
          </div>
          <div
            className="cursor-pointer rounded-full p-3 transition-all hover:bg-white/20"
            onClick={() => openLink("https://bit.ly/3MRkvxF")}
          >
            <SvgIcon width={20} height={20} iconName="icon-telegram" />
          </div>
          <div className="flex flex-col gap-2 pl-14 text-sm text-black underline underline-offset-2">
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
          </div>
        </div>
      </div> */}
    </footer>
  );
}
