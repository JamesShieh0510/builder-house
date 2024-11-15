import React from "react";
// import Image from 'next/dist/client/image';
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Desktop from "./HeaderDesktop";
import Mobile from "./HeaderMobile";

export default function Header() {
  const router = useRouter();
  const locale = router.locale;
  const goPage = (page: string) => {
    router.push(page);
  };
  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        px={{ base: "2rem", xl: "4rem", "2xl": "8rem" }}
        overflow="hidden"
        className="fixed z-[100] h-16 md:h-24 w-full text-text transition-all backdrop-blur"
      >
        <Desktop goPage={goPage} locale={locale} />
        <Mobile goPage={goPage} locale={locale} />
      </Flex>
    </>
  );
}
