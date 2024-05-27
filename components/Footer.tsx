"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { WobbleCard } from "./ui/wobblecard";

export default function Footer() {
  return (
    <div className="lg:h-[29rem] relative w-full overflow-hidden bg-lvis-red lg:bg-slate-900 flex flex-col items-center justify-center rounded-lg ">
      <div className="grid grid-flow-row content-between py-0">
        <div className="absolute inset-0 w-full h-full bg-lvis-red lg:bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes className="hidden lg:flex" />
        <div className="w-full px-10 h-full py-10 grid lg:grid-cols-8 grid-flow-row  justify-between gap-x-5 items-center ">
          <div className="h-full lg:col-span-3 z-50 ">
            <img className="h-auto w-auto" src="/logo_white.png" />
          </div>
          <div className="lg:col-span-5 grid lg:grid-cols-4 gap-x-10 lg:grid-flow-row gap-y-8">
            <div className="col-span-2">
              <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-yellow-800  lg:bg-teal-800/[0.7] text-white z-10 items-start py-0">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Quick Links
                </h4>
                <ul className="  list-none [&>li]:mt-2 ">
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
                <ul className="  list-none [&>li]:mt-2 ">
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
      <div className="z-50 bg-slate-950 text-white lg:h-20 w-screen flex flex-col gap-y-5 lg:flex-row px-20 items-center justify-between py-5 lg:py-0">
        {" "}
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Powered by Entab: <a href="https://lviscampuscare.org">CampusCare</a>
        </p>
        <p className="leading-7 ">
          &copy; FRXGFA 2024, rights reserved
        </p>
        <p className="leading-7 ">
          Designed and Developed by:{" "}
          <a href="https://github.com/JayanAXHF">Jayan Sunil</a>
        </p>
      </div>
    </div>
  );
}
