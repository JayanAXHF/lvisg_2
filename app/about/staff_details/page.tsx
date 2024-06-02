"use client";
// ----
import { HeroWithImage } from "@/components/ui/hero-image";
import { motion } from "framer-motion";
import React from "react";
import dynamic from "next/dynamic";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Footer from "@/components/Footer";
import LgNavbar from "@/components/LgNavbar";
import Navbar from "@/components/Navbar";
import AboutBreadcrum from "@/components/AboutBreadcrum";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { tableSemiRaw } from "@/data/staffTable";
const Highlight = dynamic(() => import("@/components/ui/hero-highlight"), {
  ssr: true,
});
// ----

const Page = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-white bg-dot-black/[0.1] dark:bg-black dark:bg-dot-white/[0.09]">
      <span className="hidden *:z-50 lg:flex">
        <LgNavbar />
      </span>{" "}
      <span className="flex lg:hidden">
        <Navbar />
      </span>
      <HeroWithImage className="h-[50rem]" src="/banner-school.jpg">
        <motion.div className="z-50 flex flex-col items-center justify-center">
          <motion.p className="bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-6xl">
            <Highlight className="text-white">Staff Details</Highlight>
          </motion.p>
        </motion.div>
      </HeroWithImage>
      <TracingBeam className="mb-20 flex w-[90%] justify-center px-6">
        <div className="pt-20 lg:w-[1401px] lg:px-20">
          <div className="w-full text-left">
            <AboutBreadcrum aboutPage={"Staff Details"} />
          </div>
          <h2 className="my-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Staff Details
          </h2>

          <div className="staff-details mt-10">
            <DataTable columns={columns} data={tableSemiRaw} />
          </div>
        </div>
      </TracingBeam>
      <Footer />
    </div>
  );
};

export default Page;
