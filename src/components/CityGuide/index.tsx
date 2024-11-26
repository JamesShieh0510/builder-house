import React from "react";

type CityGuideProps = {
  data: {
    title: string;
    subTitle: string;
    id: string;
    places: { name: string; description: string; link: string }[];
  };
};

export default function CityGuide({ data }: CityGuideProps) {
  return (
    <section className="min-h-screen bg-white py-16">
      <div className="mb-8 px-4 md:px-32">
        <h1 className="bg-primary bg-clip-text text-[4rem] font-bold uppercase text-transparent">
          {data.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.places.map((place, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-primary mb-2">
                {place.name}
              </h2>
              <p className="text-gray-600 mb-4">{place.description}</p>
              <a
                href={place.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}