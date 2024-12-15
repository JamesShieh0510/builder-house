import React, { useEffect, useState } from "react";
import Workshop from "@/components/Workshop/Workshop";
import WorkshopDoc from "@/Document/Workshop/Workshop";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import workshoptop from "@/assets/workshoptop.jpeg";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "Workshop",
      "common",
    ])),
  },
});

export default function WorkshopAgendaPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const WorkshopData = WorkshopDoc();

  return (
    <>
      <Head>
        <title>Workshop & Agenda - Taiwan Builder House</title>
      </Head>
      <Header />
      <Image
  src={workshoptop}
  alt="Description of the image"
  className="w-full sm:h-64 md:h-96 lg:h-auto object-cover"
/>
      {isClient && (
        <main className="min-h-screen bg-white">
          <div id="workshop">
            <Workshop data={WorkshopData} />
          </div>
        </main>
      )}
      <Footer />
    </>
  );
}