"use client";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

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
        "relative flex size-full items-center justify-center overflow-hidden",
        className,
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {children}
      {overlay}
      <div
        className={cn("absolute inset-0 z-40 bg-black/60", overlayClassName)}
      />

      <Image
        src={src}
        className="image absolute inset-0 size-full object-cover object-center"
        alt="bg-image"
      />
    </div>
  );
};
