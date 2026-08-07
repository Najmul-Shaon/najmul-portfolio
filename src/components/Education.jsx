import { educations } from "../assets/data/educations";
import { FaGraduationCap } from "react-icons/fa";
import {
  BsCalendar3,
  BsGeoAlt,
  BsAwardFill,
  BsBoxArrowUpRight,
} from "react-icons/bs";
import AnimationLottie from "./Animation-lottie";
import GlowCard from "./GlowCard";

const EducationItem = ({ education, isLast }) => {
  const isOngoing = /present/i.test(education?.duration || "");

  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Timeline rail: node + connecting line */}
      <div className="relative flex flex-col items-center">
        <div className="z-10 flex h-11 w-11 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-violet-600 shadow-lg shadow-violet-600/30 ring-4 ring-[#0d1224]">
          {education?.logo ? (
            <img
              src={education.logo}
              alt={education?.institution || "Institution logo"}
              width={26}
              height={26}
              className="h-6 w-6 rounded-md object-contain"
            />
          ) : (
            <FaGraduationCap size={20} className="text-white" />
          )}
        </div>
        {!isLast && (
          <span className="mt-1 w-[2px] flex-1 bg-gradient-to-b from-violet-600/60 via-violet-600/20 to-transparent" />
        )}
      </div>

      {/* Content card */}
      <div className={`flex-1 ${isLast ? "" : "pb-8"}`}>
        <GlowCard identifier={`education-${education?.id}`}>
          <div className="relative overflow-hidden p-5 sm:p-6">
            <img
              src="/blur-23.svg"
              alt=""
              aria-hidden="true"
              width={1080}
              height={200}
              className="pointer-events-none absolute -bottom-4 left-0 w-full opacity-70"
            />

            {education?.duration && (
              <div className="relative mb-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2a2e5a] bg-[#0d1224] px-3 py-1 text-[10px] sm:text-xs text-[#16f2b3]">
                  <BsCalendar3 size={11} />
                  {education.duration}
                </span>
                {isOngoing && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#16f2b3] px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-[#0a0d1f]">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0a0d1f] opacity-60"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0a0d1f]"></span>
                    </span>
                    Ongoing
                  </span>
                )}
              </div>
            )}

            <h3 className="relative text-lg sm:text-xl font-medium leading-snug text-white">
              {education?.title}
            </h3>

            {education?.institution && (
              <p className="relative mt-1 text-sm sm:text-base text-[#16f2b3]">
                {education.institution}
              </p>
            )}

            {education?.location && (
              <p className="relative mt-2 flex items-center gap-1.5 text-xs sm:text-sm text-[#8f9bba]">
                <BsGeoAlt size={12} className="text-violet-400" />
                {education.location}
              </p>
            )}

            {education?.description && (
              <p className="relative mt-3 text-xs sm:text-sm leading-relaxed text-[#8f9bba]">
                {education.description}
              </p>
            )}

            {education?.result && (
              <div className="relative mt-4 flex items-center gap-2.5 rounded-lg border border-[#16f2b3]/25 bg-[#16f2b3]/[0.06] px-3.5 py-3">
                <BsAwardFill size={15} className="flex-shrink-0 text-[#16f2b3]" />
                <p className="text-xs sm:text-sm leading-relaxed text-[#d3d8e8]">
                  {education.result}
                </p>
              </div>
            )}

            {education?.certificate && (
              <div className="relative mt-4">
                <a
                  href={education.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#2a2e5a] px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-[#16f2b3] no-underline transition-all duration-200 hover:gap-2.5 hover:border-[#16f2b3] hover:no-underline"
                >
                  View Certificate <BsBoxArrowUpRight size={11} />
                </a>
              </div>
            )}
          </div>
        </GlowCard>
      </div>
    </div>
  );
};

const Education = () => {
  const visibleEducations = educations
    ?.filter((education) => education?.active !== false)
    ?.sort((a, b) => {
      if (a?.rank == null && b?.rank == null) return 0;
      if (a?.rank == null) return 1;
      if (b?.rank == null) return -1;
      return a.rank - b.rank;
    });

  return (
    <div
      id="education"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <img
        src="/section.svg"
        alt=""
        aria-hidden="true"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Lottie animation */}
          <div className="order-1 flex justify-center lg:sticky lg:top-24 lg:self-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie name="study" />
            </div>
          </div>

          {/* Timeline */}
          <div className="order-2">
            {visibleEducations?.map((education, index) => (
              <EducationItem
                key={education?.id}
                education={education}
                isLast={index === visibleEducations.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
