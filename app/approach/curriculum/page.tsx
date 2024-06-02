"use client";

// ----
import { HeroWithImage } from "@/components/ui/hero-image";
import { motion } from "framer-motion";
import React from "react";
import dynamic from "next/dynamic";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Footer from "@/components/Footer";
import Image from "next/image";
import LgNavbar from "@/components/LgNavbar";
import Navbar from "@/components/Navbar";
import ApproachBreadCrum from "@/components/ApproachBreadCrum";
const Highlight = dynamic(() => import("@/components/ui/hero-highlight"), {
  ssr: true,
});
// ----

const Page = () => {
  return (
    <React.Fragment>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-white bg-dot-black/[0.1] dark:bg-black dark:bg-dot-white/[0.09]">
        <span className="hidden *:z-50 lg:flex">
          <LgNavbar />
        </span>{" "}
        <span className="flex lg:hidden">
          <Navbar />
        </span>
        <HeroWithImage className="h-[50rem]" src="/banner-middle.jpg">
          <motion.div className="z-50 flex flex-col items-center justify-center">
            <motion.p className="bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-6xl">
              <Highlight className="text-white">Curriculum</Highlight>
            </motion.p>
          </motion.div>
        </HeroWithImage>
        <TracingBeam className="mb-10 flex w-[90%] justify-center lg:px-6">
          <div className="py-20 lg:w-[1401px] lg:px-20">
            <div className="w-full text-left">
              <ApproachBreadCrum approachPage={"Curriculum"} />
            </div>
            <h2 className="my-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Primary Wing
            </h2>
            <div className="vision mb-10">
              <blockquote className="mt-6 border-l-2 pl-6 italic">
                Every child is gifted, they just unwrap their packages at
                different times
              </blockquote>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                At <b>Lotus Valley International School</b>, Gurgaon we believe
                in enabling children to realize their own potential to
                excellence and to nurture their young minds through knowledge
                and exposure. The Primary wing opens its arms to the little
                learners who walk into our world with expectations and desires.
                other.
              </p>
              <div className="grid h-max w-full grid-flow-row grid-cols-1 lg:!grid-flow-col lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-10">
                <span className="col-span-2 w-full">
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    It is our endeavor to facilitate them to develop as social
                    beings by guiding them to interact and cooperate with each.
                    Our Curriculum incorporates current Educational thinking and
                    the most effective pedagogical practices. It represents a
                    process of revision that is both evolutionary and
                    developmental. We firmly believe in taking children out of
                    the classroom spaces to experience the real world through
                    varied experiments and hand-on activities. Our aim is to
                    foster the child in all dimensions of his or her life—
                    moral, spiritual, cognitive, emotional, imaginative,
                    aesthetic, social and physical. In order to realize this
                    view of the child and education, our curriculum outlines a
                    detailed and structured framework of content that is
                    comprehensive and flexible. It promotes the active
                    involvement of children in a learning process that is
                    imaginative and stimulating. The ability to think
                    critically, to apply learning and to develop flexibility and
                    creativity are also important factors in the success of the
                    child&apos;s life.
                  </p>
                </span>
                <div className="w-full lg:col-span-2">
                  <Image
                    src={"/curriculum/3.jpg"}
                    alt="vision photo"
                    className="aspect-auto h-full rounded-xl"
                  />
                </div>
              </div>

              <div className="mt-6 grid h-max w-full grid-flow-row grid-cols-1 gap-y-6 lg:!grid-flow-col lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-10">
                <Image
                  src={"/curriculum/4.jpg"}
                  width={467}
                  height={467}
                  alt="vision photo"
                  className="aspect-auto h-full rounded-xl"
                />
                <span className="col-span-2">
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Various activities are designed round the year keeping in
                    view the wholesome development of children in mind. Field
                    trips, Training workshops & excursions are planned in tandem
                    with the curriculum; International Days are celebrated to
                    expose the learners to wide cultural diversity that broadens
                    their horizon. The school focuses on taking learning to
                    another level through the celebration of subjects over weeks
                    such as -Literary, Technomathematik, Eloquence week etc.
                    which gives an impetus to children&apos;s logical and
                    creative thinking. Reading books aloud to children
                    stimulates their imagination and expands their understanding
                    of the world besides developing their language and listening
                    skills.
                  </p>
                </span>
              </div>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                The extensive Reading Programme from Pre Primary to Grade – III
                demands the involvement of learners, parents and mentors on a
                common platform. This not only strengthens the bond between the
                three, but also enhances the learner’s vocabulary with developed
                interest for reading. Class Assemblies are another important
                feature of our School life. They act as a medium to reflect our
                positive school ethos and value based education through
                student’s participation and achievements. Our School also
                follows a Value based ‘Mogly Gurukul’ Programme with an aim to
                inculcate values into our young learners at the earliest stages
                of life. Fitkid is yet another successful programme that helps
                the learners in identifying pros and cons of good health,
                nutrition, safety and hygiene. Therefore, an important goal of
                our curriculum is to enable children to learn how to learn and
                to develop an appreciation of the value and practice of lifelong
                learning.
              </p>
            </div>
          </div>
        </TracingBeam>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Page;
