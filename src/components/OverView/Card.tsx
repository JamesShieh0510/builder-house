import { useDisclosure } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import React from "react";
import InputModal from "../InputModal/InputModal";
import LinearButton from "../LinearButton/LinearButton";

//border-green
//border-blue
//border-yellow
//shadow-green
//shadow-blue
//shadow-yellow

export default function ViewCard(props: {
  title: string;
  content: string;
  color: "green" | "blue" | "red";
  data: any;
}) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { t } = useTranslation("overView");

  return (
    <div className={`h-full bg-primary pb-[2px] transition-all z-10`}>
      <div className="flex h-full w-full flex-col gap-14 border-2 border-primary bg-white p-5 shadow-greenLi xl:p-10">
        <div
          className={`bg-primary bg-clip-text text-3xl font-bold text-transparent`}
        >
          {props.title}
        </div>

        <div className="flex-1 whitespace-pre-wrap text-black">
          {props.content}
        </div>
        <div className="">
          <LinearButton color={props?.color} onClick={onOpen}>
            {t("detail")}
          </LinearButton>
        </div>
      </div>
      {/* TODO: popup */}
      {/* <InputModal isOpen={isOpen} onClose={onClose} data={props?.data} /> */}
    </div>
  );
}
