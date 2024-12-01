import React from "react";
import CityGuide from "@/components/CityGuide";
import CityGuideDoc from "@/Document/CityGuide";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "city",
      "common",
    ])),
  },
});

export default function CityGuidePage() {
  const CityGuideData = CityGuideDoc();

  return (
    <>
      <Head>
        <title>City Guide - Taiwan Builder House</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-white">
        <div id="cityguide">
          <CityGuide data={CityGuideData} />
        </div>
      </main>
      <Footer />
    </>
  );
}