import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link to={"/"} className=" text-[#16f2b3] text-3xl font-bold">
            {`<NAJMUL/>`}
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <ScrollLink
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              to="about"
              offset={-50}
              duration={500}
              smooth={true}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 uppercase">
                ABOUT
              </div>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              to="experience"
              offset={-50}
              duration={500}
              smooth={true}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 uppercase">
                EXPERIENCE
              </div>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              to="skills"
              offset={-50}
              duration={500}
              smooth={true}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 uppercase">
                SKILLS
              </div>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              to="projects"
              offset={-50}
              duration={500}
              smooth={true}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 uppercase">
                Projects
              </div>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              to="education"
              smooth={true}
              duration={500}
              offset={-50}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 uppercase">
                EDUCATION
              </div>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              to="courses"
              offset={-50}
              duration={500}
              smooth={true}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 uppercase">
                COURSES
              </div>
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              to="contact"
              offset={-50}
              duration={500}
              smooth={true}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 uppercase">
                Contact
              </div>
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
