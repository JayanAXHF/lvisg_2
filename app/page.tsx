"use client";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => <p>Loading...</p>,
});
const Cards = dynamic(() => import("../components/Cards"));
const Footer = dynamic(() => import("../components/Footer"));
const ImageSlider = dynamic(() => import("../components/ImageSlider"), {
  ssr: false,
});
const LgNavbar = dynamic(() => import("../components/LgNavbar"), {
  ssr: false,
});
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const Partner = dynamic(() => import("../components/Partner"), { ssr: false });

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
