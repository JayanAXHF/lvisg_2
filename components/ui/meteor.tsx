// "use client";

// import { cn } from "@/utils/cn";
// import clsx from "clsx";
// import React, { useEffect, useState } from "react";

// export const Meteors = ({
//   number,
//   className,
// }: {
//   number?: number;
//   className?: string;
// }) => {
//   const meteors = new Array(number || 20).fill(true);
//   const [randNum, setRandNum] = useState<string[]>([]);
//   const [leftNum, setLeftNum] = useState<string[]>([]);
//   const [duration, setDuration] = useState<string[]>([]);
//   useEffect(() => {
//     let temp: string[] = [];
//     let leftTemp: string[] = [];
//     let tempDuration: string[] = [];
//     for (let index = 0; index < (number ? number : 20); index++) {
//       temp.push(Math.random() * (0.8 - 0.2) + 0.2 + "s");
//       leftTemp.push(Math.floor(Math.random() * (400 - -400) + -400) + "px");
//       tempDuration.push(Math.floor(Math.random() * (10 - 2) + 2) + "s");
//     }

//     setRandNum(temp);
//     setLeftNum(leftTemp);
//     setDuration(tempDuration);
//   }, []);

//   return (
//     <>
//       {meteors.map((el, idx) => (
//         <span
//           key={"meteor" + idx}
//           className={cn(
//             "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
//             "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
//             className
//           )}
//           style={{
//             top: 0,
//             left: leftNum[idx],
//             animationDelay: randNum[idx],
//             animationDuration: duration[idx],
//           }}
//         ></span>
//       ))}
//     </>
//   );
// };import { cn } from "@/utils/cn";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};
