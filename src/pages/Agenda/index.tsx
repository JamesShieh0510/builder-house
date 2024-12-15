import React, { useEffect, useState } from "react";
import Image from "next/image";
import Agenda from "@/components/Agenda/Agenda";
import AgendaDoc from "@/Document/Agenda";
import Workshop from "@/components/Workshop/Workshop";
import WorkshopDoc from "@/Document/Workshop/Workshop";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import agendatop from "@/assets/agendatop.jpeg";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "agenda", 
      "common",
      "Workshop"
    ])),
  },
});

export default function AgendaPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const AgendaData = AgendaDoc();
  const WorkshopData = WorkshopDoc();

  return (
    <>
      <Head>
        <title>Agenda - Taiwan Builder House</title>
      </Head>
      <Header />
      <Image
        src={agendatop}
        alt="Description of the image"
        width={1920}
        height={1080}
      />
      <div id="agenda">
        <Agenda
          data={{ ...AgendaData, data: AgendaData.data.MainStage }}
          stageName="Builder Stage"
        />
        <Agenda
          data={{ ...AgendaData, data: AgendaData.data.RadianceStage }}
          stageName="Radiance Stage"
        />

        <Agenda
          data={{ ...AgendaData, data: AgendaData.data.RoundTable }}
          stageName="Round Table"
        />
      </div>
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