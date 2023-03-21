import React from "react";
import profile from "../assets/profile-img.png";
import PageTitle from "../components/elements/PageTitle";
import { BsLinkedin, BsGithub, BsWordpress } from "react-icons/bs";
import { GrReactjs } from "react-icons/gr";
import { SiNextdotjs, SiLaravel, SiExpress } from "react-icons/si";

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

  const socials = [
    {
      icon: <BsLinkedin className="w-8 h-8" />,
      link: "https://www.linkedin.com/in/roni-taradipta-6b0151217/",
    },
    {
      icon: <BsGithub className="w-8 h-8" />,
      link: "https://github.com/ronitaradipta",
    },
  ];

  return (
    <main className="min-h-screen py-16 bg-[#14213d]">
      <PageTitle title="Kontak Saya" />
      <div className="container md:w-1/2 px-4 md:px-0 mx-auto md:flex gap-14 mt-11">
        <div className="md:w-4/12 flex flex-col items-center">
          <img src={profile} alt="" />
          <div className="flex mt-5 gap-4 items-center justify-center mb-5">
            {socials.map((item, index) => {
              return (
                <a href="#" key={index} className="text-gray-200">
                  {item.icon}
                </a>
              );
            })}
          </div>
        </div>
        <div className="md:w-8/12">
          <h3 className="text-white font-medium text-2xl mb-4">
            Hai Saya adalah Roni Taradipta
          </h3>
          <p className="text-gray-300 text-sm">
            Saya adalah seorang web developer yang berpengalaman dan
            berdedikasi. Saya telah mengembangkan berbagai macam proyek web,
            mulai dari aplikasi web sederhana hingga aplikasi web kompleks. Di
            sini Anda dapat melihat beberapa proyek yang telah saya kerjakan dan
            mempelajari lebih lanjut tentang kemampuan saya.
          </p>
          <p className="text-gray-300 text-sm mt-4">
            Beberapa keahlian utama saya adalah :
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
