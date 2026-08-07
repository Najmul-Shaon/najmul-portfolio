import { useState } from "react";
import { courses } from "../assets/data/courses";
import { skillsImage } from "../assets/data/skill-image";
import { FaAward } from "react-icons/fa";
import {
  BsCalendar3,
  BsTrophyFill,
  BsPatchCheckFill,
  BsBoxArrowUpRight,
} from "react-icons/bs";
import GlowCard from "./GlowCard";

const SkillChip = ({ skill }) => {
  const icon = skillsImage(skill);
  return (
    <span className="flex items-center gap-1.5 rounded-full border border-[#2a2e5a] bg-[#0d1224] px-2.5 py-1 text-[10px] sm:text-xs text-[#d3d8e8]">
      {icon && (
        <img
          src={icon}
          alt=""
          aria-hidden="true"
          width={12}
          height={12}
          loading="lazy"
          className="h-3 w-3 object-contain"
        />
      )}
      {skill}
    </span>
  );
};

const CourseCard = ({ course }) => {
  const isOngoing = /present/i.test(course?.duration || "");
  const hasSkills = course?.skills?.length > 0;

  return (
    <GlowCard identifier={`course-${course?.id}`}>
      <div className="relative h-full p-5 sm:p-6 flex flex-col gap-4 overflow-hidden">
        <img
          src="/blur-23.svg"
          alt=""
          aria-hidden="true"
          width={1080}
          height={200}
          className="pointer-events-none absolute -bottom-4 left-0 w-full opacity-70"
        />

        {/* Header: credential badge + status pill */}
        <div className="relative flex items-start justify-between gap-3">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-violet-600 shadow-lg shadow-violet-600/25">
            {course?.logo ? (
              <img
                src={course.logo}
                alt={course?.institution || "Provider logo"}
                width={28}
                height={28}
                className="h-7 w-7 rounded-md object-contain"
              />
            ) : (
              <FaAward size={22} className="text-white" />
            )}
          </div>

          {isOngoing ? (
            <span className="flex items-center gap-1.5 rounded-full bg-[#16f2b3] px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-[#0a0d1f]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0a0d1f] opacity-60"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0a0d1f]"></span>
              </span>
              Ongoing
            </span>
          ) : (
            <span className="flex items-center gap-1.5 rounded-full border border-[#2a2e5a] bg-[#0d1224] px-3 py-1 text-[10px] sm:text-xs text-[#8f9bba]">
              <BsPatchCheckFill size={11} className="text-[#16f2b3]" />
              Completed
            </span>
          )}
        </div>

        {/* Provider + title */}
        <div className="relative">
          {course?.institution && (
            <p className="mb-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#8f9bba]">
              {course.institution}
            </p>
          )}
          <h3 className="text-lg sm:text-xl font-medium leading-snug text-[#16f2b3]">
            {course?.title}
          </h3>
        </div>

        {/* Duration */}
        {course?.duration && (
          <div className="relative flex items-center gap-2 text-xs sm:text-sm text-[#d3d8e8]">
            <BsCalendar3 size={13} className="text-violet-400" />
            <span>{course.duration}</span>
          </div>
        )}

        {/* Description */}
        {course?.description && (
          <p className="relative text-xs sm:text-sm leading-relaxed text-[#8f9bba]">
            {course.description}
          </p>
        )}

        {/* Skills / topics covered */}
        {hasSkills && (
          <div className="relative flex flex-wrap gap-2">
            {course.skills.map((skill, index) => (
              <SkillChip key={index} skill={skill} />
            ))}
          </div>
        )}

        {/* Credential id */}
        {course?.credentialId && (
          <p className="relative text-[10px] sm:text-xs text-[#8f9bba]">
            Credential ID:{" "}
            <span className="text-[#d3d8e8]">{course.credentialId}</span>
          </p>
        )}

        {/* Achievement highlight */}
        {course?.reward && (
          <div className="relative flex items-center gap-2.5 rounded-lg border border-[#16f2b3]/25 bg-[#16f2b3]/[0.06] px-3.5 py-3">
            <BsTrophyFill size={15} className="flex-shrink-0 text-[#16f2b3]" />
            <p className="text-xs sm:text-sm leading-relaxed text-[#d3d8e8]">
              {course.reward}
            </p>
          </div>
        )}

        {/* Certificate link — pinned to the bottom edge */}
        {course?.credentialUrl && (
          <div className="relative mt-auto pt-1">
            <a
              href={course.credentialUrl}
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
  );
};

const INITIAL_VISIBLE_COUNT = 6;

const Courses = () => {
  const [showAll, setShowAll] = useState(false);

  const sortedCourses = courses
    ?.filter((course) => course?.active)
    ?.sort((a, b) => {
      if (a?.rank == null && b?.rank == null) return 0;
      if (a?.rank == null) return 1;
      if (b?.rank == null) return -1;
      return a.rank - b.rank;
    });

  const hasMore = (sortedCourses?.length ?? 0) > INITIAL_VISIBLE_COUNT;
  const visibleCourses = showAll
    ? sortedCourses
    : sortedCourses?.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <div
      id="courses"
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
            Courses
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleCourses?.map((course) => (
            <CourseCard key={course?.id} course={course} />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-8 py-3 text-xs sm:text-sm font-medium uppercase tracking-wide text-white transition-all duration-200 hover:opacity-90"
            >
              {showAll
                ? "Show Less"
                : `Show More (${sortedCourses.length - INITIAL_VISIBLE_COUNT} more)`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
