import React, { useState } from "react";
import background from "../assets/background.png";
import hero from "../assets/hero-img.png";
import PortfolioCard from "./elements/PortfolioCard";
import republik from "../assets/republikrupiah.png";
import chainlords from "../assets/chainlords.png";
import kerjai from "../assets/kerjai.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [display, setDisplay] = useState(false);

  const portFolioImg = [
    {
      src: republik,
      title: "Republikrupiah",
    },
    {
      src: chainlords,
      title: "Chainlords",
    },
    {
      src: kerjai,
      title: "Kerjai",
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
      className="h-[calc(100vh_-_5rem)] pt-10"
    >
      <div className="container mx-auto md:flex justify-between px-4 md:px-36 flex-wrap mb-8 md:mb-0">
        <div
          className={`md:w-1/2 ease-in-out duration-300 ${
            display ? "md:pt-16" : "md:pt-40"
          }`}
        >
          <h3 className="md:text-lg text-sm text-white mb-2">
            Halo! Saya adalah
          </h3>
          <span className="relative"></span>
          <span className="text-[#fca311] text-3xl md:text-5xl font-bold inline-flex h-20 pt-2 overflow-x-hidden animate-type-reverse whitespace-nowrap will-change-transform">
            Roni Taradipta
          </span>
          <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
          <p className="text-[#E5E5E5] text-base font-thin mb-5">
            Selamat datang di Personal Web saya.
            <br /> Klik tombol di bawah ini untuk melihat beberapa karya
            tearbaik yang pernah saya buat
          </p>
          <button
            className="bg-[#fca311] py-3 px-4 font-medium rounded-lg text-[#14213d]"
            onClick={showPorto}
          >
            {!display && "Lihat Portfolio"}
            {display && "Sembunyikan Portfolio"}
          </button>
          {display && (
            <Link to="/portfolio">
              <button className="border border-[#fca311] py-3 px-4 font-medium rounded-lg text-[#fca311] mt-4 md:mt-0 md:ml-5">
                Lihat Lainnya
              </button>
            </Link>
          )}
        </div>
        <div className="w-1/2 hidden md:flex justify-end">
          <img src={hero} alt="hero image" />
        </div>
      </div>
      <div
        className={`container mx-auto flex flex-col md:flex-row justify-between md:px-36 px-6 gap-6 ease-in-out duration-500 ${
          display ? "opacity-100 md:-mt-48" : "opacity-0"
        }`}
      >
        <div className="flex gap-4 justify-center items-center  text-4xl md:rotate-[270deg] w-20">
          <div className="p-2 rounded-full bg-[#fca311] w-2 h-2 ring-8 ring-[#fca311] ring-opacity-20 animate-pulse"></div>
          <h2 className="font-medium text-white">Project</h2>
        </div>
        {portFolioImg.map((item) => {
          return <PortfolioCard items={item} />;
        })}
      </div>
    </article>
  );
};

export default HeroSection;
