"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import dynamic from "next/dynamic";
const Highlight = dynamic(() => import("@/components/ui/hero-highlight")); // Adjust ssr as needed
const BackgroundBeams = dynamic(() => import("./ui/background-beams"), {
  ssr: true,
}); // Likely needs SSR

export default function Hero() {
  return (
    <div className="relative flex h-[48rem] w-full flex-col items-center justify-center overflow-x-hidden bg-neutral-50 antialiased lg:h-screen">
      <BackgroundBeams />
      <div className="mx-auto grid w-full max-w-2xl grid-flow-row justify-center justify-items-center gap-y-1 p-4">
        <Image
          src="/logo_green-removebg-preview.png"
          alt="school logo"
          className="mb-10 h-auto w-72 text-center"
          width={1000}
          height={900}
        />
        <h1 className="relative bg-gradient-to-b from-neutral-600 to-neutral-900 bg-clip-text text-center font-sans text-5xl font-bold text-transparent md:text-7xl">
          Going{" "}
          <Highlight className="text-black dark:text-white">beyond</Highlight>{" "}
          the Books
        </h1>
        <p></p>
        <p className="relative mx-auto my-2 max-w-lg text-center text-sm text-neutral-500">
          We encourage our learners to discover their passion and decide their
          goals in life. Education begins at home and I applaud the parents who
          recognize that they and not someone else - must take responsibility to
          assure that their children go to the best school
        </p>
        <span className="mt-10 flex flex-row justify-center gap-x-10 *:z-10">
          <button className="z-10 inline-flex h-12 animate-shimmer cursor-pointer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Link href="/admissions" className="z-10 cursor-pointer">
              Admissions
            </Link>
          </button>
          <button className="h-12 cursor-pointer rounded-md border border-neutral-600 bg-white px-6 py-2 text-black transition duration-200 hover:bg-gray-100">
            <Link
              href="/about/lvis"
              className="cursor-pointer"
              prefetch={false}
            >
              About Us
            </Link>
          </button>
        </span>
      </div>
    </div>
  );
}
