import React from "react";
import { Box } from "@chakra-ui/react";

export default function ProfileCard(props: {
  avatar: string;
  name?: string;
  company?: string;
  twitter?: string;
  discord?: string;
  telegram?: string;
}) {
  const openLink = (link: string | undefined) => {
    window.open(link, "_blank");
  };

  return (
    <div className="h-auto w-[150px] md:w-[200px] bg-white transition-all m-4 flex flex-col items-center"> 
      {/* 縮小圖片 */}
      <Box
        className="h-[120px] md:h-[160px] w-[120px] md:w-[160px] mb-4"
        bgImg={props.avatar}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
      />
      {/* 文字部分 */}
      <div className="text-center text-lg w-full">
        <div className="text-primary font-semibold">{props.name}</div>
        <div className="whitespace-pre-wrap text-sm font-medium text-[#949494] mt-1">
          {props.company}
        </div>
      </div>
    </div>
  );
}