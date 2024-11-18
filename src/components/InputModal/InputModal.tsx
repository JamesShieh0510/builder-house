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

export default function InputModal(props: {
  data: any;
  isOpen: boolean;
  onClose: any;
}) {
  const { isOpen, onClose, data } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "xs", md: "xl", lg: "3xl", xl: "6xl" }}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        className="whitespace-pre-wrap rounded-sm p-[2px] transition-all"
        style={{
          border: "2px solid #FFC0CB", // 粉紅色邊框
          backgroundColor: "#FFFFFF", // 白色背景
        }}
      >
        <div className="flex max-h-[90vh] w-full flex-col overflow-auto rounded-sm bg-white p-5 xl:p-10">
          <ModalHeader className="flex justify-center text-center text-2xl text-black">
            {data?.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className="flex flex-col gap-5 px-2 text-center text-black">
            <p className="font-medium">{data?.prize}</p>
            <p className="text-left font-normal">{data?.illustrate}</p>
            {data?.content ? (
              <div
                className="my-6 rounded-xl p-[1px] transition-all"
                style={{
                  border: "1px solid #FFC0CB", // 粉紅色邊框
                  backgroundColor: "#FFFFFF", // 白色背景
                }}
              >
                <div className="flex h-full w-full flex-col rounded-xl px-10 py-6">
                  {data?.content?.map((item: any, idx: any) => (
                    <React.Fragment key={idx}>
                      <div className="text-left text-lg">{item.title}</div>
                      <UnorderedList spacing={3} my="4">
                        {item.detail.map((item: any, idx: any) => (
                          <ListItem
                            key={idx}
                            className="text-left text-sm font-normal"
                          >
                            {item}
                          </ListItem>
                        ))}
                      </UnorderedList>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className="my-6 rounded-xl p-[1px] transition-all"
                style={{
                  border: "1px solid #FFC0CB", // 粉紅色邊框
                  backgroundColor: "#FFFFFF", // 白色背景
                }}
              >
                <div className="flex h-full w-full flex-col rounded-xl px-10 py-6">
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