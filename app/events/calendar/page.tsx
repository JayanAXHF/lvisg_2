"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { HeroWithImage } from "@/components/ui/hero-image";
import { motion } from "framer-motion";
import React from "react";
import dynamic from "next/dynamic";
const Highlight = dynamic(() => import("@/components/ui/hero-highlight"), {
  ssr: true,
});
import { TracingBeam } from "@/components/ui/tracing-beam";
import Footer from "@/components/Footer";
import Image from "next/image";
import LgNavbar from "@/components/LgNavbar";
import Navbar from "@/components/Navbar";

import AboutBreadcrum from "@/components/AboutBreadcrum";

const Page = () => {
  return (
    <div className="min-h-screen w-full  dark:bg-black bg-white  dark:bg-dot-white/[0.09] bg-dot-black/[0.1] relative flex items-center justify-center flex-col overflow-x-none">
      <span className="hidden lg:flex *:z-50">
        <LgNavbar />
      </span>{" "}
      <span className="flex lg:hidden">
        <Navbar />
      </span>
      <HeroWithImage className="h-[50rem]" src="/banner-school.jpg">
        <motion.div className="z-50 flex flex-col justify-center items-center">
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 py-4">
            <Highlight className="text-white">School Calendar</Highlight>
          </motion.p>
        </motion.div>
      </HeroWithImage>
      <div className="px-6 w-[90%] flex justify-center mb-20">
        <div className="lg:w-full  lg:px-20  pt-20">
          {/* <div className=" text-left w-full">
            <AboutBreadcrum aboutPage={"School Calendar"} />
          </div> */}

          <div className="mt-10 staff-details">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={[
                { title: "PA-1 - (IV-XII)", date: "2024-04-29" },
                { title: "Youth Parliament (IX-XII)", date: "2024-05-03" },
                { title: "PA-1 - (IV-XII)", date: "2024-05-03" },
                { title: "Youth Parliament (IX-XII)", date: "2024-05-04" },
                { title: "PA-1 - (IX-XII)", date: "2024-05-06" },
                { title: "PA-1 - (IV-VIII)", date: "2024-05-10" },
                { title: "National Technology Day", date: "2024-05-10" },
                { title: "PA-1 - (IV-IX, XI)", date: "2024-05-13" },
                {
                  title: "Results Publishing PA-1(X,XII)",
                  date: "2024-05-15",
                },
                {
                  title: "Scholar Badge(V)",
                  date: "2024-05-16",
                },
                {
                  title: "Scholar Badge(VI, VII)",
                  date: "2024-05-17",
                },
                {
                  title: "Parent-Teacher Conference (IV-VIII)",
                  date: "2024-05-18",
                },
                { title: "PA-1 - (IV-IX, XI)", date: "2024-05-20" },
                { title: "Budda Purnima", date: "2024-05-23" },
                { title: "PA-1 - (IV-IX, XI)", date: "2024-05-24" },
                {
                  title: "Parent-Teacher Conference (IX-XII)",
                  date: "2024-05-25",
                },
                { title: "PA-1 - (IX, XI)", date: "2024-05-27" },
                { title: "Anti Tobacco Day (VII-XII)", date: "2024-05-28" },
                {
                  title: "Commencement of Summer Break (IV-XII)",
                  date: "2024-05-28",
                },
              ]}
              headerToolbar={{
                start: "today prev,next", // will normally be on the left. if RTL, will be on the right
                end: "dayGridMonth,dayGridWeek,dayGridDay", // will normally be on the right. if RTL, will be on the left
                center: "title",
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
