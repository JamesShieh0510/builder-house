import React from "react";
import Image from "next/image";
import SideEvents from "@/components/sideevents";
import Events from "@/components/Events/Events";
import SideEventsDoc from "@/Document/sideevents";
import EventsDoc from "@/Document/Events";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import eventstop from  "@/assets/eventstop.jpeg";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["events", "common"])),
  },
});

export default function EventsPage() {
  const SideEventsData = SideEventsDoc();
  const EventsData = EventsDoc();

  return (
    <>
      <Head>
        <title>Events - Taiwan Builder House</title>
      </Head>
      <Header />
      <Image src={eventstop} alt="Description of the image" width={1920} height={1080} />
      <div id="events">
        <Events data={EventsData} />
      </div>
      <div id="sideevents">
        <SideEvents data={SideEventsData} />
      </div>

      <Footer />
    </>
  );
}