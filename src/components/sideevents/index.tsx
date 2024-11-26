import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import SideEventsDoc from "@/Document/sideevents";

export default function SideEvents() {
  const data = SideEventsDoc();

  const autoplayRef = useRef(Autoplay({ delay: 3000 }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplayRef.current,
  ]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section id={data.id} className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto relative">
        <h1 className="bg-primary bg-clip-text text-[4rem] font-bold uppercase text-transparent">
          {data.title.name}
        </h1>
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-0 -translate-y-1/2 z-10 px-4 py-2 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition"
        >
          &lt;
        </button>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {data.data.map((event, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] p-6 flex justify-center"
              >
                <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
                  <img
                    src={typeof event.img === "string" ? event.img : event.img.src}
                    alt={event.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-xl font-semibold text-primary mb-2">
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
        {/* 右按钮 */}
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-0 -translate-y-1/2 z-10 px-4 py-2 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition"
        >
          &gt;
        </button>
      </div>
    </section>
  );
}