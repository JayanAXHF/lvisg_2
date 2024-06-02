"use client";
// ----
import React from "react";
import { WobbleCard } from "./ui/wobblecard";
import dynamic from "next/dynamic";
import Image from "next/image";
const Boxes = dynamic(() => import("./ui/background-boxes"), {
  ssr: false,
});
// ----

export default function Footer() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-lvis-red lg:h-[30rem] lg:bg-slate-900">
      <div className="grid grid-flow-row content-between py-0">
        <div className="pointer-events-none absolute inset-0 z-10 size-full bg-lvis-red [mask-image:radial-gradient(transparent,white)] lg:bg-slate-900" />
        <Boxes className="hidden lg:flex" />
        <div className="grid size-full grid-flow-row items-center justify-between gap-x-5 p-10 lg:grid-cols-8">
          <div className="z-50 h-full lg:col-span-3">
            <Image
              alt="school logo"
              className="size-auto"
              src="/logo_white.png"
            />
          </div>
          <div className="grid gap-x-10 gap-y-8 lg:col-span-5 lg:grid-flow-row lg:grid-cols-4">
            <div className="col-span-2">
              <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-yellow-800  lg:bg-teal-800/[0.7] text-white z-10 items-start py-0">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Quick Links
                </h4>
                <ul className="list-none [&>li]:mt-2">
                  <li>Awards</li>
                  <li>eMagazine</li>
                  <li>Career</li>
                  <li>Admissions 2023-24</li>
                  <li>Feedback</li>
                </ul>
              </WobbleCard>
            </div>
            <div className="col-span-2">
              <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-yellow-800  lg:bg-teal-800/[0.7] text-white z-10 items-start py-0">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Contact Us
                </h4>
                <ul className="list-none [&>li]:mt-2">
                  <li>
                    Lotus Valley International School, M-Block, South City-II,
                    <br />
                    Nirvana Country, Sector-50 (Behind North Close), Gurgaon -
                    122018{" "}
                  </li>
                  <li>
                    Phone : +91 <a href="tel:9650544997">9650544997</a> or{" "}
                    <a href="tel:01244936900">0124-4936900</a>
                  </li>
                  <li>E-mail : info@lotusvalleygurgaon.com</li>
                  <li>
                    Principal&apos;s E-mail : principal@lotusvalleygurgaon.com
                  </li>
                  {/* <li>
                    See <Link href="/contact">Contact Us</Link>
                  </li> */}
                </ul>
              </WobbleCard>
            </div>
          </div>
        </div>
      </div>
      <p className="z-10 px-10 py-2 text-center text-xs leading-7 text-neutral-100 lg:px-0">
        This is just a parody. The Lotus Valley International School logos,
        including any variations with green or white text, the media used on the
        website, and other terms related to Lotus Valley School, Gurgaon are the
        intellectual property of Lotus Valley School, Gurgaon. All rights
        reserved.{" "}
      </p>
      <div className="z-50 flex w-screen flex-col items-center justify-between gap-y-5 bg-slate-950 px-20 py-5 text-neutral-100 lg:h-20 lg:flex-row lg:py-0">
        {" "}
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Powered by Entab: <a href="https://lviscampuscare.org">CampusCare</a>
        </p>
        <p className="z-10 leading-7 text-neutral-100">
          &copy; Jayan Sunil, 2024
        </p>
        <p className="leading-7">
          Designed and Developed by:{" "}
          <a href="https://github.com/JayanAXHF">Jayan Sunil</a>
        </p>
      </div>
    </div>
  );
}
