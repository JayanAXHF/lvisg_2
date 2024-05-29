"use client";

import { HeroWithImage } from "@/components/ui/hero-image";
import { motion } from "framer-motion";
import React from "react";
import { Highlight } from "@/components/ui/hero-highlight";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Footer from "@/components/Footer";
import Image from "next/image";
import LgNavbar from "@/components/LgNavbar";
import Navbar from "@/components/Navbar";
import { WobbleCard } from "@/components/ui/wobblecard";
import advisoryBoardMembers from "@/data/advisoryBoardMembers";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import AboutBreadcrum from "@/components/AboutBreadcrum";
import { awards } from "@/data";

const Page = () => {
  return (
    <div className="min-h-screen w-full  dark:bg-black bg-white  dark:bg-dot-white/[0.09] bg-dot-black/[0.1] relative flex items-center justify-center flex-col overflow-x-none">
      <span className="hidden lg:flex *:z-50">
        <LgNavbar />
      </span>{" "}
      <span className="flex lg:hidden">
        <Navbar />
      </span>
      <HeroWithImage className="h-[50rem]" src="/awards/banner-awards.jpg">
        <motion.div className="z-50 flex flex-col justify-center items-center">
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 py-4">
            <Highlight className="text-white">
              Awards &amp; Achievements
            </Highlight>
          </motion.p>
        </motion.div>
      </HeroWithImage>
      <TracingBeam className="px-6 w-[90%] flex justify-center mb-20">
        <div className="lg:w-[1401px]  lg:px-20  pt-20">
          <div className=" text-left w-full">
            <AboutBreadcrum aboutPage={"Awards & Achievements"} />
          </div>
          <h2 className="my-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Awards &amp; Achievements
          </h2>

          <div className="mt-10 advisory-board">
            <div className="flex flex-col gap-y-10">
              {awards.map((member, idx) => {
                return (
                  <WobbleCard
                    containerClassName=" *:text-neutral-950 max-w-2xl lg:max-w-full mix-h-[500px]  lg:min-h-[600px] xl:min-h-[300px] bg-neutral-200/[0.7] text-white z-10 items-start py-0 px-0"
                    key={idx}
                  >
                    <div className="w-full grid lg:grid-flow-col grid-flow-row lg:grid-cols-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] items-center content-center gap-5 justify-items-center">
                      <div className="lg:col-span-1 w-full h-full ">
                        <Image
                          width={500}
                          height={500}
                          src={`/awards/${member.image}`}
                          alt={member.award}
                          className=" h-full rounded-xl lg:h-auto lg:w-auto  w-full min-w-full "
                        />
                      </div>
                      <div className="lg:col-span-2 w-full h-full lg:flex lg:justify-center lg:flex-col">
                        <h3 className="scroll-m-20 lg:text-2xl text-lg max-w-2xl font-bold tracking-tight lg:ml-6">
                          {member.award}
                        </h3>
                        {member?.description && (
                          <ul className="my-6 ml-6 list-disc [&>li]:mt-2 max-w-full text-sm">
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
