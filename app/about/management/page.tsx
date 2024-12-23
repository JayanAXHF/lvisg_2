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
import { WobbleCard } from "@/components/ui/wobblecard";
import advisoryBoardMembers from "@/data/advisoryBoardMembers";
import AboutBreadcrum from "@/components/AboutBreadcrum";
const Highlight = dynamic(() => import("@/components/ui/hero-highlight"), {
  ssr: true,
});
// ----

const Page = () => {
  return (
    <div className="relative mb-0 flex w-full flex-col items-center justify-center bg-white bg-dot-black/[0.1] dark:bg-black dark:bg-dot-white/[0.09]">
      <span className="hidden *:z-50 lg:flex">
        <LgNavbar />
      </span>{" "}
      <span className="flex lg:hidden">
        <Navbar />
      </span>
      <HeroWithImage className="h-[50rem]" src="/banner-about-management.jpg">
        <motion.div className="z-50 flex flex-col items-center justify-center">
          <motion.p className="bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-6xl">
            <Highlight className="text-white">Management</Highlight>
          </motion.p>
        </motion.div>
      </HeroWithImage>
      <TracingBeam className="mb-20 flex w-[90%] items-center justify-center lg:px-6">
        <div className="w-full pt-20 lg:w-[1401px] lg:px-20">
          <div className="w-full text-left">
            <AboutBreadcrum aboutPage={"Management"} />
          </div>
          <h2 className="my-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Management
          </h2>

          <div className="dp-message mb-10 w-full">
            <h3 className="mb-5 mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              Director-Principal&apos;s Message
            </h3>
            <div className="grid h-max w-full grid-flow-row grid-cols-1 lg:!grid-flow-col lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-10">
              <div className="row-span-1 lg:!col-span-1">
                <Image
                  src={"/management/director-principal.jpg"}
                  alt="director-principal's photo"
                  className="aspect-auto size-auto rounded-xl lg:h-auto lg:!w-full"
                  width={467}
                  height={467}
                />
              </div>

              <span className="row-span-1 h-max lg:!col-span-2">
                <p className="font-bold leading-7 [&:not(:first-child)]:mt-6">
                  Mrs Anita Malhotra
                </p>
                <p className="font-bold leading-7 [&:not(:first-child)]:mt-6">
                  Delhi State & CBSE National Awardee
                </p>
                <blockquote className="mt-6 border-l-2 pl-6 italic">
                  &quot;Perfection is not attainable. But if we chase
                  perfection, we can catch excellence.&quot;
                </blockquote>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Our Director-Principal, Mrs Anita Malhotra is a visionary and
                  a renowned educationist whose deep-rooted commitment and
                  out-of-the-box approach has led the institution to achieve
                  significant milestones and create benchmarks in the world of
                  education. Mrs Malhotra founded this citadel of learning with
                  the goal of not only imparting quality education and cutting
                  edge in Technology to her learners, but also to establish a
                  strong foundation of life skills, munificence and humanitarian
                  values. Under her dynamic mentorship, many pioneering
                  programmes have been designed and implemented in the school
                  that fan the spark of curiosity and creativity in Lotusians
                  from a young age. Consistent impetus is provided to learners
                  to enable them to actualize their innate and unique potential,
                  acquire creative and critical thinking skills to become
                  confident and thoughtful young global citizens.
                </p>
              </span>
            </div>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              A recipient of the{" "}
              <b>CBSE National and Delhi State Teacher&apos;s Awards</b>,
              besides more than 50 other prestigious awards for her contribution
              in the field of education. Mrs Malhotra comes with a vast
              experience of 46 years and has been with the Delhi Public School
              Society & its schools for 30 years, first as a teacher and then as
              a Principal. Along with her rich experience of 30 years as a
              teacher at DPS R.K.Puram and later as a Founder Head at DPS
              Dwarka, DPS Vasant Vihar, DPS Dubai, DPS Bangkok and Summer Fields
              School, Mrs Malhotra&apos;s passion for providing holistic
              education, steadfast emphasis on ethics, integrity and empathy for
              people has enabled the school to grow from strength to strength
              and gain recognition as one of the best CBSE schools in India. She
              has traveled extensively around the Globe and has been a part of
              the Technical Delegation at the VIII Asian Games, Bangkok in the
              year 1978.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              As the Head of the school, her guidance and active involvement in
              the day-to-day functioning of the school ensures that all
              stakeholders including the School Management, mentors and parents
              are on the same page and work seamlessly to bring out the best in
              each child. By making available opportunities for continuous
              professional development, Mrs Malhotra has empowered educators
              with enhanced knowledge, competence and expertise to deliver value
              education and excellence in academics. Over the years, she has
              effortlessly played different roles in the form of a guide,
              parent, friend and mentor as per the needs of her learners and
              faculty.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              The Lotus Valley family is proud to have Mrs Malhotra as the
              leader of the institution and her accomplishments serve as an
              inspiration to one and all. Guided by her vision we have certainly
              come a long way, but the journey in pursuit of perfection will
              always continue&hellip;
            </p>
          </div>

          <div className="vp mb-10">
            <h2 className="mb-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Vice-Principal&apos;s Message
            </h2>
            <div className="grid h-max w-full grid-flow-row grid-cols-1 gap-y-10 lg:!grid-flow-col lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-10">
              <div className="row-span-1 lg:!col-span-1">
                <Image
                  src={"/management/vice-principal.jpg"}
                  width={467}
                  height={467}
                  alt="Vp Photo"
                  className="aspect-auto h-auto w-full rounded-xl lg:h-auto lg:!w-full"
                />
              </div>
              <span className="col-span-2">
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  <b> Mrs Ruchi Joshi</b>
                </p>
                <p className="leading-7">
                  Mrs Ruchi Joshi&apos;s teaching career of almost fourteen
                  years has been shaped through experiences at various
                  institutions across the country. Prior to joining Lotus
                  Valley, she was the Head of the English Department at KR
                  Mangalam World School, GK-II, New Delhi.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  In her capacity as the Vice Principal, Mrs Joshi coordinates
                  with all department heads and class representatives of Grades
                  IX-XII on strengthening the Scholastic and Co-Scholastic
                  domains.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  She is the coordinator of the English Department at Lotus
                  Valley, and is passionately committed to building love for
                  literature in the learners. Her endeavor to nurture languages
                  took the shape of the School&apos;s bilingual literary event,
                  Mélange, in the year 2015. She is actively involved with
                  scripting and coordinating various school functions and
                  events, and is the Editor of the School&apos;s Annual Magazine
                  and Year Book. She is of the firm belief that innovation
                  should be an integral part of the teaching-learning process.
                  It has been her constant endeavour to enrich and enliven class
                  room teaching by integrating art, cinema and events and
                  happenings around the world. Her innovative lesson plans based
                  on cartoons and stereotypes have been included by the British
                  Council in their publication on Core Skills.
                </p>
              </span>
            </div>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Mrs Joshi is an enthusiastic learner driven by love for books. Her
              love for books dates back to her childhood days when she soaked in
              the magic of the written word with unbound enthusiasm. The thrill
              of the written word continues unabated in her life, and has to a
              large extent, shaped and moulded her as an individual. She eagerly
              looks forward to her classes wherein books are celebrated, art and
              films appreciated, and diverse perspectives and opinions find a
              platform. Her interactions with young minds at Lotus Valley have
              been a constant source of inspiration, and have provided her
              valuable insights into the teaching-learning process.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              In all her pursuits, Mrs Joshi aspires to nurture a thinking mind
              and a conscientious individual. She is of the fervent view that
              the &apos;Energy of the mind is the essence of Life&apos;.
            </p>
          </div>
          <div className="vp-mv mb-10">
            <h2 className="mb-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Vice-Principal&apos;s Message (Middle and Primary Wing)
            </h2>
            <div className="grid h-max w-full grid-flow-row grid-cols-1 gap-y-10 lg:!grid-flow-col lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-10">
              <div className="row-span-1 lg:!col-span-1">
                <Image
                  src={"/management/primary-wing-head-mistress.jpg"}
                  width={467}
                  height={467}
                  alt="Vppm Photo"
                  className="aspect-auto h-auto w-full rounded-xl lg:h-auto lg:!w-full"
                />
              </div>
              <span className="col-span-2">
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  <b> Ms Ritu Jawa</b>
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  With almost 2 decades of experience in the field of education
                  field and interaction with children of all age groups, Ms.
                  Ritu Jawa firmly believes in the principle of learning by
                  doing and propagates it well through her work. According to
                  her &quot;Learning becomes significantly more powerful when
                  students are given opportunities to learn in authentic and
                  real life situations&quot;. Lady Sriram Alumna and a Degree
                  holder in Fashion Designing, she says &quot;It&apos;s
                  essential to wear your smile and your attitude every time you
                  step out to face the world. We can be taught to perform but it
                  is pertinent for us to always reflect on our own actions to be
                  able to facilitate ourselves better in novel situations&quot;.
                  With the background knowledge of Psychology and specialization
                  in Guidance and Counselling, she creates a positive working
                  environment for the learners as well as the teachers. A
                  trained Kathak Dancer & a Choreographer, Ms Ritu has held
                  numerous shows and uses her creative vision in bringing forth
                  unique ideas. She has conducted several workshops on Language
                  Development at Elementary level & Early Childhood Education
                  and has played a vital role in designing the curriculum for
                  Primary School.
                </p>
              </span>
            </div>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              &quot;Redefining and introspecting one&apos;s work is an important
              tool for Growth and Development of any person, group or
              organization&quot; she says. She has been anchoring the Annual
              Fashion Shows for the NGO &mdash; Tamana for the past few years,
              which has further given her the opportunity to interact & work
              closely with the specially gifted students. She says
              &quot;Students are our GURUS, we learn every second from them,
              therefore before imparting knowledge it&apos;s important to part
              from our ego and soon we will be able to find solace and answers
              within&quot;
            </p>
          </div>
          <hr />
          <div className="patron my-10">
            <h2 className="mb-10 mt-5 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Patron&apos;s Message
            </h2>
            <div className="grid h-max w-full grid-flow-row grid-cols-1 gap-y-10 lg:!grid-flow-col lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-10">
              <div className="row-span-1 lg:!col-span-1">
                <Image
                  src={"/management/patrons.jpg"}
                  width={467}
                  height={467}
                  alt="vision photo"
                  className="aspect-auto w-full rounded-xl"
                />
              </div>
              <span className="col-span-2">
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  <b> Dr Shayama Chona</b>
                </p>
                <blockquote className="mt-6 border-l-2 pl-6 italic">
                  Their smile tells us &quot;I can do it, give me a chance but I
                  need you&quot; That is the truth. They need you, give them a
                  hand.
                  <br /> You give them an inch, they will run a mile.
                </blockquote>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Lotus Valley International School Gurugram considers it a
                  privilege to have Dr Shayama Chona, one of the most
                  accomplished educationists in the country, as its Patron. Dr
                  Chona has served the society and humanity with her timeless
                  dedication and received 54 awards including two National
                  Awards, namely Padma Shri and Padma Bhushan by the President
                  of India along with one State Award.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  An alumnus of the prestigious Maharani Gayatri Devi Girls
                  Public School, Dr Chona is the former principal of India’s
                  most prestigious school, Delhi Public School, R.K. Puram and
                  has been serving as a member of 97 Advisory Boards and
                  Managing Committees of 48 institutions.
                </p>
              </span>
            </div>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              A Member of Indian National Commission for cooperation with
              UNESCO, Governing Body of CBSE, National Mission for Empowerment
              of Women and Honorary Advisor in the Education Department of MCD,
              Dr Chona’s name finds mention in the Limca Book of World Records
              2007 for having received the maximum number of awards.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Passionately driven by her vision to create a world of inclusion
              through her NGO, ‘Tamana’, she has been tirelessly working towards
              facilitating education, overall betterment and acceptance of
              children with special needs. The NGO runs three schools offering
              integrated education for the children with special needs - Tamana
              Special School, Nai Disha, and School of Hope. The schools,
              nurtured by her optimism, love and selfless service, have made
              great strides to educe the excellence and potential of each
              special child. Dr Chona has proved to the world that nothing is
              beyond these children. Strengthened by her confidence in them and
              the multifarious opportunities provided, her students have walked
              the fashion runway, performed on stage and got trained in
              vocations on the basis of their ability, interest and aptitude.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Dr. Chona, whose life has been a convergence of love and abiding
              compassion for all, believes that it is imperative that the
              younger generation is given an opportunity to be with the children
              with special needs in inclusive classrooms. She has been the
              driving force behind creating a culture that promotes
              accessibility and inclusion within the Lotus Valley Family. She
              motivates the school as well as parents to nurture children in an
              atmosphere of discovery, enquiry, learning, expression and
              communication. Her journey in pursuit of inclusion is a testimony
              to the fact that when everyone is included, everyone wins.
            </p>
          </div>
          <div className="advisory-board mt-10">
            <h2 className="mb-10 mt-5 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Advisory Board Members
            </h2>
            <div className="flex flex-col gap-y-10">
              {advisoryBoardMembers.map((member, idx) => {
                return (
                  <>
                    <WobbleCard
                      containerClassName=" *:text-neutral-950 max-w-2xl lg:max-w-full mix-h-[500px]  lg:min-h-[600px] xl:min-h-[300px] bg-neutral-200/[0.7] text-white z-10 items-start py-0 px-0"
                      key={idx}
                    >
                      <div className="grid min-h-[500px] w-full grid-flow-row content-center items-center justify-items-center gap-5 lg:min-h-[600px] lg:grid-flow-col lg:grid-cols-3 xl:min-h-[300px]">
                        <div className="size-full lg:col-span-1">
                          <Image
                            width={500}
                            height={500}
                            src={`${member.img}`}
                            alt={member.name}
                            className="size-full min-w-full rounded-xl lg:size-auto"
                          />
                        </div>
                        <div className="size-full lg:col-span-2 lg:flex lg:flex-col lg:justify-center">
                          <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
                            {member.name}
                          </h3>
                          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                            {member.designation}
                          </h4>
                          <p className="leading-7 [&:not(:first-child)]:mt-6">
                            {member.explainer}
                          </p>
                        </div>
                      </div>
                    </WobbleCard>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </TracingBeam>
      <Footer />
    </div>
  );
};

export default Page;
