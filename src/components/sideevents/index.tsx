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
    <section id={data.id} className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="bg-primary bg-clip-text text-[4rem] font-bold uppercase text-transparent mb-8 px-4 md:px-32">
          {data.title.name}
        </h1>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {data.data.map((event, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_calc(33.333%-1rem)] p-4 cursor-pointer"
                onClick={() => window.open(event.link, "_blank")} 
              >
                <img
                  src={event.img.src} 
                  alt={event.title}
                  className="w-full h-80 md:h-80 object-cover rounded-lg" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}