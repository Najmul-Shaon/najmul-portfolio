import { personalData } from "../assets/personalData";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaHackerrank } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { MdDownload } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <img
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is <span className=" text-pink-500">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>.
          </h1>

          <div className="my-12 flex items-center gap-5">
            <a
              href={personalData.github}
              target="_blank" rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </a>

            <a
              href={personalData.linkedIn}
              target="_blank" rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </a>
            <a
              href={personalData.facebook}
              target="_blank" rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href={personalData.hackerRank}
              target="_blank" rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaHackerrank size={30} />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="cursor-pointer px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </a>

            <a
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank" rel="noopener noreferrer"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">developer</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Najmul Hasan</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">role:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Web Developer</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">skills:</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div className="ml-8 lg:ml-16 mr-2">
                <span className=" text-white">frontend:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Next.js</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">React.js</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">TypeScript</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div className="ml-8 lg:ml-16 mr-2">
                <span className=" text-white">backend:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Node.js</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Express.js</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div className="ml-8 lg:ml-16 mr-2">
                <span className=" text-white">database:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div className="ml-8 lg:ml-16 mr-2">
                <span className=" text-white">platforms:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">WordPress</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Shopify</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div className="ml-8 lg:ml-16 mr-2">
                <span className=" text-white">aiTools:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">ChatGPT</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Claude</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">GitHub Copilot</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Gemini</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Kimi</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div className="ml-8 lg:ml-16 mr-2">
                <span className=" text-white">currentlyLearning:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">PHP</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySQL</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Prisma</span>
                <span className="text-gray-400">{"']"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-gray-400">{"},"}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">mindset:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Clean Code</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Performance</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Problem Solving</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">softSkills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Communication</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Teamwork</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Time Management</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Adaptability</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Leadership</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                  availableForHire:
                </span>
                <span className="text-gray-400">{"() =>"}</span>
                <span className="ml-2 text-orange-400">true</span>
              </div>
              <div>
                <span className="text-gray-400">{`};`}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;