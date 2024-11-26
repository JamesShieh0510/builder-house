import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { StaticImageData } from "next/image";

type SideEvent = {
  title: string;
  link: string;
  img: StaticImageData;
};

type SideEventsProps = {
  data: {
    title: { name: string; color: string };
    subTitle: string;
    id: string;
    data: SideEvent[];
  };
};

export default function SideEvents({ data }: SideEventsProps) {
  const autoplayRef = useRef(Autoplay({ delay: 3000 }));
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplayRef.current]
  );

  return (
    <section id={data.id} className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* 標題 */}
        <h1 className="bg-primary bg-clip-text text-[4rem] font-bold uppercase text-transparent text-center mb-6">
          {data.title.name}
        </h1>
        {/* 輪播區域 */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {data.data.map((event, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_calc(33.333%-1rem)] p-4"
              >
                <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
                  <img
                    src={event.img.src} // 靜態資源使用 src 屬性
                    alt={event.title}
                    className="w-full h-40 md:h-64 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-lg md:text-xl font-semibold text-primary mb-2 text-center">
                    {event.title}
                  </h2>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-bold text-white bg-pink-500 rounded hover:bg-pink-600"
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}