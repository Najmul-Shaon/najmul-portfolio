import { useState } from "react";
import { projectsData } from "../assets/data/projects-data";
import ProjectCard from "./ProjectCard";

const INITIAL_VISIBLE_COUNT = 6;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const sortedProjects = projectsData
    ?.filter((project) => project?.active)
    ?.sort((a, b) => {
      if (a?.rank == null && b?.rank == null) return 0;
      if (a?.rank == null) return 1;
      if (b?.rank == null) return -1;

      return a.rank - b.rank;
    });

  const hasMore = (sortedProjects?.length ?? 0) > INITIAL_VISIBLE_COUNT;
  const visibleProjects = showAll
    ? sortedProjects
    : sortedProjects?.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <div
      id="projects"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleProjects?.map((project) => (
            <ProjectCard key={project?.id} project={project} />
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
                : `Show More (${sortedProjects.length - INITIAL_VISIBLE_COUNT} more)`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;