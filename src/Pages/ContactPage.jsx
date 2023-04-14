import React from "react";
import profile from "../assets/profile-img.png";
import PageTitle from "../components/elements/PageTitle";
import { GrReactjs } from "react-icons/gr";
import { SiNextdotjs, SiLaravel, SiExpress } from "react-icons/si";
import { BsWordpress } from "react-icons/bs";
import SocialsIcons from "../components/elements/Socials";

const ContactPage = () => {
  const imgSkill = [
    {
      title: "Next Js",
      img: <SiNextdotjs className="h-6 w-6 text-[#FCA311]" />,
    },
    {
      title: "React Js",
      img: <GrReactjs className="h-6 w-6 text-[#FCA311]" />,
    },
    {
      title: "Express Js",
      img: <SiExpress className="h-6 w-6 text-[#FCA311]" />,
    },
    {
      title: "Laravel",
      img: <SiLaravel className="h-6 w-6 text-[#FCA311]" />,
    },
    {
      title: "Wordpress",
      img: <BsWordpress className="h-6 w-6 text-[#FCA311]" />,
    },
  ];

  return (
    <main className="min-h-screen py-16 bg-[#14213d]">
      <PageTitle title="My Contact" />
      <div className="container md:w-1/2 px-4 md:px-0 mx-auto md:flex gap-14 mt-11 animate-fadeIn">
        <div className="md:w-4/12 flex flex-col items-center">
          <img src={profile} alt="" />
          <div className="flex mt-5 gap-4 items-center justify-center mb-5">
            <SocialsIcons />
          </div>
        </div>
        <div className="md:w-8/12">
          <h3 className="text-white font-medium text-2xl mb-4">
            Hello, my name is Roni Taradipta.
          </h3>
          <p className="text-gray-300 text-sm">
            I am an experienced and dedicated web developer who has developed
            various web projects, ranging from simple to complex applications.
            Here, you can view some of the projects I have worked on and learn
            more about my skills.
          </p>
          <p className="text-gray-300 text-sm mt-4">
            Some of my core competencies are:
          </p>
          <ul className="text-gray-300 mt-8 grid grid-cols-3 gap-8">
            {imgSkill.map((item, index) => {
              return (
                <li className="flex gap-3 items-center" key={index}>
                  {item.img} {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
