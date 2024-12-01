import React from "react";
import Agenda from "@/components/Agenda/Agenda";
import AgendaDoc from "@/Document/Agenda";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";


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
      <div id="faq">
        <Agenda data={AgendaData} />
      </div>
      <Footer />
    </>
  );
}