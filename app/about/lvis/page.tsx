"use client";

import { HeroWithImage } from "@/components/ui/hero-image";
import { motion } from "framer-motion";
import React from "react";
import { Highlight } from "@/components/ui/hero-highlight";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Footer from "@/components/Footer";
import Image from "next/image";
import LgNavbar from "@/components/LgNavbar";
import Navbar from "@/components/Navbar";
import AboutBreadcrum from "@/components/AboutBreadcrum";

const Page = () => {
  return (
    <div className="min-h-screen w-full  dark:bg-black bg-white  dark:bg-dot-white/[0.09] bg-dot-black/[0.1] relative flex items-center justify-center flex-col overflow-x-none">
      <span className="hidden lg:flex *:z-50">
        <LgNavbar />
      </span>{" "}
      <span className="flex lg:hidden">
        <Navbar />
      </span>
      <HeroWithImage className="h-[50rem]" src="/banner-vision.jpg">
        <motion.div className="z-50 flex flex-col justify-center items-center">
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 py-4">
            <Highlight className="text-white">Vision</Highlight>
          </motion.p>
        </motion.div>
      </HeroWithImage>
      <TracingBeam className="px-6 w-[90%] flex justify-center mb-10">
        <div className="w-[1401px]  px-20  py-20">
          <div className=" text-left w-full">
            <AboutBreadcrum aboutPage={"About Us"} />
          </div>
          <h2 className="my-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Vision
          </h2>

          <div className="vision mb-10">
            <div className="w-full grid grid-flow-col grid-cols-3">
              <span className="col-span-2">
                <p className="leading-7 [&:not(:first-child)]:mt-6 ">
                  At Lotus Valley International School, Gurugram, we aspire to
                  craft socially conscious, self-aware and responsible global
                  citizens who will construct, shape, and serve society. The
                  school proposes to create a system that is aligned with the{" "}
                  <span className="font-bold">
                    aspirational goals of state-of-the-art education, including
                    SDG4
                  </span>{" "}
                  while building upon India&apos;s traditions and value systems.
                  The school lays particular emphasis on the development of the
                  creative potential of each individual based on the principle
                  that education must develop not only cognitive capacities but
                  also social, ethical, and emotional dimensions and
                  dispositions.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  The school aims at empowering each child with a deep, broad,
                  and strong fundament of knowledge and life skills. We firmly
                  believe in equipping our learners with 21st Century Skills
                  such as{" "}
                  <span className="font-bold">
                    Critical and Creative Thinking, Character Building,
                    Comprehension, Communication, Collaboration, Commitment,
                    Confidence, Digital Literacy, Leadership, Social Skills,
                    Initiative &amp; Innovation
                  </span>{" "}
                  to facilitate holistic development and character building. We
                  strive to create a stimulating and inclusive environment where
                  children learn effortlessly and are supported by our
                  pioneering pedagogies in recognizing, achieving, and whetting
                  their innate potential.
                </p>
              </span>
              <Image
                src={"/vision1668497851.jpg"}
                width={467}
                height={467}
                alt="vision photo"
                className="h-full aspect-[4/3] rounded-xl"
              />
            </div>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              The goal is to create accomplished, intrinsically motivated
              learners, capable of shaping the Nation&apos;s future. It is our
              consistent endeavour to enable learners to flourish on an
              insightfully designed curriculum that cradles Indian Ethos and
              Culture, thus facilitating their moral and spiritual development.
              We are dedicated to edifying them with the virtues of honesty,
              dignity, and justice, which sets them on the decorous path from
              the very beginning.
            </p>
          </div>
          <div className="mission mb-10">
            <h2 className="mb-10  scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Mission
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Our mission is to develop good human beings, capable of
              independent rational thought and action, with compassion and
              humaneness, with courage and resilience, with scientific temper
              and creative groundbreaking imagination, with a manifestation of a
              progressive and peaceful society.
            </p>
          </div>
          <div className="school_motto mb-10">
            <h2 className="mb-10  scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              School Motto
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              The School Motto &apos;Arise! Awake! And Stop Not till The Goal Is
              Reached&apos; is the clarion call for scholars at Lotus Valley
              International School Gurugram. We encourage our learners to
              discover their passion and decide their goals in life.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              We encourage them to find the joys of learning and make life a
              very mindful and meaningful experience. We help our learners
              discover who they really are and empower them to do what they
              love.
            </p>
          </div>
          <div className="emblem mb-10">
            <h2 className="mb-10  scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              School Emblem
            </h2>
            <div className="w-full grid grid-flow-col grid-cols-3 gap-x-10">
              <Image
                src={"/school_emblem.jpg"}
                width={467}
                height={467}
                alt="vision photo"
                className="h-full aspect-[4/3] rounded-xl"
              />
              <span className="col-span-2">
                <p className="leading-7 [&:not(:first-child)]:mt-6 ">
                  Lotus Valley International School is passionately committed to
                  pursue excellence in every conceivable field. For us every
                  child is a leader of tomorrow and we leave no stone unturned
                  to ensure that every Lotusian is given an opportunity to
                  excel.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  <span className="font-bold">
                    The Four Segments of the Shield represent different aspects
                    of learning:
                  </span>{" "}
                </p>
                <ul className="my-6 ml-6 list-decimal [&>li]:mt-2">
                  <li>
                    The <span className="font-bold">GLOBE</span> signifies the
                    global outlook necessary for the leaders of tomorrow.
                  </li>
                  <li>
                    The <span className="font-bold">BOOK</span> stands for
                    knowledge.
                  </li>
                  <li>
                    The <span className="font-bold">TORCH</span> embodies hope
                    and integrity that ignite the minds of young people and
                    light their path towards brilliance and accomplishment.
                  </li>
                  <li>
                    The <span className="font-bold">VEENA</span> belongs to
                    Saraswati, the Goddess of learning and speech. It is the
                    symbol of creativity, culture and refinement.
                  </li>
                </ul>
              </span>
            </div>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              The school emblem draws inspiration from the five classical
              elements -{" "}
              <span className="font-bold">EARTH, WATER, FIRE, AIR and SKY</span>
              . We endeavour to instil in our learners the attributes of the
              five great elements. With the Lotus of transcendence flanked by
              two swans at the top, the crest highlights the subtlety of sky and
              swan’s unique ability to separate milk from water, just like the
              discovering minds we inculcate in our learners.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              The colour <b>BLUE</b> reminds us of the flowing nature of water
              and motivates learners to keep advancing towards their goals. The
              colour <b>YELLOW</b> brings alive the spirit of fire along with
              its strong will and energy while the <b>GOLDEN</b> colour
              represents nurturing and stable quality of earth. The flags with
              the initials of the school are the omnipresent ambassadors of
              direction like the ever-present air.
            </p>
          </div>
          <div className="vision mb-10">
            <h2 className="mb-10  scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Avant-Garde Philosophy
            </h2>
            <div className="w-full grid grid-flow-col grid-cols-3">
              <span className="col-span-2">
                <blockquote className="border-l-2 pl-6 italic">
                  &apos;&apos;Education should bring to light the ideal of the
                  individual.&apos;&apos;
                </blockquote>
                <p className="leading-7 [&:not(:first-child)]:mt-6 ">
                  We believe that every child is unique. Each one has a
                  different pace of learning, which needs to be discovered by
                  the school. Therefore, Lotus Valley International School
                  strives to understand and fulfil the individual needs of its
                  learners.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  We tickle the imagination of our children so that they can
                  think-out of-the-box and grasp concepts faster. We encourage
                  them to explore, experience, experiment and find their own
                  path of discovery. We provide them with a stimulating
                  environment where love, affection and joy bring out the best
                  in them.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  We have an education system that builds the learners’
                  character and empowers them in all aspects – mental, physical,
                  emotional and social.
                </p>
              </span>
              <Image
                src={"/core-philosophy.jpg"}
                width={`${467}`}
                height={`${100}`}
                alt="vision photo"
                className="h-full aspect-[4/3] rounded-xl"
              />
            </div>
          </div>
        </div>
      </TracingBeam>
      <Footer />
    </div>
  );
};

export default Page;
