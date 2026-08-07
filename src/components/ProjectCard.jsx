import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BsGithub,
  BsBoxArrowUpRight,
  BsTrophy,
  BsChevronLeft,
  BsChevronRight,
  BsCodeSlash,
  BsLightbulb,
  BsX,
} from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { skillsImage } from "../assets/data/skill-image";
import { getSoftSkillIcon } from "../assets/data/soft-skill-icons";
import GlowCard from "./GlowCard";

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

const ImageSlider = ({ images, alt, rounded = "rounded-t-xl" }) => {
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
    <div
      className={`relative w-full aspect-video overflow-hidden ${rounded} bg-[#0a0d1f]`}
    >
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

const CTAButtons = ({ project }) => (
  <div className="flex items-center gap-3">
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
);

const OutcomeBlock = ({ outcome }) => (
  <div className="flex gap-2.5 rounded-lg border border-[#16f2b3]/25 bg-[#16f2b3]/[0.06] px-3.5 py-3">
    <BsTrophy size={15} className="text-[#16f2b3] flex-shrink-0 mt-0.5" />
    <p className="text-xs sm:text-sm text-[#d3d8e8] leading-relaxed">
      {outcome}
    </p>
  </div>
);

const FeaturesBlock = ({ items }) => (
  <div>
    <div className="flex items-center gap-1.5 mb-2">
      <BsLightbulb size={13} className="text-[#16f2b3]" />
      <span className="text-[11px] sm:text-xs font-semibold text-[#16f2b3] uppercase tracking-wide">
        Features
      </span>
    </div>
    <ul className="flex flex-col gap-1.5 list-disc list-inside">
      {items.map((point, index) => (
        <li key={index} className="text-xs sm:text-sm text-[#d3d8e8]">
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const TakeawaysBlock = ({ items }) => (
  <div>
    <div className="flex items-center gap-1.5 mb-2">
      <BsLightbulb size={13} className="text-amber-400" />
      <span className="text-[11px] sm:text-xs font-semibold text-amber-400 uppercase tracking-wide">
        Key Takeaways
      </span>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span
          key={index}
          className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full border border-amber-400/30 bg-amber-400/[0.08] text-amber-200"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const SkillsBlock = ({ items }) => (
  <div>
    <div className="flex items-center gap-1.5 mb-2">
      <FaUsers size={12} className="text-violet-400" />
      <span className="text-[11px] sm:text-xs font-semibold text-violet-400 uppercase tracking-wide">
        Skills Demonstrated
      </span>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((skill, index) => {
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
);

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hasHighlights = project?.highlights?.length > 0;
  const hasLearnings = project?.keyLearnings?.length > 0;
  const hasSoftSkills = project?.softSkills?.length > 0;
  const hasOutcome = Boolean(project?.outcome);
  const hasTools = project?.tools?.length > 0;
  const hasMoreDetail =
    hasOutcome || hasHighlights || hasLearnings || hasSoftSkills;

  const gallery =
    project?.images?.length > 0
      ? project.images
      : project?.image
      ? [project.image]
      : [];

  useEffect(() => {
    if (!isModalOpen) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <GlowCard identifier={`project-${project?.id}`}>
        <div className="relative flex flex-col h-full">
          {gallery.length > 0 ? (
            <ImageSlider images={gallery} alt={project?.name} />
          ) : (
            <div className="w-full aspect-video flex items-center justify-center bg-[#0a0d1f] rounded-t-xl">
              <BsCodeSlash size={40} className="text-[#2a2e5a]" />
            </div>
          )}

          <div className="p-4 sm:p-5 flex flex-col flex-1">
            <p className="text-[#16f2b3] text-base sm:text-lg font-medium mb-1 line-clamp-2 min-h-[2.75rem] sm:min-h-[3.5rem]">
              {project?.name}
            </p>

            <p className="text-xs sm:text-sm text-[#8f9bba] mb-3 min-h-[1.25rem] line-clamp-1">
              {project?.role}
            </p>

            <div className="mb-3">
              <CTAButtons project={project} />
            </div>

            {hasTools && (
              <div className="flex flex-wrap content-start gap-2 mb-3 min-h-[68px] max-h-[68px] overflow-hidden">
                {project.tools.slice(0, 6).map((tool, index) => (
                  <ToolTag key={index} tool={tool} />
                ))}
                {project.tools.length > 6 && (
                  <span className="flex items-center text-[10px] sm:text-xs px-2.5 py-1 rounded-full border border-[#2a2e5a] bg-[#0d1224] text-[#8f9bba]">
                    +{project.tools.length - 6} more
                  </span>
                )}
              </div>
            )}

            {hasOutcome && (
              <p className="text-xs sm:text-sm text-[#d3d8e8] leading-relaxed line-clamp-2 mb-4 min-h-[2.5rem]">
                {project.outcome}
              </p>
            )}

            {/* Spacer pushes the button to a consistent bottom edge across cards */}
            <div className="mt-auto pt-2">
              {hasMoreDetail && (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full flex items-center justify-center gap-1.5 rounded-full border border-[#2a2e5a] px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-[#16f2b3] hover:border-[#16f2b3] transition-all duration-200"
                >
                  View More
                </button>
              )}
            </div>
          </div>
        </div>
      </GlowCard>

      {/* Full project detail modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              key="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              key="modal-panel"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-[95] flex items-center justify-center p-4"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={project?.name}
                className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl border border-[#2a2e5a] bg-[#0d1224] shadow-2xl shadow-black/50"
              >
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close"
                  className="absolute top-3 right-3 z-[1] flex items-center justify-center h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <BsX size={20} />
                </button>

                {gallery.length > 0 ? (
                  <ImageSlider
                    images={gallery}
                    alt={project?.name}
                    rounded="rounded-t-xl"
                  />
                ) : (
                  <div className="w-full aspect-video flex items-center justify-center bg-[#0a0d1f] rounded-t-xl">
                    <BsCodeSlash size={48} className="text-[#2a2e5a]" />
                  </div>
                )}

                <div className="p-5 sm:p-6 flex flex-col gap-4">
                  <div>
                    <p className="text-[#16f2b3] text-lg sm:text-xl font-medium mb-1">
                      {project?.name}
                    </p>
                    {project?.role && (
                      <p className="text-xs sm:text-sm text-[#8f9bba]">
                        {project.role}
                      </p>
                    )}
                  </div>

                  <CTAButtons project={project} />

                  {hasTools && (
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <ToolTag key={index} tool={tool} />
                      ))}
                    </div>
                  )}

                  {hasOutcome && <OutcomeBlock outcome={project.outcome} />}
                  {hasHighlights && (
                    <FeaturesBlock items={project.highlights} />
                  )}
                  {hasLearnings && (
                    <TakeawaysBlock items={project.keyLearnings} />
                  )}
                  {hasSoftSkills && (
                    <SkillsBlock items={project.softSkills} />
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;