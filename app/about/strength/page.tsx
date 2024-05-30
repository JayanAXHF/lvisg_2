"use client";

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
import { DataTable } from "../staff_details/data-table";
import { GradeStrength, strengthColumns } from "../staff_details/columns";
import { tableSemiRaw } from "@/data/staffTable";

const data: GradeStrength[] = [
  {
    grade: "Pre-Nursery",
    strength: "22",
    id: 1,
  },
  {
    grade: "Nursery",
    strength: "192",
    id: 2,
  },
  {
    grade: "Prep",
    strength: "206",
    id: 3,
  },
  {
    grade: "I",
    strength: "219",
    id: 4,
  },
  {
    grade: "II",
    strength: "208",
    id: 5,
  },
  {
    grade: "III",
    strength: "211",
    id: 6,
  },
  {
    grade: "IV",
    strength: "208",
    id: 7,
  },
  {
    grade: "V",
    strength: "214",
    id: 8,
  },
  {
    grade: "VI",
    strength: "208",
    id: 9,
  },
  {
    grade: "VII",
    strength: "210",
    id: 10,
  },
  {
    grade: "VIII",
    strength: "207",
    id: 11,
  },
  {
    grade: "IX",
    strength: "218",
    id: 12,
  },
  {
    grade: "X",
    strength: "223",
    id: 13,
  },
  {
    grade: "XI",
    strength: "146",
    id: 14,
  },
  {
    grade: "XII",
    strength: "148",
    id: 15,
  },
];

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
            <Highlight className="text-white">School Strength</Highlight>
          </motion.p>
        </motion.div>
      </HeroWithImage>
      <TracingBeam className="px-6 w-[90%] flex justify-center mb-20">
        <div className="lg:w-[1401px]  lg:px-20  pt-20">
          <div className=" text-left w-full">
            <AboutBreadcrum aboutPage={"School Strength"} />
          </div>
          <h2 className="my-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            School Strength
          </h2>

          <div className="mt-10 staff-details">
            <DataTable columns={strengthColumns} data={data} />
          </div>
        </div>
      </TracingBeam>
      <Footer />
    </div>
  );
};

export default Page;
