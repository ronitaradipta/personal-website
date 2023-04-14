import React, { useState } from "react";
import background from "../assets/background.png";
import hero from "../assets/hero-img.png";
import PortfolioCard from "./elements/PortfolioCard";
import mealMap from "../assets/meal-map.png";
import nextCommerce from "../assets/nextcommerce-v2.png";
import ourMovies from "../assets/our-movies.png";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import SocialsIcons from "./elements/Socials";

const HeroSection = () => {
  const [display, setDisplay] = useState(false);

  const portFolioImg = [
    {
      src: mealMap,
      title: "Meal Map",
    },
    {
      src: nextCommerce,
      title: "NextCommerce",
    },
    {
      src: ourMovies,
      title: "Our Movies",
    },
  ];

  const showPorto = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <article
      id="home"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={`${
        !display && " overflow-hidden h-[calc(100vh_-_5rem)]"
      } md:h-[calc(100vh_-_5rem)] pt-10`}
    >
      <div className="container mx-auto md:flex justify-between px-4 flex-wrap mb-8 md:mb-0 animate-fadeIn">
        <div
          className={`md:w-8/12 ease-in-out duration-300 ${
            display ? "md:pt-16" : "md:pt-40 pt-14"
          }`}
        >
          <h3 className="md:text-lg text-sm text-[#fca311] mb-2">
            Hello! My name is
          </h3>
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-3">
            Roni Taradipta.
          </h1>
          <div className="text-white text-3xl md:text-5xl font-bold opacity-60 ">
            Coding Your Dreams into Reality.
          </div>
          <p className="text-white opacity-60 text-base font-thin my-5 md:w-7/12">
            I am a skilled web developer with 1 year of experience, focusing on
            front-end development. I deliver exceptional digital experiences
            with stunning designs and seamless functionality. I am constantly
            seeking out new technologies to push the boundaries and stay ahead
            of the latest trends in front-end development.
          </p>

          {!display && (
            <div className="flex items-center gap-3">
              <button
                className="bg-[#fca311] py-3 px-4 font-medium rounded-lg text-[#14213d]"
                onClick={showPorto}
              >
                View Portfolio
              </button>
              <button className="border-[#fca311] border font-medium rounded-lg text-[#fca311]">
                <a
                  href="https://github.com/ronitaradipta"
                  className="flex gap-3 items-center py-3 px-4"
                >
                  <BsGithub />
                  Github
                </a>
              </button>
            </div>
          )}
          {display && (
            <div className="flex items-center gap-3">
              <button
                className="bg-[#fca311] py-3 px-4 font-medium rounded-lg text-[#14213d]"
                onClick={showPorto}
              >
                Hide Portfolio
              </button>
              <Link to="/portfolio">
                <button className="border border-[#fca311] py-3 px-4 font-medium rounded-lg text-[#fca311] md:mt-0 md:ml-5">
                  View More
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="w-4/12 hidden md:flex justify-end">
          <img src={hero} alt="hero image" />
        </div>
      </div>
      <div
        className={`container mx-auto flex flex-col md:flex-row justify-between md:px-36 px-6 gap-6 ease-in-out duration-500 ${
          display ? "opacity-100 md:-mt-28" : "opacity-0"
        }`}
      >
        <div className="flex gap-4 justify-center items-center text-4xl md:rotate-[270deg] w-20">
          <div className="p-2 rounded-full bg-[#fca311] w-2 h-2 ring-8 ring-[#fca311] ring-opacity-20 animate-pulse"></div>
          <h2 className="font-medium text-white">Project</h2>
        </div>
        {portFolioImg.map((item) => {
          return <PortfolioCard items={item} />;
        })}
      </div>
      {!display && (
        <div className="container m-auto flex justify-between text-white">
          <SocialsIcons />
          <a
            href="mailto:taradipta.roni@gmail.com"
            className="opacity-60 tracking-wide hover:text-[#fca311] hover:opacity-100 hover:-translate-y-2 ease-in-out transition-all duration-300"
          >
            taradipta.roni@gmail.com
          </a>
        </div>
      )}
    </article>
  );
};

export default HeroSection;
