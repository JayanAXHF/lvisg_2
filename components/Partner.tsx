import React from "react";

const Partner = () => {
  return (
    <div className="py-20 overflow-hidden antialiased flex flex-col gap-y-12 justify-center  bg-slate-100 w-full items-center">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Partnered With
      </h2>

      <div className="max-w-7xl py-5 h-max px-10 flex md:flex-row   flex-col gap-y-10 gap-x-20">
        <img
          src="/partner/L032-IDS_Final-2020-23-01.jpg"
          className="lg:h-36 h-16 md:h-24 w-auto border-2 border-slate-600"
        />
        <img
          src="/partner/ucas.jpg"
          className="lg:h-36 h-16 md:h-24 w-auto border-2 border-slate-600"
        />
        <img
          src="/partner/WCRC.jpg"
          className="lg:h-36 h-16 md:h-24 w-auto border-2 border-slate-600"
        />
        <img
          src="/partner/fis.png"
          className="lg:h-36 h-16 md:h-24 w-auto border-2 border-slate-600"
        />
      </div>
    </div>
  );
};

export default Partner;
