import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import CommunityLogo from "@/assets/logos/IMG_20250811_164020_018-Photoroom.png";
import HeaderWrapper from "../ui/Header";

const Footer = () => {
  const pages = [
    { href: "/", name: "Home" },
    { href: "/event", name: "Event" },
    { href: "/learning", name: "Learning Hub" },
    { href: "/projects", name: "Projects" },
    { href: "/jobs", name: "Jobs" },
    { href: "/blog", name: "Blog" },
  ];
  const legalAndSupport = [
    { href: "/contact", name: "Contact Us" },
    { href: "/policy", name: "Private Policy" },
    { href: "/terms", name: "Terms of Service" },
    { href: "/CommunityGuidelines", name: "Community Guidelines" },
    { href: "/faq", name: "FAQ" },
  ];
  const sites = [
    { href: "https://github.com/DevByte-Community", icon: FaGithub },
    {
      href: "https://www.linkedin.com/company/devbyte-community/posts/?feedView=all",
      icon: FaLinkedin,
    },
    { href: "/terms", icon: FaXTwitter },
  ];

  return (
    <HeaderWrapper
      height="auto"
      className={`px-6 sm:px-0 pt-20  sm:pb-10 border border-t-gray-500 `}
    >
      <div className="flex flex-col items-center  justify-center pb-16 sm:flex-row sm:items-start sm:justify-evenly sm:pb-10">
        {/* Logo */}
        <div>
          <img
            src={CommunityLogo}
            alt="Community logo"
            className={`w-40 h-auto mb-2`}
          />
          <p className={`text-[0.8rem]`}>DevByte: Learn, Collaborate, Grow.</p>
        </div>

        <div className="flex gap-[8rem] sm:gap-[3rem] md:gap-[8rem] mt-10 mb-16 sm:my-0">
          {/* Navigation Link */}
          <div className="flex flex-col items-start justify-start gap-1">
            <h2 className="font-bold">Navigation Link</h2>
            {pages.map((page, index) => (
              <Link
                key={index}
                to={page.href}
                className="hover:text-[#00AEEF] hover:underline"
              >
                {page.name}
              </Link>
            ))}
          </div>

          {/* Legal & support */}

          <div className="flex flex-col items-start justify-start gap-1">
            <h2 className="font-bold ">Legal & support</h2>
            {legalAndSupport.map((page, index) => (
              <Link
                key={index}
                to={page.href}
                className="hover:text-[#00AEEF] hover:underline"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Websites */}

        <div className="">
          <h2 className="mb-2 font-bold ">Stay Connected</h2>
          <div className="flex justify-evenly">
            {sites.map((site, index) => {
              const IconComponent = site.icon;
              return (
                <a
                  key={index}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent size="22" className="hover:text-[#00AEEF] " />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <p className={`text-sm text-center`}>
        ©2025 DevByte. All rights reserved
      </p>
    </HeaderWrapper>
  );
};
export default Footer;
