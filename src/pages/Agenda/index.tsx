import React from "react";
import Agenda from "@/components/Agenda/Agenda";
import AgendaDoc from "@/Document/Agenda";
import Head from "next/head";
import Image from "next/image";
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
    ])),
  },
});

export default function FAQPage() {
  const AgendaData = AgendaDoc();

  return (
    <>
      <Head>
        <title>FAQ - Taiwan Builder House</title>
      </Head>
      <Header />
      <Image src={agendatop} alt="Description of the image" width={1920} height={1080} />
      <div id="faq">
        <Agenda data={AgendaData} />
      </div>
      <Footer />
    </>
  );
}