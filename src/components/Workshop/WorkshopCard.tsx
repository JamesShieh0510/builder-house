// /components/Workshop/WorkshopCard.tsx
import React from "react";

export default function WorkshopCard(props: {
  title: string;
  time: string;
  description: string;
  organizers: string[];
}) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-md mx-4 md:mx-40">
    <h3 className="text-xl font-bold text-pink-500 mb-2">{props.title}</h3>
    <p className="text-lg font-semibold text-gray-800 mb-1">{props.time}</p>
    <p className="text-gray-600 mb-2">{props.description}</p>
    <p className="text-sm text-gray-500">
      <strong>Organized by:</strong>{" "}
      {props.organizers.map((org, index) => (
        <span key={index} className="block">
          {org}
        </span>
      ))}
    </p>
  </div>
  );
}