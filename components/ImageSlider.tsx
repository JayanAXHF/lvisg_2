import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/image-slider";
import Link from "next/link";
import Highlight from "./ui/hero-highlight";

const ImageSlider = () => {
  const images = [
    "/carousel/banner-8524-2.jpg",
    // "https://www.edustoke.com/assets/uploads-new/lotus-valley-international-school-1495268531-2.jpg",
    "/hm-learning.jpg",
  ];
  return (
    <ImagesSlider className="h-[50rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col items-center justify-center"
      >
        <motion.p className="bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-6xl">
          A stunning{" "}
          <Highlight className="py-0 text-neutral-900">
            new-age design
          </Highlight>
          ,
          <br /> is symbolic of our ethos,
          <br /> the modern approach we take to create the Joy of Learning
        </motion.p>
        <Link
          href="/approach"
          className="relative mx-auto mt-4 rounded-full border border-emerald-500/20 bg-emerald-300/10 px-4 py-2 text-center text-white backdrop-blur-sm"
        >
          <span>Learning Approach</span>
          <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
        </Link>
      </motion.div>
    </ImagesSlider>
  );
};

export default ImageSlider;
