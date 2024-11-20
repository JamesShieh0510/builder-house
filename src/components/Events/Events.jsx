import React, { useRef } from "react";
import Section from "../Section/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { CircularProgress, useBreakpointValue } from "@chakra-ui/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Events(props) {
  const [loading, setLoading] = React.useState(false);
  const [expend, setExpend] = React.useState(false);
  const { data } = props;
  const swiperRef = useRef(null);
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const openExternalLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Section
      title={{ title: data.title.name, color: data.title.color }}
      subTitle={data.subTitle}
      id={data.id}
    >
      <div className="relative h-full w-full pt-10 text-black">
        {!expend && (
          <div className="absolute right-10 top-0 z-30 flex w-full justify-end gap-6 lg:right-0">
            <div onClick={() => swiperRef.current.slidePrev()}>
              <BsArrowLeft />
            </div>
            <div onClick={() => swiperRef.current.slideNext()}>
              <BsArrowRight />
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex h-36 w-full justify-center ">
            <CircularProgress isIndeterminate size="100%" thickness="4px" />
          </div>
        ) : expend ? (
          <div className="grid grid-cols-1 gap-x-[70px] gap-y-12 lg:grid-cols-3  ">
            {data.data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex h-full w-full cursor-pointer flex-col items-center justify-start px-10 lg:px-0"
                  onClick={
                    item.link !== ""
                      ? () => openExternalLink(item.link)
                      : () => {}
                  }
                >
                  <img src={item.pic} alt="event" width="1000" />
                  <div className="mt-4 flex w-full flex-col gap-2 text-left">
                    <div className="text-xs text-text">{item.date}</div>
                    <div className="text-lg font-bold">{item.title}</div>
                    <div className="text-text">{item.content}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <Swiper
            className="h-full"
            slidesPerView={isMobile ? 1 : 3}
            spaceBetween={70}
            modules={[Pagination, Autoplay, Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {data.data.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className="flex h-full w-full cursor-pointer flex-col items-center justify-start px-10 lg:px-0"
                    onClick={
                      item.link !== ""
                        ? () => openExternalLink(item.link)
                        : () => {}
                    }
                  >
                    <img src={item.pic} alt="event" width="1000" />
                    <div className="mt-4 flex w-full flex-col gap-2 text-left">
                      <div className="text-xs text-text">{item.date}</div>
                      <div className="text-lg font-bold">{item.title}</div>
                      <div className="text-text">{item.content}</div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
        <div className="flex w-full justify-end pt-10">
          {expend ? (
            <SlArrowUp
              size="25"
              className="cursor-pointer"
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setExpend(!expend);
                  setLoading(false);
                }, 500);
              }}
            />
          ) : (
            <div
              className="flex cursor-pointer items-center gap-3 rounded-full border text-base text-white bg-primary h-12 w-44 justify-center"
              onClick={() => {
                openExternalLink(
                  ""
                );
              }}
            >
              <a>FULL EVENT</a>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
