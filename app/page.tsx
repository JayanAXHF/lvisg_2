"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between ">
      <Navbar />
      <Hero />
    </div>
  );
}
