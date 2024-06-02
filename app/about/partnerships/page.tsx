"use client";

import AboutBreadcrum from "@/components/AboutBreadcrum";
import Footer from "@/components/Footer";
import LgNavbar from "@/components/LgNavbar";
import Navbar from "@/components/Navbar";
import { HeroWithImage } from "@/components/ui/hero-image";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { motion } from "framer-motion";
import React from "react";
import Highlight from "@/components/ui/hero-highlight";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-white bg-dot-black/[0.1] dark:bg-black dark:bg-dot-white/[0.09]">
        <span className="hidden *:z-50 lg:flex">
          <LgNavbar />
        </span>{" "}
        <span className="flex lg:hidden">
          <Navbar />
        </span>
        <HeroWithImage
          className="h-[50rem]"
          src="/partnerships/banner-partnership.jpg"
        >
          <motion.div className="z-50 flex flex-col items-center justify-center">
            <motion.p className="bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-6xl">
              <Highlight className="text-white">Partnerships</Highlight>
            </motion.p>
          </motion.div>
        </HeroWithImage>
        <TracingBeam className="mb-20 flex w-[90%] justify-center lg:px-6">
          <div className="pt-20 lg:w-[1401px] lg:px-20">
            <div className="w-full text-left">
              <AboutBreadcrum aboutPage={"Partnerships"} />
            </div>
            <h2 className="my-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Partnerships
            </h2>

            <div className="dp-message mb-10">
              <h3 className="mb-5 mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                Foreign partnerships
              </h3>
              <blockquote className="my-6 border-l-2 pl-6 italic">
                Globalization is not a monolithic force but an evolving set of
                consequences. Some good, some thought-provoking and some
                challenging. It is the new reality.
                <br />- John B Larsen
              </blockquote>{" "}
              <div className="grid h-max w-full grid-flow-row grid-cols-1 lg:!grid-flow-col lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-10">
                <span className="col-span-2">
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Globalization 1.0 began around 1492, and the world went from
                    size large to size medium. In Globalization 2.0, the era
                    that introduced us to multinational companies, it went from
                    size medium to size small. And then around 2000 came
                    Globalization 3.0, in which the world went from being small
                    to tiny with the Globalization seeping into classrooms!
                  </p>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Lotus Valley International School not only takes pride in
                    its most modern infrastructure, but also in its invasion
                    into the global community intertwining the S.T.E.A.M
                    education with an international zest. The school has always
                    encouraged its learners to stretch their scholastic and
                    co-scholastic horizons beyond boundaries and probe into the
                    new-fangled all-encompassing world. Ours is a young school
                    with high aspirations and a desire to soar up into the high
                    skies viewing the world as one global village.
                  </p>
                </span>
                <Image
                  src={"/partnerships/foreign-collaboration.jpg"}
                  width={467}
                  height={"100"}
                  alt="foreign collaboration"
                  className="col-span-1 h-auto w-full rounded-xl"
                />
              </div>{" "}
              <blockquote className="my-6 border-l-2 pl-6 italic">
                &quot;A community that learns together, excels together. When we
                learn and work together, we prosper together. We need to form
                such communities that mutually benefit from each other and what
                better can it be when these communities being global&quot;.
              </blockquote>{" "}
              <p className="mb-6 leading-7 [&:not(:first-child)]:mt-6">
                Our journey to global networking began in 2012 with our tie up
                Brown University, an Ivy League Research University, Rhode
                Island, United States. Brown University and Lotus Valley
                alliance has opened new doors for our students and teachers to
                reach the pinnacle. The experience so far has been quite
                enriching, both in terms of interaction of prof. Kenneth Wong
                and his team of teachers and students with our students mainly
                through Skype sessions. The prospects of our learners would be
                in best hands with a guarantee of a lucrative future.
              </p>
              <div className="grid h-max w-full grid-flow-row grid-cols-1 lg:!grid-flow-col lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-10">
                <Image
                  src={"/partnerships/th1.jpg"}
                  width={467}
                  height={"100"}
                  alt="foreign collaboration"
                  className="col-span-1 h-auto w-full rounded-xl"
                />
                <span className="col-span-2">
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Working for The International Award in 2013 brought us face
                    to face with The Ravensbourne School, Bromley in UK. The
                    association of Lotus Valley International School with The
                    Ravensbourne School, UK enters its third year as we
                    constantly and collaboratively prepare our young learners
                    for further experiences and the world of work. It all began
                    with the visit of the Principal, Mrs. Anita Malhotra
                    followed by Headmistress Mrs. Harvinder Kaur to the UK
                    school while we too hosted Ms. Louise in Oct, 2014, a
                    Geography teacher, Mr. Phil Croft, a History and Law
                    facilitator, in the month of November, 2015 and English
                    facilitators, Mr. David Jordan and Mrs. Andree Jordan, in
                    the month of Dec, 2015.
                  </p>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    The ISA project also gave our learners an opportunity to
                    interact with Watphramahathat School, Nakhon Si Thammarat
                    province, Thailand. The learners worked on a project called
                    &apos;Families&apos; and exchanged views about the family
                    system in their societies.
                  </p>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    In today&apos;s era, multilingualism has become more than
                    just &apos;important&apos;. Learning Mandarin is more than
                    learning a language, it enables us to explore one of the
                    most ancient culture of the world and is the most widely
                    spoken language in the world. Lotus Valley decided to
                    venture into the field of Chinese Language with the start of
                    the Mandarin Club which prompted us to form the &apos;Lotus
                    Valley Mandarin Club&apos; in 2015-16. The learning of
                    Mandarin has been taking place through Skype sessions with
                    The Ravensbourne School, UK and Suzhou High School, China.
                  </p>
                </span>
              </div>{" "}
              <div className="grid h-max w-full grid-flow-row grid-cols-1 lg:!grid-flow-col lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-10">
                <span className="col-span-2">
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Discussion over partnership was held in July, 2016, between
                    Mrs. Anita Malhotra, Principal of Lotus Valley International
                    School, Gurgaon & Mr. Joachim Rohrer, Principal,{" "}
                    <b>Clara Schumann Gymnasium, Lahr, Germany</b> to formalize
                    the future prospects in terms of student exchange in the
                    year (2016-18). The Indo-German Exchange Programme brought
                    together learners of both schools for a face to face
                    experiential learning in the year 2016-17 with the visit of
                    the German students to Gurgaon in October, 2016 and
                    educational trip of our learners in May, 2017.
                  </p>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Lotus Valley is in the process of working-out
                    student-teachers’ exchange programme with Australian schools
                    and universities in collaboration with the Australian High
                    Commission in Delhi. Our Principal, Mrs. Anita Malhotra,
                    visited the highly prestigious International Schools Mission
                    in Australia, in the month of April, 2016 for discussions
                    regarding the same. There have been encouraging response
                    from The University of Technology, Sydney and the Bond
                    University in addition to exposure to working towards
                    India-Australia employability in the years to come. The
                    school hosted Ms Li Richardson from Bachhus Marsh Grammar
                    School, Victoria in January, 2017 which will be reciprocated
                    by the visit of Ms Anjana Menon to Australia in mid-year,
                    2017.
                  </p>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    India&apos;s talent has to play a larger role at an
                    International level and Indian Institutes have to prepare to
                    stay at the cutting edge of teaching technology. This can be
                    best done by benchmarking best teaching practices and
                    curriculum details across the globe. Through globalization
                    we aim to re-examine some of our ideas, and look at ideas
                    from other countries, from other cultures and open ourselves
                    to them.
                  </p>
                </span>
                <Image
                  src={"/partnerships/big5.jpg"}
                  width={467}
                  height={"100"}
                  alt="foreign collaboration"
                  className="col-span-1 h-auto w-full rounded-xl"
                />
              </div>{" "}
            </div>
            <blockquote className="my-6 border-l-2 pl-6 italic">
              &quot;The experiences are lovely, enriching and inspiring, But we
              have long journey to undertake, And miles to go before we
              rediscover, And miles to go before outcomes we garner &quot;.
            </blockquote>
          </div>
        </TracingBeam>
        <Footer />
      </div>
    </div>
  );
};

export default page;
