import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { bannerCards } from "@/data";
import { TextGenerateEffect } from "./ui/text-generate";
import "../app/globals.css";

const Cards = () => {
  return (
    <div className="relative flex w-screen flex-col items-center justify-center overflow-hidden rounded-md bg-white pb-20 pt-10 antialiased dark:bg-black dark:bg-grid-white/[0.05]">
      <TextGenerateEffect
        words="Events at Lotus Valley International School Gurugram"
        className="px-5 pb-10 text-center"
      />
      <InfiniteMovingCards
        items={bannerCards}
        direction="right"
        speed="slow"
        className="w-full"
      />
    </div>
  );
};

export default Cards;
