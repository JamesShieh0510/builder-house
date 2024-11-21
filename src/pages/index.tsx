import Head from "next/head";
import FAQ from "@/components/FAQ/FAQ";
import Judges from "@/components/Judges/Judges";
import Main from "@/components/Main/Main";
import OverView from "@/components/OverView/OverView";
import Partners from "@/components/Partners/Partners";
import Prizes from "@/components/Prizes/Prizes";
import Activity from "@/components/Activity/Activity";
import TimeLine from "@/components/TimeLine/TimeLine";
import Workshop from "@/components/Workshop/Workshop";
import GemHunter from "@/components/GemHunter/GemHunter";
import PrizeDoc from "@/Document/Prize";
import OverViewDoc from "@/Document/OverView";
import HunterDoc from "@/Document/GemHunter";
import ActivityDoc from "@/Document/Activity";
import partnersData from "@/Document/Partners";
import FAQDoc from "@/Document/FAQ";
import Events from "@/components/Events/Events";
import EventsData from "@/Document/Events";
import TimeLineDoc from "@/Document/TimeLine";
import CityDoc from "@/Document/City";
import Agenda from "@/components/Agenda/Agenda";
import AgendaDoc from "@/Document/Agenda";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import JudgesDoc from "@/Document/Judges";
import EventsDoc from "@/Document/Events";
import PartnersDoc from "@/Document/Partners";
import WorkshopDoc from "@/Document/Workshop/Workshop";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "home",
      "common",
      "main",
      "activity",
      "timeLine",
      "city",
      "overView",
      "prize",
      "hunter",
      "FAQ",
      "agenda",
      "judges",
      "events",
      "partners",
    ])),
  },
});

export default function Home() {
  const TimeLineData = TimeLineDoc();
  const CityData = CityDoc();
  const OverViewData = OverViewDoc();
  const ActivityData = ActivityDoc();
  const prizeData = PrizeDoc();
  const hunterData = HunterDoc();
  const FAQData = FAQDoc();
  const AgendaData = AgendaDoc();
  const JudgesData = JudgesDoc();
  const EventsData = EventsDoc();
  const PartnersData = PartnersDoc();
  const WorkshopData = WorkshopDoc();

  return (
    <>
     <Head>
        <title>Taiwan Builder House</title>
      </Head>
      <Main />
      <TimeLine data={TimeLineData} data2={CityData} />
      <OverView data={OverViewData} />
      <Prizes data={prizeData} />
      {/* <GemHunter data={hunterData} /> */}
      {/* <Activity data={ActivityData} /> */}
      <Workshop data={WorkshopData} />
      {<Judges data={JudgesData} />}
      {/* TODO: change to speaker <Judges data={JudgesData} /> */}
      {/* <Agenda data={AgendaData} /> */}
      {<Events data={EventsData} /> }
      <Partners data={PartnersData} />
      <FAQ data={FAQData} />
    </>
  );
}
