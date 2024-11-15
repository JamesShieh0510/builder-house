import React from "react";
import SvgIcon from "@/components/SvgIcon/SvgIcon";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

export default function ProfileCard(props: {
  avatar: string;
  name?: string;
  company?: string;
  twitter?: string;
  discord?: string;
  telegram?: string;
  linkin?: string;
}) {
  const openLink = (link: string | undefined) => {
    window.open(link, "_blank");
  };
  return (
    <div className="h-full w-[150px] md:w-[200px] bg-white transition-all">
      <div className="flex h-full w-[150px] md:w-[200px] flex-col items-center bg-white">
        <Box
          className="h-[150px] md:h-[200px] w-[150px] md:w-[200px]"
          bgImg={props.avatar}
          bgSize="cover"
          bgRepeat="no-repeat"
          bgPosition="center"
        />
        <div className="text-start text-lg my-2 w-full text-primary">
          {props.name}
          <div className="whitespace-pre-wrap text-sm font-medium text-[#949494]">
            {props.company}
          </div>
        </div>
        <div className="flex w-full justify-start gap-6">
          <div
            className="cursor-pointer rounded-full transition-all hover:bg-white/20"
            onClick={
              props.linkin
                ? () => {
                    openLink(props?.linkin);
                  }
                : () => {}
            }
          >
            <SvgIcon
              width={30}
              height={30}
              iconName="icon-link"
              className="fill-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
