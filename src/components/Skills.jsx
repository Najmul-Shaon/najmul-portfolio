import { skillsData } from "../assets/data/skills";
import { skillsImage } from "../assets/data/skill-image";
import {
  FaComments,
  FaUsers,
  FaRegClock,
  FaLightbulb,
  FaSyncAlt,
  FaUserTie,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

// Soft skills don't have brand logos, so we map each one to a representative
// icon instead. Anything not explicitly mapped falls back to a generic icon.
const SOFT_SKILL_ICONS = {
  communication: FaComments,
  teamwork: FaUsers,
  "time management": FaRegClock,
  "problem solving": FaLightbulb,
  adaptability: FaSyncAlt,
  leadership: FaUserTie,
};

const getSoftSkillIcon = (skill) => {
  const key = skill.toLowerCase();
  return SOFT_SKILL_ICONS[key] || HiSparkles;
};

const LogoSkillCard = ({ skill }) => (
  <div className="flex flex-col items-center justify-center transition-all duration-300 rounded-lg group relative hover:scale-105 cursor-pointer">
    <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] group-hover:border-violet-500 transition-all duration-300">
      <div className="flex flex-col items-center justify-center gap-3 p-4 sm:p-6">
        <div className="h-8 sm:h-10">
          <img
            src={skillsImage(skill)}
            alt={skill}
            width={40}
            height={40}
            loading="lazy"
            className="h-full w-auto rounded-lg"
          />
        </div>
        <p className="text-white text-xs sm:text-sm text-center">{skill}</p>
      </div>
    </div>
  </div>
);

const SoftSkillCard = ({ skill }) => {
  const Icon = getSoftSkillIcon(skill);
  return (
    <div className="flex flex-col items-center justify-center transition-all duration-300 rounded-lg group relative hover:scale-105 cursor-pointer">
      <div className="h-full w-full rounded-lg border border-[#1f223c] bg-gradient-to-b from-[#11152c] to-[#161a35] group-hover:border-[#16f2b3] transition-all duration-300">
        <div className="flex flex-col items-center justify-center gap-3 p-4 sm:p-6">
          <div className="h-8 sm:h-10 flex items-center justify-center">
            <Icon
              size={28}
              className="text-[#16f2b3] group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <p className="text-white text-xs sm:text-sm text-center">
            {skill}
          </p>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {skillsData?.map((group) => {
            const isSoftSkills = group?.category === "Soft Skills";

            return (
              <div key={group?.category}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#16f2b3] text-sm sm:text-base font-semibold uppercase tracking-wider">
                    {group?.category}
                  </span>
                  <span className="h-[1px] flex-1 bg-gradient-to-r from-[#16f2b3]/40 to-transparent" />
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-5">
                  {group?.skills?.map((skill) =>
                    isSoftSkills ? (
                      <SoftSkillCard key={skill} skill={skill} />
                    ) : (
                      <LogoSkillCard key={skill} skill={skill} />
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;