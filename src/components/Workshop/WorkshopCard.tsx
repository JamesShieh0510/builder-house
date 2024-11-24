// /components/Workshop/WorkshopCard.tsx
import React from "react";

export default function WorkshopCard(props: {
  title: string;
  time: string;
  description: string;
  speaker: string; // 單一 Speaker 名稱
  registerLink: string; // 註冊連結
  //organizers: string[];

  //<p className="text-sm text-gray-500">
  //<strong>Organized by:</strong>{" "}
  //{props.organizers.map((org, index) => (
  //  <span key={index} className="block">
  //    {org}
  //  </span>
  //))}
  //</p>
}) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-md mx-4 md:mx-32">
    <h3 className="text-xl font-bold text-pink-500 mb-2">{props.title}</h3>
    <p className="text-lg font-semibold text-gray-800 mb-1">{props.time}</p>
    <p className="text-gray-600 mb-2">{props.description}</p>
    <p className="text-sm text-gray-500 mb-2">
      <strong>Speaker:</strong> {props.speaker}
    </p>
    <a
      href={props.registerLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 font-bold underline"
    >
      Register Here
    </a>

  </div>
  );
}