import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { bannerCards } from "@/data";
import { TextGenerateEffect } from "./ui/text-generate";
import "../app/globals.css";

const Cards = () => {
  return (
    <div className=" w-screen pt-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pb-20">
      <TextGenerateEffect
        words="Events at Lotus Valley International School Gurugram"
        className="pb-10 px-5 text-center"
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
