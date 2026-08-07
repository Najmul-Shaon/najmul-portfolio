import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "../assets/data/experience";
import AnimationLottie from "./Animation-lottie";
import GlowCard from "./GlowCard";
import {
  BsPersonWorkspace,
  BsChevronDown,
  BsClockHistory,
  BsLightbulb,
  BsTrophy,
  BsRocketTakeoff,
} from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { getSoftSkillIcon } from "../assets/data/soft-skill-icons";

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <img
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start lg:sticky lg:top-24 lg:self-start">
            <div className="w-full h-full">
              <AnimationLottie name="code" />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {experiences
                ?.filter((experience) => experience?.active)
                ?.sort((a, b) => {
                  if (a?.rank == null && b?.rank == null) return 0;
                  if (a?.rank == null) return 1;
                  if (b?.rank == null) return -1;

                  return b.rank - a.rank;
                })
                ?.map((experience) => {
                  const isExpanded = expandedId === experience?.id;
                  const hasDescription = experience?.description?.length > 0;
                  const hasLearnings = experience?.keyLearnings?.length > 0;
                  const hasSoftSkills = experience?.softSkills?.length > 0;
                  const hasOutcome = Boolean(experience?.outcome);
                  const hasCompletedProjects =
                    experience?.completedProjects?.length > 0;

                  return (
                    <GlowCard
                      key={experience?.id}
                      identifier={`experience-${experience?.id}`}
                    >
                      <div className="p-3 relative">
                        <img
                          src="/blur-23.svg"
                          alt="Hero"
                          width={1080}
                          height={200}
                          className="absolute bottom-0 opacity-80"
                        />

                        {experience?.experienceYears && (
                          <div className="absolute top-3 right-3 z-[1] flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-1 shadow-lg shadow-pink-500/20">
                            <BsClockHistory size={11} className="text-white" />
                            <span className="text-[10px] sm:text-xs font-semibold text-white tracking-wide">
                              {experience?.experienceYears}
                            </span>
                          </div>
                        )}

                        <div className="flex justify-center items-center gap-2">
                          <p className="text-xs sm:text-sm text-[#16f2b3]">
                            {experience?.duration}
                          </p>
                          {experience?.ongoing && (
                            <span className="flex items-center gap-1.5 text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-[#16f2b3] text-[#0a0d1f] font-semibold uppercase tracking-wide">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0a0d1f] opacity-60"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#0a0d1f]"></span>
                              </span>
                              Ongoing
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-x-8 px-3 py-5">
                          <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                            {experience?.companyLogo ? (
                              <img
                                src={experience?.companyLogo}
                                alt={experience?.company}
                                className="w-9 h-9 object-contain rounded-md"
                              />
                            ) : (
                              <BsPersonWorkspace size={36} />
                            )}
                          </div>
                          <div>
                            <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                              {experience?.title}
                            </p>
                            <p className="text-sm sm:text-base">
                              {experience?.company}
                            </p>

                            {experience?.location && (
                              <p className="text-xs sm:text-sm text-[#8f9bba] mt-1">
                                {experience?.location}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Everything below is always visible on the card.
                            Only the description sits behind the toggle further down. */}

                        {hasOutcome && (
                          <div className="mx-3 mb-3 flex gap-2.5 rounded-lg border border-[#16f2b3]/25 bg-[#16f2b3]/[0.06] px-3.5 py-3">
                            <BsTrophy
                              size={16}
                              className="text-[#16f2b3] flex-shrink-0 mt-0.5"
                            />
                            <p className="text-xs sm:text-sm text-[#d3d8e8] leading-relaxed">
                              {experience?.outcome}
                            </p>
                          </div>
                        )}

                        {hasCompletedProjects && (
                          <div className="mx-3 mb-3">
                            <div className="flex items-center gap-1.5 mb-2">
                              <BsRocketTakeoff size={12} className="text-pink-400" />
                              <span className="text-[11px] sm:text-xs font-semibold text-pink-400 uppercase tracking-wide">
                                Completed Projects
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {experience?.completedProjects?.map(
                                (item, index) => (
                                  <span
                                    key={index}
                                    className="flex items-center gap-1.5 text-[10px] sm:text-xs px-2.5 py-1 rounded-full border border-pink-400/30 bg-pink-400/[0.08] text-pink-200"
                                  >
                                    <BsRocketTakeoff size={11} />
                                    {item}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        )}

                        {hasLearnings && (
                          <div className="mx-3 mb-3">
                            <div className="flex items-center gap-1.5 mb-2">
                              <BsLightbulb size={13} className="text-amber-400" />
                              <span className="text-[11px] sm:text-xs font-semibold text-amber-400 uppercase tracking-wide">
                                What I Learned
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {experience?.keyLearnings?.map((item, index) => (
                                <span
                                  key={index}
                                  className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full border border-amber-400/30 bg-amber-400/[0.08] text-amber-200"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {hasSoftSkills && (
                          <div className="mx-3 mb-3">
                            <div className="flex items-center gap-1.5 mb-2">
                              <FaUsers size={12} className="text-violet-400" />
                              <span className="text-[11px] sm:text-xs font-semibold text-violet-400 uppercase tracking-wide">
                                Skills Demonstrated
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {experience?.softSkills?.map((skill, index) => {
                                const Icon = getSoftSkillIcon(skill);
                                return (
                                  <span
                                    key={index}
                                    className="flex items-center gap-1.5 text-[10px] sm:text-xs px-2.5 py-1 rounded-full border border-violet-400/30 bg-violet-400/[0.08] text-violet-200"
                                  >
                                    <Icon size={10} />
                                    {skill}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Only description lives behind the toggle */}
                        {hasDescription && (
                          <div className="px-3 pb-3">
                            <button
                              type="button"
                              onClick={() => toggleExpand(experience?.id)}
                              className="relative z-10 flex items-center gap-1.5 text-xs sm:text-sm text-[#16f2b3] hover:gap-2.5 transition-all duration-200"
                            >
                              <span>
                                {isExpanded ? "Hide more" : "View more"}
                              </span>
                              <motion.span
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className="flex items-center"
                              >
                                <BsChevronDown size={12} />
                              </motion.span>
                            </button>

                            <AnimatePresence initial={false}>
                              {isExpanded && (
                                <motion.div
                                  key="content"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                                  className="overflow-hidden"
                                >
                                  <ul className="mt-3 flex flex-col gap-1.5 list-disc list-inside">
                                    {experience?.description?.map(
                                      (point, index) => (
                                        <li
                                          key={index}
                                          className="text-xs sm:text-sm text-[#d3d8e8]"
                                        >
                                          {point}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )}
                      </div>
                    </GlowCard>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;