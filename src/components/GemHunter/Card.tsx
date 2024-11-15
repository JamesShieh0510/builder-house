import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDisclosure } from "@chakra-ui/react";
import InputHunter from "../InputModal/InputHunter";

export default function HunterCard(props: {
  title: string;
  prize: string;
  pic: any;
  data: any;
  mr: string;
}) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [data, setData] = useState({
    title: "",
    prize: "",
    illustrate: "",
    content: "",
    source: "",
  });
  useEffect(() => {
    setData(props.data);
  }, [props.data]);
  //mx-2
  return (
    <div
      className="h-full rounded-xl bg-primary p-[2px] transition-all"
      onClick={onOpen}
    >
      <div
        className={`flex h-full w-full items-center gap-6 rounded-xl bg-white p-4 md:gap-2`}
      >
        <Image
          src={props.pic?.pic}
          width={props.pic?.w}
          height="60"
          alt="avatar"
          className={`mx-${props.mr}`}
        />
        <div className="flex flex-col text-black">
          <div className="text-lg">{props.title}</div>
          <div className="text-md font-normal">{props.prize}</div>
        </div>
      </div>
      <InputHunter isOpen={isOpen} onClose={onClose} data={data} />
    </div>
  );
}
