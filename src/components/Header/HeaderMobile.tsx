import React, { useState } from "react";
import {
  Flex,
  DrawerOverlay,
  DrawerContent,
  Drawer,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
import Logo from "@/assets/Logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Mobile(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { goPage, locale } = props;
  const [hover, setHover] = useState(false);
  const changeToEn = locale === "en" ? "tw" : "en";

  return (
    <>
      <Flex
        display={{ base: "flex", lg: "none" }}
        className="w-full flex-col items-center"
      >
        <div className="flex w-full items-center justify-between">
          <div className="cursor-pointer pl-3" onClick={() => goPage("/")}>
            <Image src={Logo.src} alt="logo" width="72" height="40" />
          </div>
          <Button
            className="bg-primary hover:bg-primary"
            onClick={() => {
              setHover(true);
              onOpen();
            }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            <HamburgerIcon w={6} h={6} color={"white"} />
          </Button>
        </div>
      </Flex>

      <Drawer
        isOpen={isOpen}
        size="xs"
        placement="right"
        onClose={onClose}
        returnFocusOnClose={false}
      >
        <DrawerOverlay />
        <DrawerContent className="flex items-center gap-4 bg-white">
          <Flex
            display={{ base: "flex", lg: "none" }}
            className="divider w-full flex-col items-center px-2 pb-4 pt-5"
          >
            <div className="flex w-full items-center justify-between">
              <div className="cursor-pointer pl-3" onClick={() => goPage("/")}>
                <Image src={Logo.src} alt="logo" width="100" height="40" />
              </div>
              <Button
                className="bg-transparent hover:bg-transparent"
                onClick={() => {
                  setHover(true);
                  onClose();
                }}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
              >
                <SmallCloseIcon w={6} h={6} color="#FF3366" />
              </Button>
            </div>
          </Flex>
          <Link
            href="/"
            passHref
            className="w-full"
            onClick={() => onClose()}
          >
            <div className="flex h-12 items-center pl-6">
              <div className="bg-primary bg-clip-text text-xl font-bold text-transparent">
                HOME
              </div>
              <div
                className={`pl-3 text-base font-black ${
                  locale === "en" ? "hidden" : "flex text-black"
                }`}
              >
                主頁
              </div>
            </div>
          </Link>
          <Link
            href="/Agenda"
            passHref
            className="w-full"
            onClick={() => onClose()}
          >
            <div className="flex h-12 items-center pl-6">
              <div className="bg-primary bg-clip-text text-xl font-bold text-transparent">
                AGENDA
              </div>
              <div
                className={`pl-3 text-base font-black ${
                  locale === "en" ? "hidden" : "flex text-black"
                }`}
              >
                行程表
              </div>
            </div>
          </Link>
          <Link
            href="/Workshop"
            passHref
            className="w-full"
            onClick={() => onClose()}
          >
            
            <div className="flex h-12 items-center pl-6">
              <div className="bg-primary bg-clip-text text-xl font-bold text-transparent">
              SPEAKERS
              </div>
              <div
                className={`pl-3 text-base font-black ${
                  locale === "en" ? "hidden" : "flex text-black"
                }`}
              >
                講者
              </div>
            </div>
          </Link>
          <Link
            href="/#events"
            passHref
            className="w-full"
            onClick={() => onClose()}
          >
            <div className="flex h-12 items-center pl-6">
              <div className="bg-primary bg-clip-text text-xl font-bold uppercase text-transparent">
                EVENTS
              </div>
              <div
                className={`pl-3 text-base font-black ${
                  locale === "en" ? "hidden" : "flex text-black"
                }`}
              >
                近期活動
              </div>
            </div>
          </Link>
          <Link
            href="/CityGuide"
            passHref
            className="w-full"
            onClick={() => onClose()}
          >
            <div className="flex h-12 items-center pl-6">
              <div className="bg-primary bg-clip-text text-xl font-bold text-transparent">
              CITYGUIDE
              </div>
              <div
                className={`pl-3 text-base font-black ${
                  locale === "en" ? "hidden" : "fle text-black"
                }`}
              >
                城市導覽
              </div>
            </div>
          </Link>
          <Link
            href="/FAQ"
            passHref
            className="w-full"
            onClick={() => onClose()}
          >
            <div className="flex h-12 items-center pl-6">
              <div className="bg-primary bg-clip-text text-xl font-bold text-transparent">
                FAQ
              </div>
              <div
                className={`pl-3 text-base font-black ${
                  locale === "en" ? "hidden" : "flex text-black"
                }`}
              >
                相關問題
              </div>
            </div>
          </Link>
          <div className="w-full px-6">
            <div className="h-[1px] w-full bg-primary" />
          </div>
          <div className="flex w-full justify-start pl-6">
            <div className="h-[40px] w-[70px] rounded-full bg-primary p-[2px] transition-all">
              <Link href={"/"} locale={changeToEn}>
                <button className="relative flex h-full w-full items-center justify-between rounded-full bg-white px-[10px] text-base font-medium leading-normal text-text">
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
                    className={`absolute left-[4px] top-[3px] h-[30px] w-[30px] rounded-full bg-primary transition-all ${
                      locale === "en" ? "translate-x-[27px]" : ""
                    }`}
                  />
                </button>
              </Link>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
