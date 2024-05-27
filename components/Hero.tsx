"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { Highlight } from "@/components/ui/hero-highlight";
import { BackgroundBeams } from "./ui/background-beams";
import ShimmerButton from "./ui/shimmer-button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="lg:h-screen h-[48rem] w-full  bg-neutral-50 relative flex flex-col items-center justify-center antialiased overflow-x-hidden">
      <BackgroundBeams />
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative  md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 text-5xl to-neutral-900  text-center font-sans font-bold">
          Going{" "}
          <Highlight className="text-black dark:text-white">beyond</Highlight>{" "}
          the Books
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative ">
          We encourage our learners to discover their passion and decide their
          goals in life. Education begins at home and I applaud the parents who
          recognize that they and not someone else - must take responsibility to
          assure that their children go to the best school
        </p>
        <span className="flex flex-row justify-center gap-x-10  mt-10 *:z-10">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border cursor-pointer border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-10">
            <Link href="/admissions" className="cursor-pointer z-10">
              Admissions
            </Link>
          </button>
          <button className="px-6 py-2 rounded-md h-12 border border-neutral-600 text-black bg-white cursor-pointer hover:bg-gray-100 transition duration-200">
            <Link href="/about" className="cursor-pointer ">
              About Us
            </Link>
          </button>
        </span>
      </div>
    </div>
  );
}
