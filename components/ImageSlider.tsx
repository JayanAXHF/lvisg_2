import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/image-slider";
import Link from "next/link";
import Highlight from "./ui/hero-highlight";

const ImageSlider = () => {
  const images = [
    "/carousel/banner-8524-2.jpg",
    "https://www.edustoke.com/assets/uploads-new/lotus-valley-international-school-1495268531-2.jpg",
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
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 py-4">
          A stunning{" "}
          <Highlight className="text-neutral-900 py-0">
            new-age design
          </Highlight>
          ,
          <br /> is symbolic of our ethos,
          <br /> the modern approach we take to create the Joy of Learning
        </motion.p>
        <Link
          href="/approach"
          className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4"
        >
          <span>Learning Approach</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </Link>
      </motion.div>
    </ImagesSlider>
  );
};

export default ImageSlider;
