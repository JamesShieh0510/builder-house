import React from "react";
import Image from "next/image";
import anping from "@/assets/yacht.jpg";
import yachthotel from "@/assets/yachthotel.jpg";
import transportation1 from "@/assets/transportation1.png"
import transportation2 from "@/assets/transportation2.png"

type Place = {
  name: string;
  description: string;
  link: string;
  image?: string; // 添加 image 字段以支持推荐区域
};

type CityGuideProps = {
  data: {
    title: string;
    subTitle: string;
    id: string;
    places: Place[];
    recommendations: Place[]; // 新增的推荐区域字段
  };
};

export default function CityGuide({ data }: CityGuideProps) {
  return (
    <section className="min-h-screen bg-white py-24">
      {/* 上方区块（左图 + 右文） */}
      <div className="mb-20 px-4 md:px-32">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* 左侧图片区 */}
          <div className="relative w-full md:w-1/2 flex flex-col gap-4">
            <div className="rounded-lg overflow-hidden w-full -translate-x-4">
              <Image
                src={yachthotel}
                alt="Yacht Hotel"
                width={500}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="rounded-lg overflow-hidden w-full md:w-[80%] translate-x-4 md:ml-10 -mt-12 md:-mt-20">
              <Image
                src={anping}
                alt="Anping"
                width={500}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* 右侧文字区 */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-pink-600 text-4xl lg:text-5xl font-bold uppercase mb-6">
              {data.subTitle}
            </h2>
            <p className="text-gray-800 mb-4 text-sm lg:text-base leading-relaxed">
              PLEASE COMPLETE THE TBH REGISTRATION FORM AND USE THE INVITATION
              IN THE CONFIRMATION EMAIL TO JOIN THE TBH WORKSPACE FOR
              COMPETITION COORDINATION, COMMUNICATION, AND UPDATES.
            </p>
            <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
              PARTICIPANTS CAN REGISTER EITHER AS A PROJECT OR AS INDIVIDUALS
              SEEKING A PROJECT TEAM, BUT ONLY PROJECTS ARE ELIGIBLE TO BE LISTED
              AS FINALIST TEAMS. INDIVIDUALS SEEKING A TEAM CAN UPDATE THEIR
              EXISTING REGISTRATION OR CREATE A NEW TEAM REGISTRATION ONCE THEY
              FORM OR JOIN A TEAM.
            </p>
          </div>
        </div>
      </div>


      <div className="mb-20 px-4 md:px-32">
  <h2 className="text-pink-600 text-3xl font-bold uppercase mb-6">
    Places We Recommend
  </h2>
  <div className="w-full h-[400px] rounded-lg overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.416030720588!2d120.16724491558222!3d22.9964948844636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e76821b9f73d1%3A0x7b084c19a704a65c!2sAnping%20Old%20Street!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>


      <div className="mb-20 px-4 md:px-32">
        <h2 className="text-pink-600 text-3xl font-bold uppercase mb-6">
          Places to Visit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.recommendations.map((place, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center"
            >
 
              {place.image && (
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <h3 className="text-pink-600 text-lg font-bold mb-2">
                {place.name}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {place.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8 px-4 md:px-32">
      <h2 className="text-pink-600 text-3xl font-bold uppercase mb-6">
      Accommodation Recommendations
  </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {data.places.map((place, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-primary mb-2">
                {place.name}
              </h2>
              <p className="text-gray-600 mb-4">{place.description}</p>
              {place.link && (
                <a
                  href={place.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  Visit Website
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

<div className="mb-20 px-4 md:px-32">
  <h2 className="text-pink-600 text-3xl font-bold uppercase mb-6">
    Transportation
  </h2>
  <div className="mb-12">
    <h3 className="text-white bg-pink-600 inline-block py-2 px-4 rounded-md text-lg font-bold uppercase mb-6">
      High-Speed Rail (HSR) + Shuttle
    </h3>
    <div className="w-full flex justify-center">
      <Image
        src={transportation1}
        alt="High-Speed Rail (HSR) + Shuttle"
        className="rounded-lg shadow-md"
        width={800}
        height={400}
      />
    </div>
    <ul className="mt-6 text-sm text-gray-700 list-disc pl-5">
      <li>Duration: About 2.5–3.5 hours.</li>
      <li>
        Cost: HSR ticket around NT$1,350 (standard class); MRT and train tickets around NT$100.
      </li>
    </ul>
  </div>

  <div>
    <h3 className="text-white bg-pink-600 inline-block py-2 px-4 rounded-md text-lg font-bold uppercase mb-6">
      Direct Bus + TRA Train
    </h3>
    <div className="w-full flex justify-center">
      <Image
        src={transportation2}
        alt="Direct Bus + TRA Train"
        className="rounded-lg shadow-md"
        width={800}
        height={400}
      />
    </div>
    <ul className="mt-6 text-sm text-gray-700 list-disc pl-5">
      <li>Duration: Around 4–6 hours.</li>
      <li>Cost: Bus fare NT$300–500; train fare NT$300–500.</li>
    </ul>
  </div>
</div>

    </section>
  );
}