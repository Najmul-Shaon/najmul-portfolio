import { personalData } from "../assets/personalData";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaEnvelope, FaFacebook, FaHackerrank, FaLocationDot } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import ContactForm from "./ContactForm";

const CONTACT_DETAILS = [
  {
    label: "Email",
    value: personalData.email,
    href: `mailto:${personalData.email}`,
    Icon: FaEnvelope,
  },
  {
    label: "Phone",
    value: personalData.phone,
    href: `tel:${personalData.phone.replace(/\s+/g, "")}`,
    Icon: IoMdCall,
  },
  {
    label: "Location",
    value: personalData.address,
    href: null,
    Icon: FaLocationDot,
  },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: personalData.github, Icon: IoLogoGithub },
  { label: "LinkedIn", href: personalData.linkedIn, Icon: BiLogoLinkedin },
  { label: "HackerRank", href: personalData.hackerRank, Icon: FaHackerrank },
  { label: "Facebook", href: personalData.facebook, Icon: FaFacebook },
];

const ContactDetail = ({ label, value, href, Icon }) => {
  const content = (
    <>
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-violet-600 shadow-lg shadow-violet-600/25">
        <Icon size={18} className="text-white" />
      </span>
      <div className="min-w-0">
        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#8f9bba]">
          {label}
        </p>
        <p className="break-words text-sm sm:text-base text-[#d3d8e8]">
          {value}
        </p>
      </div>
    </>
  );

  const className =
    "flex items-center gap-4 rounded-xl border border-[#2a2e5a] bg-[#0d1224] p-4 transition-all duration-300 hover:border-[#16f2b3]";

  return href ? (
    <a href={href} className={`group ${className} no-underline hover:no-underline`}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
};

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Contact
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <ContactForm />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              {CONTACT_DETAILS.map((detail) => (
                <ContactDetail key={detail.label} {...detail} />
              ))}
            </div>

            <div>
              <p className="mb-3 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#8f9bba]">
                Find me on
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2a2e5a] bg-[#0d1224] text-[#16f2b3] transition-all duration-300 hover:scale-110 hover:border-[#16f2b3]"
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
