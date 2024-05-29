"use client";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const HeroWithImage = ({
  src,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  src: string;
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {children}
      {overlay}
      <div
        className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
      />

      <img
        src={src}
        className="image h-full w-full absolute inset-0 object-cover object-center"
        alt="bg-image"
      />
    </div>
  );
};
