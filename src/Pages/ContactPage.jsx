import React from "react";
import profile from "../assets/profile-img.png";
import PageTitle from "../components/elements/PageTitle";
import js from "../assets/logo-skill/javascript.png";
import css from "../assets/logo-skill/css.png";
import react from "../assets/logo-skill/reactjs.png";
import wordpress from "../assets/logo-skill/wordpress.png";
import html from "../assets/logo-skill/html.png";
import figma from "../assets/logo-skill/figma.png";
import {
  BsFacebook,
  BsInstagram,
  BsDiscord,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

const ContactPage = () => {
  const imgSkill = [
    {
      title: "Javascript",
      img: js,
    },
    {
      title: "CSS",
      img: css,
    },
    {
      title: "React JS",
      img: react,
    },
    {
      title: "Html",
      img: html,
    },
    {
      title: "Figma",
      img: figma,
    },
    {
      title: "Wordpress",
      img: wordpress,
    },
  ];

  const socials = [
    <BsFacebook className="w-5 h-5" />,
    <BsInstagram className="w-5 h-5" />,
    <BsDiscord className="w-5 h-5" />,
    <BsLinkedin className="w-5 h-5" />,
    <BsGithub className="w-5 h-5" />,
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
                  {item}
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
          <ul className="text-gray-300 mt-4">
            {imgSkill.map((item, index) => {
              return (
                <li className="flex gap-3 items-center mt-1" key={index}>
                  <img src={item.img} alt="img" className="w-4 h-4" />{" "}
                  {item.title}
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
