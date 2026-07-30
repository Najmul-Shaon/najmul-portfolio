import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const NAV_LINKS = [
  { to: "about", label: "About" },
  { to: "experience", label: "Experience" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "education", label: "Education" },
  { to: "courses", label: "Courses" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-999 transition-all duration-300 ${
          scrolled
            ? "bg-[#0d1224]/70 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between py-5 px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-shrink-0 items-center">
            <Link to={"/"} className=" text-[#16f2b3] text-3xl font-bold">
              {`<NAJMUL/>`}
            </Link>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex md:flex-row md:space-x-1 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <ScrollLink
                  className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
                  to={link.to}
                  offset={-50}
                  duration={500}
                  smooth={true}
                >
                  <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 uppercase">
                    {link.label}
                  </div>
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger / close toggle button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-white p-2 -mr-2 relative z-[80]"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  <HiOutlineX size={26} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  <HiOutlineMenuAlt3 size={26} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile drawer + overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeDrawer}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 z-45 h-screen w-72 max-w-[80%] bg-[#0d1224]/95 backdrop-blur-md border-l border-white/10 shadow-2xl shadow-black/40 md:hidden pt-20"
            >
              <ul className="flex flex-col py-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <ScrollLink
                      className="block px-5 py-3 no-underline outline-none hover:no-underline cursor-pointer"
                      to={link.to}
                      offset={-50}
                      duration={500}
                      smooth={true}
                      onClick={closeDrawer}
                    >
                      <div className="text-sm text-white transition-colors duration-300 hover:text-pink-500 uppercase tracking-wide">
                        {link.label}
                      </div>
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;