// /components/Workshop/Workshop.tsx
import React, { useState } from "react";
import WorkshopCard from "./WorkshopCard";

export default function Workshop(props: { data: any }) {
  const { data } = props;
  const [currentDay, setCurrentDay] = useState<"Day1" | "Day2">("Day1");
  const [currentRoom, setCurrentRoom] = useState(1);

  const rooms = Object.keys(data[currentDay]);

  return (
    <section className="py-16 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-pink-500">WORKSHOP</h1>
        <p className="text-lg text-gray-600">工作坊</p>
      </div>
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-6 py-2 font-semibold rounded ${
            currentDay === "Day1"
              ? "bg-pink-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setCurrentDay("Day1")}
        >
          DAY 1
        </button>
        <button
          className={`px-6 py-2 font-semibold rounded ${
            currentDay === "Day2"
              ? "bg-pink-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setCurrentDay("Day2")}
        >
          DAY 2
        </button>
      </div>
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() =>
            setCurrentRoom((prev) => (prev > 1 ? prev - 1 : rooms.length))
          }
          className="text-xl font-bold text-pink-500"
        >
          {"<"}
        </button>
        <h2 className="text-2xl font-bold text-pink-500">ROOM {currentRoom}</h2>
        <button
          onClick={() =>
            setCurrentRoom((prev) => (prev < rooms.length ? prev + 1 : 1))
          }
          className="text-xl font-bold text-pink-500"
        >
          {">"}
        </button>
      </div>
      <div className="space-y-6">
        {data[currentDay][`Room${currentRoom}`]?.map(
          (item: any, idx: number) => (
            <WorkshopCard
              key={idx}
              title={item.title}
              time={item.time}
              description={item.description}
              organizers={item.organizers}
            />
          )
        )}
      </div>
    </section>
  );
}