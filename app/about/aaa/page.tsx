"use client";
// -----
import { HeroWithImage } from "@/components/ui/hero-image";
import { motion } from "framer-motion";
import React from "react";
import dynamic from "next/dynamic";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Footer from "@/components/Footer";
import Image from "next/image";
import LgNavbar from "@/components/LgNavbar";
import Navbar from "@/components/Navbar";
import { WobbleCard } from "@/components/ui/wobblecard";
import AboutBreadcrum from "@/components/AboutBreadcrum";
import { awards } from "@/data";
const Highlight = dynamic(() => import("@/components/ui/hero-highlight"), {
  ssr: true,
});
// -----

const Page = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-white bg-dot-black/[0.1] dark:bg-black dark:bg-dot-white/[0.09]">
      <span className="hidden *:z-50 lg:flex">
        <LgNavbar />
      </span>{" "}
      <span className="flex lg:hidden">
        <Navbar />
      </span>
      <HeroWithImage className="h-[50rem]" src="/awards/banner-awards.webp">
        <motion.div className="z-50 flex flex-col items-center justify-center">
          <motion.p className="bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-6xl">
            <Highlight className="text-white">
              Awards &amp; Achievements
            </Highlight>
          </motion.p>
        </motion.div>
      </HeroWithImage>
      <TracingBeam className="mb-20 flex w-[90%] justify-center px-6">
        <div className="pt-20 lg:w-[1401px] lg:px-20">
          <div className="w-full text-left">
            <AboutBreadcrum aboutPage={"Awards & Achievements"} />
          </div>
          <h2 className="my-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Awards &amp; Achievements
          </h2>

          <div className="advisory-board mt-10">
            <div className="flex flex-col gap-y-10">
              {awards.map((member, idx) => {
                return (
                  <WobbleCard
                    containerClassName=" *:text-neutral-950 max-w-2xl lg:max-w-full mix-h-[500px]  lg:min-h-[600px] xl:min-h-[300px] bg-neutral-200/[0.7] text-white z-10 items-start py-0 px-0"
                    key={idx}
                  >
                    <div className="grid min-h-[500px] w-full grid-flow-row content-center items-center justify-items-center gap-5 lg:min-h-[600px] lg:grid-flow-col lg:grid-cols-3 xl:min-h-[300px]">
                      <div className="size-full lg:col-span-1">
                        <Image
                          width={500}
                          height={500}
                          src={`/awards/${member.image}`}
                          alt={member.award}
                          className="size-full min-w-full rounded-xl lg:size-auto"
                        />
                      </div>
                      <div className="size-full lg:col-span-2 lg:flex lg:flex-col lg:justify-center">
                        <h3 className="max-w-2xl scroll-m-20 text-lg font-bold tracking-tight lg:ml-6 lg:text-2xl">
                          {member.award}
                        </h3>
                        {member?.description && (
                          <ul className="my-6 ml-6 max-w-full list-disc text-sm [&>li]:mt-2">
                            {member.description.map((item, idx) => {
                              return <li key={idx}>{item}</li>;
                            })}
                          </ul>
                        )}
                      </div>
                    </div>
                  </WobbleCard>
                );
              })}
            </div>
          </div>
        </div>
      </TracingBeam>
      <Footer />
    </div>
  );
};

export default Page;
