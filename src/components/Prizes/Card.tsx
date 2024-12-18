import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDisclosure } from "@chakra-ui/react";
import InputModal from "../InputModal/InputModal";

export default function PrizesCard(props: {
  title: string;
  prize: string;
  pic: any;
  data: any;
}) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [data, setData] = useState({
    title: "",
    prize: "",
    illustrate: "",
    content: [],
    source: "",
  });

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return (
    <div
      className="h-full rounded-xl border-2 border-pink-500 bg-white p-2 transition-all"
      onClick={onOpen}
    >
      <div
        className="flex h-full w-full items-center gap-6 rounded-xl bg-white p-4 text-black md:gap-2"
      >
        <Image
          src={props.pic?.pic}
          width={props.pic?.w}
          height="60"
          alt="avatar"
        />
        <div className="flex flex-col">
          <div className="text-lg font-bold">{props.title}</div>
          <div className="text-md font-normal">{props.prize}</div>
        </div>
      </div>
      <InputModal isOpen={isOpen} onClose={onClose} data={data} />
    </div>
  );
}