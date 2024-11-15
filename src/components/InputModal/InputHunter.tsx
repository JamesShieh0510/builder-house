import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import SvgIcon from "../SvgIcon/SvgIcon";
import ClientOnly from "../clientOnly";

export default function InputHunter(props: {
  data: any;
  isOpen: boolean;
  onClose: any;
}) {
  const { isOpen, onClose, data } = props;
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "xs", md: "xl", lg: "3xl", xl: "6xl" }}
      isCentered
    >
      <ModalOverlay />
      <ModalContent className="overflow-hidden whitespace-pre-wrap rounded-sm bg-rainbow p-[1px] transition-all">
        <div className="flex max-h-[90vh] w-full flex-col overflow-auto rounded-sm bg-bg p-5 shadow-greenLi xl:p-10">
          <ModalHeader className="flex justify-center text-center text-2xl">
            {data?.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className="flex flex-col gap-6 text-center">
            <div className="flex w-full justify-center gap-6">
              {data?.linkArr?.map((item: any, index: any) => {
                return (
                  <div
                    key={index}
                    className={`${
                      item.link
                        ? "cursor-pointer fill-icon"
                        : "pointer-events-none fill-icon/30"
                    } rounded-full p-2 transition-all`}
                    onClick={item.link ? () => openLink(item.link) : () => {}}
                  >
                    <SvgIcon width={30} height={30} iconName={item.icon} />
                  </div>
                );
              })}
            </div>
            <p className="text-left font-normal">{data?.illustrate}</p>
            {data?.content ? (
              <div className="my-6 rounded-xl bg-gradient-to-r from-greenF to-greenT p-[1px] transition-all">
                <div className="flex h-full w-full flex-col rounded-xl bg-bg px-10 py-6">
                  {data?.content?.map((item: any, idx: any) => (
                    <React.Fragment key={idx}>
                      <ClientOnly>
                        <div
                          className="text-left text-lg"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        />
                      </ClientOnly>
                      <UnorderedList spacing={3} my="4">
                        {item?.detail?.map((item: any, idx: any) => (
                          <ClientOnly key={idx}>
                            <ListItem
                              className="text-left text-sm font-normal text-text"
                              dangerouslySetInnerHTML={{ __html: item }}
                            />
                          </ClientOnly>
                        ))}
                      </UnorderedList>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ) : (
              <div className="my-6 rounded-xl bg-gradient-to-r from-greenF to-greenT p-[1px] transition-all">
                <div className="flex h-full w-full flex-col rounded-xl bg-bg px-10 py-6">
                  <div className="text-xl">Coming Soon ...</div>
                </div>
              </div>
            )}
            <p className="text-left text-xs">{data?.source}</p>
          </ModalBody>
        </div>
      </ModalContent>
    </Modal>
  );
}
