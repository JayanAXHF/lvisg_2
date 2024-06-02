import React from "react";
import Image from "next/image";

const Partner = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-12 overflow-hidden bg-slate-100 py-20 antialiased">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Partnered With
      </h2>

      <div className="flex h-max max-w-7xl flex-col gap-x-20 gap-y-10 px-10 py-5 md:flex-row">
        <Image
          src="/partner/L032-IDS_Final-2020-23-01.jpg"
          className="h-16 w-auto border-2 border-slate-600 md:h-24 lg:h-36"
          alt="partner logo"
          width={100}
          height={100}
        />
        <Image
          src="/partner/ucas.jpg"
          className="h-16 w-auto border-2 border-slate-600 md:h-24 lg:h-36"
          alt="partner logo"
          width={100}
          height={100}
        />
        <Image
          src="/partner/WCRC.jpg"
          className="h-16 w-auto border-2 border-slate-600 md:h-24 lg:h-36"
          alt="partner logo"
          width={100}
          height={100}
        />
        <Image
          src="/partner/fis.png"
          className="h-16 w-auto border-2 border-slate-600 md:h-24 lg:h-36"
          alt="partner logo"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Partner;
