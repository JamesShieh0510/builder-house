import React from "react";
import { Box } from "@chakra-ui/react";
import Logo from "@/assets/Logo.svg";
import Link from "next/link";
import Image from "next/image";
import LinearButton from "../LinearButton/LinearButton";

export default function Desktop(props: any) {
  const { goPage, locale } = props;
  const changeToEn = locale === "en" ? "tw" : "en";

  const buttonStyle =
    "text-sm text-primary w-16 xl:w-20 xl:text-md flex items-center justify-center hover:opacity-80 uppercase";

  const handleSignUpClick = () => {
    window.location.href = "https://app.moongate.id/e/tbh2024";
  };

  return (
    <>
      <Box className="main w-full" display={{ base: "none", lg: "block" }}>
        <header className="header flex items-center justify-between">
          <div className="w-[100px] cursor-pointer" onClick={() => goPage("/")}>
            <Image src={Logo.src} alt="logo" width="250" height="60" />
          </div>
          <div className="nav flex h-16 items-center justify-center gap-2 rounded-full bg-white px-6 xl:gap-4">
            <div className="flex gap-2 px-2 xl:gap-4">
              <Link href="/" passHref>
                <div className={buttonStyle}>HOME</div>
              </Link>
              <Link href="/#speakers" passHref>
                <div className={buttonStyle}>SPEAKERS</div>
              </Link>
              <Link href="/Agenda" passHref>
                <div className={buttonStyle}>AGENDA</div>
              </Link>
              <Link href="/Workshop" passHref>
                <div className={buttonStyle}>WORKSHOP</div>
              </Link>

              <Link href="/Events" passHref>
                <div className={buttonStyle}>EVENTS</div>
              </Link>
              <Link href="/CityGuide" passHref>
                <div className={buttonStyle}>CITYGUIDE</div>
              </Link>
              <Link href="/FAQ" passHref>
                <div className={buttonStyle}>FAQ</div>
              </Link>
            </div>
            <div className="flex gap-6">
              <div
                className="flex h-12 w-[120px] items-center justify-center rounded-3xl bg-primary text-white transition-all xl:w-[120px] 2xl:w-[120px] cursor-pointer"
                onClick={handleSignUpClick}
              >
                {locale === "en" ? "Sign Up" : "報名"}
              </div>
              {/* <div className="h-12 w-[1px] bg-gradient-to-r from-greenF to-greenT" /> */}
              <div>
                <div className="h-full w-[85px] rounded-full bg-primary p-[2px] transition-all">
                  <Link href={"/"} locale={changeToEn}>
                    <button className="relative flex h-full w-full items-center justify-between rounded-full bg-white px-4 text-base font-medium leading-normal text-text">
                      <div
                        className={`${
                          locale === "en" ? "text-primary" : "text-white"
                        } z-20`}
                      >
                        中
                      </div>
                      <div
                        className={`${
                          locale !== "en" ? "text-primary" : "text-white"
                        } z-20`}
                      >
                        EN
                      </div>
                      <div
                        className={`absolute left-[6px] top-[4px] h-[36px] w-[36px] rounded-full bg-primary transition-all ${
                          locale === "en" ? "translate-x-8" : ""
                        }`}
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Box>
    </>
  );
}
