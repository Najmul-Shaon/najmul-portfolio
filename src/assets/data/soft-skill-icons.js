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

// Soft skills don't have brand logos, so each trait maps to a representative
// icon. Anything not explicitly mapped falls back to a generic sparkle icon.
export const SOFT_SKILL_ICONS = {
  "problem solving": FaLightbulb,
  "analytical thinking": FaChartLine,
  "team collaboration": FaUsers,
  teamwork: FaUsers,
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

export const getSoftSkillIcon = (skill) => {
  const key = skill?.toLowerCase();
  return SOFT_SKILL_ICONS[key] || HiSparkles;
};
