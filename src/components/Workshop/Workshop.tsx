import React, { useState } from "react";
import WorkshopCard from "./WorkshopCard";

export default function Workshop(props: { data: any }) {
  const { data } = props;
  const [currentDay, setCurrentDay] = useState<"Day1" | "Day2">("Day1");
  const [currentRoom, setCurrentRoom] = useState(1);

  const rooms = Object.keys(data[currentDay]);

  // 定義 Room 標題映射
  //const roomTitles: { [key: number]: string } = {
  //  1: "Room 1 : NCKU BLOCKCHAIN CLUB WORKSHOP",
  //  2: "Room 2 : WORKSHOP",
  //};
  const roomTitles: { [key: number]: { title: string; location: string } } = {
    1: { title: "Room 1 : NCKU BLOCKCHAIN CLUB WORKSHOP", location: "IHG" },
    2: { title: "Room 2 : SUI WORKSHOP", location: "Room 202" },
  };

  return (
    <section className="py-16 bg-white">
      <div className="mb-8 px-4 md:px-40">
        <h1 className="bg-primary bg-clip-text text-[4rem] font-bold uppercase text-transparent">WORKSHOP</h1>
      </div>
      <div className="flex mb-8 px-4 md:px-40 gap-4">
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
      <div className="flex items-center justify-start mb-6 px-4 md:px-40 gap-2">
        <h2 className="bg-primary bg-clip-text text-[3rem] font-bold uppercase text-transparent">
          {roomTitles[currentRoom] || `Room ${currentRoom}`}
        </h2>
        <p className="text-lg font-medium text-gray-700">
          Location: {roomDetails[currentRoom]?.location}
        </p>
        <button
          onClick={() =>
            setCurrentRoom((prev) => (prev > 1 ? prev - 1 : rooms.length))
          }
          className="text-2xl font-bold text-pink-500 bg-white border-4 border-pink-500 px-2 py-1 rounded-lg shadow-md hover:bg-pink-500 hover:text-white transition"
        >
          {"<"}
        </button>
        <button
          onClick={() =>
            setCurrentRoom((prev) => (prev < rooms.length ? prev + 1 : 1))
          }
          className="text-2xl font-bold text-pink-500 bg-white border-4 border-pink-500 px-2 py-1 rounded-lg shadow-md hover:bg-pink-500 hover:text-white transition"
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
              speaker={item.speaker}
              registerLink={item.registerLink}
              //organizers={item.organizers}
              
            />
          )
        )}
      </div>
    </section>
  );
}