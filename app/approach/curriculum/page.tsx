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
import CurriculumComponent from "@/components/CurriculumComponent";
import { curriculumItems } from "@/data";
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
            <div id="primary-wing">
              <h2 className="my-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Primary Wing
              </h2>
              <div className="vision mb-10">
                <blockquote className="mt-6 border-l-2 pl-6 italic">
                  Every child is gifted, they just unwrap their packages at
                  different times
                </blockquote>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  At <b>Lotus Valley International School</b>, Gurgaon we
                  believe in enabling children to realize their own potential to
                  excellence and to nurture their young minds through knowledge
                  and exposure. The Primary wing opens its arms to the little
                  learners who walk into our world with expectations and
                  desires. other.
                </p>
                <div className="grid h-max w-full grid-flow-row grid-cols-1 lg:!grid-flow-col lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-10">
                  <span className="col-span-2 w-full">
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      It is our endeavor to facilitate them to develop as social
                      beings by guiding them to interact and cooperate with
                      each. Our Curriculum incorporates current Educational
                      thinking and the most effective pedagogical practices. It
                      represents a process of revision that is both evolutionary
                      and developmental. We firmly believe in taking children
                      out of the classroom spaces to experience the real world
                      through varied experiments and hand-on activities. Our aim
                      is to foster the child in all dimensions of his or her
                      life— moral, spiritual, cognitive, emotional, imaginative,
                      aesthetic, social and physical. In order to realize this
                      view of the child and education, our curriculum outlines a
                      detailed and structured framework of content that is
                      comprehensive and flexible. It promotes the active
                      involvement of children in a learning process that is
                      imaginative and stimulating. The ability to think
                      critically, to apply learning and to develop flexibility
                      and creativity are also important factors in the success
                      of the child&apos;s life.
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
                      trips, Training workshops & excursions are planned in
                      tandem with the curriculum; International Days are
                      celebrated to expose the learners to wide cultural
                      diversity that broadens their horizon. The school focuses
                      on taking learning to another level through the
                      celebration of subjects over weeks such as -Literary,
                      Technomathematik, Eloquence week etc. which gives an
                      impetus to children&apos;s logical and creative thinking.
                      Reading books aloud to children stimulates their
                      imagination and expands their understanding of the world
                      besides developing their language and listening skills.
                    </p>
                  </span>
                </div>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  The extensive Reading Programme from Pre Primary to Grade
                  &ndash; III demands the involvement of learners, parents and
                  mentors on a common platform. This not only strengthens the
                  bond between the three, but also enhances the learner&apos;s
                  vocabulary with developed interest for reading. Class
                  Assemblies are another important feature of our School life.
                  They act as a medium to reflect our positive school ethos and
                  value based education through student&apos;s participation and
                  achievements. Our School also follows a Value based
                  &lsquo;Mogly Gurukul&rsquo; Programme with an aim to inculcate
                  values into our young learners at the earliest stages of life.
                  Fitkid is yet another successful programme that helps the
                  learners in identifying pros and cons of good health,
                  nutrition, safety and hygiene. Therefore, an important goal of
                  our curriculum is to enable children to learn how to learn and
                  to develop an appreciation of the value and practice of
                  lifelong learning.
                </p>
              </div>
            </div>
            <div id="middle-wing">
              <h2 className="my-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Middle Wing
              </h2>
              <div className="vision mb-10">
                <blockquote className="mt-6 border-l-2 pl-6 italic">
                  &ldquo;The function of Education is to teach one to think
                  intensively and to think critically. Intelligence plus
                  character-that is the goal of true education.&rdquo;
                  <br />
                  &mdash; Martin Luther King Jr.
                </blockquote>

                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Education in Middle and High Schools these days is rapidly
                  changing. The conventional notion of a classroom where the
                  students would sitting quietly and neatly in their seats,
                  while the teacher would up front pour pearls of wisdom and
                  knowledge into their brains is a practice of past. There has
                  been a paradigm shift in the pedagogies from the old system
                  and is constantly evolving with each passing year.
                </p>
                <div className="grid h-max w-full grid-flow-row grid-cols-1 lg:!grid-flow-col lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-10">
                  <span className="col-span-2 w-full">
                    <p className="mt-6 leading-7">
                      Reality in the 21st century is quite contrary to the old
                      methodology. Our students come into the classroom with the
                      same attitudes and expectations as the society in which
                      they live, from varied backgrounds. The main objective at
                      school, hence, is to take up the responsibility of
                      grooming children holistically, strengthening the
                      scholastic and co-scholastic areas while reinforcing the
                      value system or the &lsquo;Sanskars&rsquo; to turn each
                      Lotusian into a Good Samaritan.
                    </p>
                    <blockquote className="mt-6 border-l-2 pl-6 italic">
                      &ldquo;A carefully constructed structure of education is
                      supposed to smoothen the pursuit of knowledge, instead of
                      restricting the flow of knowledge.&rdquo;
                    </blockquote>

                    <p className="mt-6 leading-7">
                      The need of the hour is an educational system that works
                      for and with students. Keeping in mind the present
                      generation&apos;s curiosity and eagerness to learn, it
                      becomes imperative to adopt an approach that would take
                      care of innovative student-centred learning environment
                      enabling an educator to deal effectively with all types of
                      students in the same classroom.{" "}
                    </p>
                  </span>
                  <div className="w-full lg:col-span-2">
                    <Image
                      src={"/curriculum/1.jpg"}
                      alt="middle wing student playing guitar"
                      className="aspect-auto h-full rounded-xl"
                    />
                  </div>
                </div>
                <div className="mt-6 grid h-max w-full grid-flow-row grid-cols-1 gap-y-6 lg:!grid-flow-col lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-10">
                  <Image
                    src={"/curriculum/2.jpg"}
                    width={467}
                    height={467}
                    alt="student kicking a football"
                    className="aspect-auto h-full rounded-xl"
                  />
                  <span className="col-span-2">
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      Even an educator&apos;s role is changing from the
                      traditional &quot;imparter of knowledge&quot; to that of
                      coach and consultant. There are many exciting examples of
                      successful strategies and programs in which the students
                      are not only allowed, but encouraged and required, to take
                      responsibility for much more of their learning than ever
                      before.
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      Do-it-yourself, student-to-student teaching, project-based
                      learning, and student-centred learning environments are
                      some of the more encouraging programs. Also, the
                      integration of technology into every subject and at all
                      grade levels allows unprecedented levels and types of
                      exciting collaboration and learner to learner
                      connectivity.
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      Middle school offers maximum flexibility in terms of
                      experiential and experimental learning. On one hand, there
                      is lots to offer to the age bracket of middle school
                      learners and lots of vitality that can be fruitfully
                      manoeuvred, on the other hand, this age group is the most
                      turbulent in terms of the emotional quotient, hence,
                      maintaining a balance.
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      Keeping all the above factors in view, we design working
                      of students in small groups, perform different learning
                      tasks and learn from different books. Teachers provide
                      guidance, and all students have the opportunity to
                      participate in school activities.
                    </p>
                  </span>
                </div>
                <div className="grid h-max w-full grid-flow-row grid-cols-1 lg:!grid-flow-col lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-10">
                  <span className="col-span-2 w-full">
                    <p className="mt-6 leading-7">
                      Lotus Valley International School provides educational
                      experiences that emphasize the instruction and overall
                      well-being of learners. Working collaboratively, teachers,
                      counsellors, administrators and many parents address
                      middle school students&apos; learning and socialization
                      needs and ensure some degree of success for all learners.
                      They also recognize and address adolescents&apos;
                      developmental diversity.
                    </p>

                    <p className="mt-6 leading-7">
                      We aim to recognize learner diversity, employ educators
                      trained in middle school education, offer exploratory
                      curricular programs that encourage learner interest,
                      provide age-appropriate guidance and counselling, ensure
                      equal access to educational experiences, promote a
                      positive school environment, and involve parents and
                      families in the educational process.
                    </p>
                  </span>
                  <div className="w-full lg:col-span-2">
                    <Image
                      src={"/curriculum/3_2.jpg"}
                      alt="middle wing student playing guitar"
                      className="mt-6 aspect-auto h-full rounded-xl"
                    />
                  </div>
                </div>
                <p className="mt-12 leading-7">
                  It is important to state that the middle schools do not
                  downplay academic achievement and appropriate behaviour. Quite
                  the contrary, teachers and administrators emphasize these
                  fundamental aspects of education, but they also provide
                  learning experiences that meet individual needs.
                </p>
                <blockquote className="mt-6 border-l-2 pl-6 italic">
                  &ldquo;Education means nourishing the mind and make it develop
                  in order to see beyond the limitations of current social
                  perception.&rdquo;
                </blockquote>
              </div>
            </div>
            {/* ----- Senior Wing ----- */}
            <div id="senior-wing">
              <h2 className="my-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Senior Wing
              </h2>
              <div className="vision mb-10">
                <blockquote className="mt-6 border-l-2 pl-6 italic">
                  &ldquo;Are we forming children who are only capable of
                  learning what is already known?&rdquo;
                  <br />
                  &mdash; Jean Piaget
                </blockquote>

                <div className="grid h-max w-full grid-flow-row grid-cols-1 lg:!grid-flow-col lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-10">
                  <span className="col-span-2 w-full">
                    <p className="mt-6 leading-7">
                      At Lotus Valley, we are of the fervent view that learners
                      should be allowed to discover rather than be instructed
                      about already known facts. Endorsing the view propounded
                      by eminent developmental psychologist, Jean Piaget, “when
                      you teach a child something you take away forever his
                      chance of discovering it for himself”, classes at Lotus
                      Valley have been designed to ignite the curiosity of young
                      minds, nurture critical and lateral thinking and encourage
                      creativity and innovation. The aim is to equip learners
                      with the skills and competencies required to face the
                      challenges of the 21st century world, thereby preparing
                      them for life. The School lays emphasis on STEM Education
                      to foster scientific temperament in the learners.
                    </p>
                    <p className="mt-6 leading-7">
                      The Educational Programme at Lotus Valley, as per the
                      guidelines of the Central Board of Secondary Education,
                      provides a variety of subject choices to the learners. The
                      curriculum is further enriched by the School through an
                      innovative and interdisciplinary approach.
                    </p>
                    <p className="mt-6 leading-7">
                      The teaching methodology is based on experiential learning
                      to enable learners to acquire a better grasp of diverse
                      concepts. Higher order thinking skills and value based
                      questions form an integral part of the learning process.
                      Department Weeks are organized on a regular basis to
                      foster love for subjects and further the students&apos;
                      knowledge and understanding of the subjects.
                    </p>
                    <p className="mt-6 leading-7">
                      Developments at the International level are integrated
                      into the teaching approach through sessions by faculty
                      members from foreign schools and faculty exchange
                      programs. The School&apos;s collaborations with
                      international organizations like Brown University, USA,
                      and exchange programmes with The Ravensbourne School in UK
                      and Clara Schumman Gymnasium in Germany have greatly
                      contributed towards broadening the horizons of our
                      learners.
                    </p>
                  </span>
                  <div className="w-full lg:col-span-2">
                    <Image
                      src={"/curriculum/2_2.jpg"}
                      alt="middle wing student playing guitar"
                      className="mt-6 aspect-auto h-full rounded-xl"
                    />
                  </div>
                </div>
                <div className="mt-6 grid h-max w-full grid-flow-row grid-cols-1 gap-y-6 lg:!grid-flow-col lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-10">
                  <Image
                    src={"/curriculum/1_2.jpg"}
                    width={467}
                    height={467}
                    alt="student kicking a football"
                    className="aspect-auto h-full rounded-xl"
                  />
                  <span className="col-span-2">
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      Activity based learning is marked across subjects.
                      Languages are nurtured through radio shows, role plays,
                      interviews, among others. Learners create book jackets,
                      write book reviews and analyze narrative styles of
                      different authors to grasp literary texts. Drama, music
                      and art are woven into the teaching methodology to further
                      strengthen love for languages.
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      Love and interest in Mathematics is nurtured through
                      mathematical games, use of manipulatives, Vedic Math
                      techniques among others. connectivity.
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      The teaching of Humanities is designed to enable learners
                      to comprehend and appreciate diverse cultures, customs and
                      people. The Sciences are nurtured through innovation and
                      experimentation. Multiple Intelligence board games and
                      working models pique the curiosity of our young learners
                      and foster innovation. Innovations by Lotus Valley
                      learners on sustainable use of renewable resources have
                      been recognized by CBSE. Field trips, surveys, analysis of
                      results and presentations on diverse financial happenings
                      and issues enrich the repertoire of Commerce students, and
                      give them a practical experience of their field of study.
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      At Lotus Valley, the role of a Senior School Educator is
                      that of a facilitator, nurturing the eductive ability of
                      the learners, and illuminating the possibility of
                      unraveling multiple approaches to analyzing a task at
                      hand. We recognize the importance of accommodating
                      differential learning styles and assimilating these
                      indispensable determinants in the teaching pedagogies,
                      considering &lsquo;differentiation&rsquo; as a virtue and
                      strength for the learning process.
                    </p>
                  </span>
                </div>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  At Lotus Valley, the role of a Senior School Educator is that
                  of a facilitator, nurturing the eductive ability of the
                  learners, and illuminating the possibility of unraveling
                  multiple approaches to analyzing a task at hand. We recognize
                  the importance of accommodating differential learning styles
                  and assimilating these indispensable determinants in the
                  teaching pedagogies, considering &lsquo;differentiation&rsquo;
                  as a virtue and strength for the learning process.
                </p>

                <p className="mt-6 leading-7">
                  Discerning the significance of perspective building, a senior
                  school classroom at Lotus Valley, provides an open - ended
                  manifesto of providing opinions and thinking comprehensively
                  and thoroughly about a subject matter.
                </p>
                <p className="mt-6 leading-7">
                  We acknowledge the importance of unconventional and free
                  spirited ways of education, and are of the fervent view that
                  the educational approach should facilitate the process of
                  tuning the permeable boundaries of the curious minds, and
                  making them more sensitive, socially accountable and
                  integrated.
                </p>
                <Image
                  className="mt-6 h-auto w-full rounded-xl"
                  src="/curriculum/3_3.jpg"
                  alt="Students on a field trip"
                />
              </div>
            </div>
            <div>
              <h2 className="my-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Curriculum
              </h2>
              {curriculumItems.map((element) => {
                return (
                  <div className="my-6" key={element.year}>
                    <h3 className="my-6 scroll-m-20 text-2xl font-semibold tracking-tight">
                      Curriculum {element.year}
                    </h3>
                    <CurriculumComponent
                      year={element.year}
                      gradeList={element.gradeList}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </TracingBeam>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Page;
