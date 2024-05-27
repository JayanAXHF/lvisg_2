"use client";

import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";
import LgNavbar from "@/components/LgNavbar";
import Navbar from "@/components/Navbar";
import Partner from "@/components/Partner ";

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen flex-col overflow-hidden">
        <Hero />
        <Cards />
        <ImageSlider />
        <Partner />
        <Footer />
      </div>
      <span className="hidden lg:flex *:z-50">
        <LgNavbar />
      </span>{" "}
      <span className="flex lg:hidden">
        <Navbar />
      </span>
    </div>
  );
}
