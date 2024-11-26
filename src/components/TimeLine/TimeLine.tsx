import React, { useRef } from "react";
import ReactPlayer from "react-player";
// import line from "@/assets/line.svg";
// import lineM from "@/assets/lineM.svg";
// import sideBgT from "@/assets/sideBgT.svg";
// import sideBgTM from "@/assets/sideBgTM.svg";
// import sideBg from "@/assets/sideBg.svg";
// import sideBgM from "@/assets/sideBgM.svg";
import { useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TimeLine(props: { data: any; data2: any }) {
  const { data, data2 } = props;
  const swiperRef = useRef(null) as any;
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isPad = useBreakpointValue({ base: true, lg: false });
  const numberStyle =
    "flex h-[54px] z-20 w-[210px] items-center justify-center rounded-lg bg-white text-2xl font-bold text-primary";
  return (
    <>
    
      <div className="flex h-full w-full flex-col items-start gap-16 border-primary bg-secondary px-5 py-28 transition-all duration-300 lg:px-32 lg:py-32">
        <div className="z-10 flex flex-col items-start justify-start lg:items-start lg:justify-between">
          <div className="flex flex-col gap-6 lg:items-center lg:justify-center lg:gap-10">
            <div className="bg-white bg-clip-text text-[4rem] font-bold uppercase text-transparent">
              Timeline
            </div>
            {/* <div className="pl-2 text-center text-4xl font-extrabold">
              {props.subTitle}
            </div> */}
          </div>
        </div>
        <div className="hidden h-full w-full flex-col items-center justify-center gap-10 whitespace-pre-wrap lg:flex">
          {/* <div className="title flex w-4/5 lg:gap-24 2xl:gap-12">
            <div className="w-1/3 text-2xl">
              {data?.data[0].title}
              <div className="pt-2 text-base text-text">
                {data?.data[0].date}
              </div>
            </div>
            <div className="w-1/3 text-2xl">
              {data?.data[1].title}
              <div className="pt-2 text-base text-text">
                {data?.data[1].date}
              </div>
            </div>
            <div className="w-1/3 text-2xl">
              {data?.data[2].title}
              <div className="pt-2 text-base text-text">
                {data?.data[2].date}
              </div>
            </div>
          </div> */}
          {/* <div className="line relative flex w-4/5 border-2 lg:gap-24 2xl:gap-12">
            <div className="z-10 w-1/3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-greenF to-greenT text-2xl font-bold text-black">
                1
              </div>
            </div>
            <div className="z-10 w-1/3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-greenF to-greenT text-2xl font-bold text-black">
                2
              </div>
            </div>
            <div className="z-10 w-1/3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-greenF to-greenT text-2xl font-bold text-black">
                3
              </div>
            </div>
            <div className="absolute top-1/2 w-full">
              <img src={line.src} width="100%" height="2px" />
            </div>
          </div> */}
          {/* <div className="content flex w-4/5 border-2 border-black text-sm text-text lg:gap-24 2xl:gap-12">
            <div className="w-full">
              <div className=" max-w-xs">{data?.data[0].content}</div>
            </div>
            <div className="w-full">
              <div className=" max-w-xs">{data?.data[1].content}</div>
            </div>
            <div className="w-1/3">
              <div className=" max-w-xs">{data?.data[2].content}</div>
            </div>
          </div> */}
        </div>
        <div className="title relative flex w-full flex-col items-center gap-10 whitespace-pre-wrap">
          {/* <img
            src={lineM.src}
            width="2px"
            className="absolute left-5 z-10 h-full object-cover"
          /> */}
          <div className="flex w-full flex-col justify-between sm:flex-row">
            <div className="flex flex-col gap-y-4">
              <div className={numberStyle}>{data?.data[0].title}</div>
              <div className="text-base font-bold text-white">
                {data?.data[0].date}
              </div>
            </div>
            <div className="mt-4 flex flex-1 flex-col gap-5 pl-0 sm:mt-0 sm:pl-7">
              {/* <div className="text-2xl">{data?.data[0].title}</div>
              <div className="text-base font-bold text-text">
                {data?.data[0].date}
              </div> */}
              <div>{data?.data[0].content}</div>
            </div>
          </div>
          <div className="w-full border-[1px] border-white"></div>
          <div className="flex w-full flex-col justify-between sm:flex-row">
            <div className="flex flex-col gap-y-4">
              <div className={numberStyle}>{data?.data[1].title}</div>
              <div className="text-base font-bold">{data?.data[1].date}</div>
            </div>
            <div className="mt-4 flex flex-1 flex-col gap-5 pl-0 sm:mt-0 sm:pl-7">
              {/* <div className="text-2xl">{data?.data[1].title}</div>
              <div className="text-base font-bold text-text">
                {data?.data[1].date}
              </div> */}
              <div>{data?.data[1].content}</div>
            </div>
          </div>
          <div className="w-full border-[1px] border-white"></div>
          <div className="flex w-full flex-col justify-between sm:flex-row">
            <div className="flex flex-col gap-y-4">
              <div className={numberStyle}>{data?.data[2].title}</div>
              <div className="text-base font-bold">{data?.data[2].date}</div>
            </div>
            <div className="mt-4 flex flex-1 flex-col gap-5 pl-0 sm:mt-0 sm:pl-7">
              {/* <div className="text-2xl">{data?.data[2].title}</div>
              <div className="text-base font-bold">
                {data?.data[2].date}
              </div> */}
              <div>{data?.data[2].content}</div>
            </div>
          </div>
        </div>
        {/* TAINAN */}
        <div className="z-10 flex flex-col items-start justify-start lg:items-start lg:justify-between">
          <div className="flex flex-col gap-6 lg:items-center lg:justify-center lg:gap-10">
            <div className="bg-white bg-clip-text text-[4rem] font-bold uppercase leading-[4.5rem] text-transparent">
              {data2?.title}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div>{data2?.content}</div>
        </div>
      </div>
      {/* TODO: fix position */}
      <div className="bg-secondary h-full flex">
        <Swiper
          className="w-full"
          direction="horizontal"
          slidesPerView={isMobile ? 1 : isPad ? 2 : 4}
          spaceBetween={70}
          modules={[Pagination, Autoplay, Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          speed={5000}
          loop={true}   
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
        >
          {data2.data.map((item: any, index: any) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex h-[180px] w-[400px] cursor-pointer flex-row items-center justify-start bg-transparent px-10 lg:px-0">
                  <img src={item.img} alt="event" width="300" height="180" className="object-cover" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* <img
        src={isMobile ? sideBgM.src : sideBg.src}
        alt="TimeLine"
        className="w-full"
      /> */}
      <div className="h-[250px] bg-[#F77968] to-white" />
      <div className="w-full flex justify-center bg-gradient-to-b from-[#F77968] to-white py-10">
  <iframe
    width="1024"
    height="536"
    src="https://www.youtube.com/embed/a3feC9C4WQc"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="rounded-lg shadow-lg"
  ></iframe>
</div>
    </>
  );
}
