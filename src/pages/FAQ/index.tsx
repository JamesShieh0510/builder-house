import React from "react";
import Image from "next/image";
import FAQ from "@/components/FAQ/FAQ";
import FAQDoc from "@/Document/FAQ";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import faqtop from "@/assets/faqtop.jpeg";


export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "FAQ",
      "common",
    ])),
  },
});

export default function FAQPage() {
  const FAQData = FAQDoc();

  return (
    <>
      <Head>
        <title>FAQ - Taiwan Builder House</title>
      </Head>
      <Header />
      <Image src={faqtop} alt="Description of the image" width={1920} height={1080} />
      <div id="faq">
        <FAQ data={FAQData} />
      </div>
      <Footer />
    </>
  );
}