import { BsLinkedin, BsGithub } from "react-icons/bs";

const socials = [
  {
    icon: <BsLinkedin className="w-6 h-6" />,
    link: "https://www.linkedin.com/in/ronitaradipta",
  },
  {
    icon: <BsGithub className="w-6 h-6" />,
    link: "https://github.com/ronitaradipta",
  },
];

import React from "react";

const SocialsIcons = () => {
  return (
    <div className="flex gap-4 items-center justify-center mb-5">
      {socials.map((item, index) => {
        return (
          <a
            href={item.link}
            key={index}
            className="text-white opacity-60 hover:text-[#fca311] hover:opacity-100 hover:-translate-y-2 ease-in-out transition-all duration-300"
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialsIcons;
