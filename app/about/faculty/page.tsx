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
      <HeroWithImage className="h-[50rem]" src="/banner-faculty.jpg">
        <motion.div className="z-50 flex flex-col items-center justify-center">
          <motion.p className="bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-6xl">
            <Highlight className="text-white">Faculty</Highlight>
          </motion.p>
        </motion.div>
      </HeroWithImage>
      <TracingBeam className="mb-20 flex w-[90%] justify-center px-6">
        <div className="pt-20 lg:w-[1401px] lg:px-20">
          <div className="w-full text-left">
            <AboutBreadcrum aboutPage={"Faculty"} />
          </div>
          <h2 className="my-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Faculty
          </h2>

          <div className="faculty mt-10">
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              &quot;The art of teaching is the art of assisting discovery.&quot;
            </blockquote>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              We understand that a teacher introduces the learners to success.
              Lotus Valley International School has an excellent team of
              professional and highly-qualified educators who are determined to
              enlighten the lives of our learners. Passionate, creative and
              innovative individuals with excellent communication skills and
              fire in their belly, the teachers are partners in the progress of
              learners.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Regular updates help them keep pace with the new trends and
              teaching methodologies like &lsquo;Smart Board technology&rsquo;
              to aid the learning of children. The staff attends regular
              seminars and workshops on professional development, computer-aided
              learning and software packages specially designed to support the
              curriculum. The teachers are facilitators who guide our learners
              through discovery with inspiration and motivation.
            </p>
          </div>
        </div>
      </TracingBeam>
      <Footer />
    </div>
  );
};

export default Page;
