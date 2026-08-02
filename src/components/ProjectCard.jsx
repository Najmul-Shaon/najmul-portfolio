import { useState, useRef, useLayoutEffect } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsGithub,
  BsBoxArrowUpRight,
  BsTrophy,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsCodeSlash,
  BsLightbulb,
} from "react-icons/bs";
import {
  FaLightbulb,
  FaChartLine,
  FaUsers,
  FaComments,
  FaSyncAlt,
  FaSearch,
  FaRegClock,
  FaGraduationCap,
  FaBrain,
  FaFlag,
  FaHeadset,
  FaClipboardList,
  FaTools,
  FaUserTie,
  FaSeedling,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { skillsImage } from "../assets/data/skill-image";
import GlowCard from "./GlowCard";

const SOFT_SKILL_ICONS = {
  "problem solving": FaLightbulb,
  "analytical thinking": FaChartLine,
  "team collaboration": FaUsers,
  communication: FaComments,
  adaptability: FaSyncAlt,
  "attention to detail": FaSearch,
  "time management": FaRegClock,
  "continuous learning": FaGraduationCap,
  "critical thinking": FaBrain,
  ownership: FaFlag,
  "client communication": FaHeadset,
  "requirement analysis": FaClipboardList,
  troubleshooting: FaTools,
  leadership: FaUserTie,
  "growth mindset": FaSeedling,
};

const getSoftSkillIcon = (skill) => {
  const key = skill?.toLowerCase();
  return SOFT_SKILL_ICONS[key] || HiSparkles;
};

const ToolTag = ({ tool }) => {
  const icon = skillsImage(tool);
  return (
    <span className="flex items-center gap-1.5 text-[10px] sm:text-xs px-2.5 py-1 rounded-full border border-[#2a2e5a] bg-[#0d1224] text-[#d3d8e8]">
      {icon && (
        <img
          src={icon}
          alt={tool}
          width={12}
          height={12}
          loading="lazy"
          className="h-3 w-3 object-contain"
        />
      )}
      {tool}
    </span>
  );
};

const ImageSlider = ({ images, alt }) => {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const prev = (e) => {
    e.stopPropagation();
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const next = (e) => {
    e.stopPropagation();
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-t-xl bg-[#0a0d1f]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          alt={`${alt} screenshot ${index + 1}`}
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous screenshot"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-[1] flex items-center justify-center h-7 w-7 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <BsChevronLeft size={14} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next screenshot"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-[1] flex items-center justify-center h-7 w-7 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <BsChevronRight size={14} />
          </button>
          <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1.5 z-[1]">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === index ? "w-4 bg-[#16f2b3]" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const COLLAPSED_MAX_HEIGHT = 260; // px — keeps card bodies visually uniform

const ProjectCard = ({ project }) => {
  const [showCode, setShowCode] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef(null);

  const hasHighlights = project?.highlights?.length > 0;
  const hasLearnings = project?.keyLearnings?.length > 0;
  const hasSoftSkills = project?.softSkills?.length > 0;
  const hasOutcome = Boolean(project?.outcome);
  const hasTools = project?.tools?.length > 0;

  const gallery =
    project?.images?.length > 0
      ? project.images
      : project?.image
      ? [project.image]
      : [];

  useLayoutEffect(() => {
    if (contentRef.current) {
      setIsOverflowing(contentRef.current.scrollHeight > COLLAPSED_MAX_HEIGHT);
    }
  }, [project, showCode]);

  return (
    <GlowCard identifier={`project-${project?.id}`}>
      <div className="relative">
        {gallery.length > 0 ? (
          <ImageSlider images={gallery} alt={project?.name} />
        ) : (
          <div className="w-full aspect-video flex items-center justify-center bg-[#0a0d1f] rounded-t-xl">
            <BsCodeSlash size={40} className="text-[#2a2e5a]" />
          </div>
        )}

        <div className="p-4 sm:p-5">
          <p className="text-[#16f2b3] text-base sm:text-lg font-medium mb-1">
            {project?.name}
          </p>

          {project?.role && (
            <p className="text-xs sm:text-sm text-[#8f9bba] mb-3">
              {project.role}
            </p>
          )}

          {/* CTA buttons */}
          <div className="flex items-center gap-3 mb-3">
            {project?.demo && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.demo}
                className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-4 py-2 text-[10px] sm:text-xs font-medium uppercase tracking-wide text-white hover:gap-2.5 transition-all duration-200 no-underline hover:no-underline hover:text-white"
              >
                Live Demo <BsBoxArrowUpRight size={11} />
              </a>
            )}
            {project?.code && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.code}
                className="flex items-center gap-1.5 rounded-full border border-[#2a2e5a] px-4 py-2 text-[10px] sm:text-xs font-medium uppercase tracking-wide text-white hover:border-violet-500 hover:gap-2.5 transition-all duration-200 no-underline hover:no-underline hover:text-white"
              >
                <BsGithub size={12} /> Code
              </a>
            )}
          </div>

          {/* Tools directly under the CTA buttons — quick tech-stack scan */}
          {hasTools && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map((tool, index) => (
                <ToolTag key={index} tool={tool} />
              ))}
            </div>
          )}

          {/* Variable-length content — height-capped for uniform card sizing */}
          <div className="relative">
            <div
              ref={contentRef}
              style={{
                maxHeight: expanded ? "none" : `${COLLAPSED_MAX_HEIGHT}px`,
              }}
              className="overflow-hidden transition-all duration-500 ease-in-out"
            >
              {hasOutcome && (
                <div className="flex gap-2.5 rounded-lg border border-[#16f2b3]/25 bg-[#16f2b3]/[0.06] px-3.5 py-3 mb-3">
                  <BsTrophy
                    size={15}
                    className="text-[#16f2b3] flex-shrink-0 mt-0.5"
                  />
                  <p className="text-xs sm:text-sm text-[#d3d8e8] leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              )}

              {hasHighlights && (
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <BsLightbulb size={13} className="text-[#16f2b3]" />
                    <span className="text-[11px] sm:text-xs font-semibold text-[#16f2b3] uppercase tracking-wide">
                      Features
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5 list-disc list-inside">
                    {project.highlights.map((point, index) => (
                      <li
                        key={index}
                        className="text-xs sm:text-sm text-[#d3d8e8]"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {hasLearnings && (
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <BsLightbulb size={13} className="text-amber-400" />
                    <span className="text-[11px] sm:text-xs font-semibold text-amber-400 uppercase tracking-wide">
                      Key Takeaways
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.keyLearnings.map((item, index) => (
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
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <FaUsers size={12} className="text-violet-400" />
                    <span className="text-[11px] sm:text-xs font-semibold text-violet-400 uppercase tracking-wide">
                      Skills Demonstrated
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.softSkills.map((skill, index) => {
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

              <button
                type="button"
                onClick={() => setShowCode((prev) => !prev)}
                className="relative z-10 flex items-center gap-1.5 text-xs sm:text-sm text-[#16f2b3] hover:gap-2.5 transition-all duration-200"
              >
                <span>{showCode ? "Hide code view" : "View as code"}</span>
                <motion.span
                  animate={{ rotate: showCode ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="flex items-center"
                >
                  <BsChevronDown size={12} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {showCode && (
                  <motion.div
                    key="code-view"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 border-t border-indigo-900/60 pt-4">
                      <code className="font-mono text-[11px] sm:text-xs leading-relaxed">
                        <div>
                          <span className="mr-2 text-pink-500">const</span>
                          <span className="mr-2 text-white">project</span>
                          <span className="mr-2 text-pink-500">=</span>
                          <span className="text-gray-400">{"{"}</span>
                        </div>
                        <div>
                          <span className="ml-4 mr-2 text-white">name:</span>
                          <span className="text-gray-400">{`'`}</span>
                          <span className="text-amber-300">
                            {project?.name}
                          </span>
                          <span className="text-gray-400">{`',`}</span>
                        </div>

                        {hasTools && (
                          <div className="ml-4 mr-2">
                            <span className="text-white">tools:</span>
                            <span className="text-gray-400">{` ['`}</span>
                            {project.tools.map((tag, i) => (
                              <React.Fragment key={i}>
                                <span className="text-amber-300">{tag}</span>
                                {project?.tools?.length - 1 !== i && (
                                  <span className="text-gray-400">{`', '`}</span>
                                )}
                              </React.Fragment>
                            ))}
                            <span className="text-gray-400">{"],"}</span>
                          </div>
                        )}
                        <div>
                          <span className="ml-4 mr-2 text-white">
                            myRole:
                          </span>
                          <span className="text-orange-400">
                            {project?.role}
                          </span>
                          <span className="text-gray-400">,</span>
                        </div>
                        <div className="ml-4 mr-2">
                          <span className="text-white">description:</span>
                          <span className="text-cyan-400">
                            {" " + (project?.description || "")}
                          </span>
                          <span className="text-gray-400">,</span>
                        </div>
                        <div>
                          <span className="text-gray-400">{`};`}</span>
                        </div>
                      </code>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Gradient fade + View More, only shown when content actually overflows */}
            {!expanded && isOverflowing && (
              <div className="absolute bottom-0 inset-x-0 h-20 flex items-end justify-center bg-gradient-to-t from-[#0a0d37] via-[#0a0d37]/90 to-transparent pointer-events-none">
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="pointer-events-auto mb-2 flex items-center gap-1.5 rounded-full bg-[#16f2b3] px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-[#0a0d1f] hover:gap-2.5 transition-all duration-200"
                >
                  View More <BsChevronDown size={11} />
                </button>
              </div>
            )}
          </div>

          {expanded && isOverflowing && (
            <div className="flex justify-center mt-2">
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="flex items-center gap-1.5 rounded-full border border-[#2a2e5a] px-4 py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-wide text-[#16f2b3] hover:border-[#16f2b3] transition-all duration-200"
              >
                Show Less <BsChevronDown size={11} className="rotate-180" />
              </button>
            </div>
          )}
        </div>
      </div>
    </GlowCard>
  );
};

export default ProjectCard;