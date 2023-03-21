import React, { useState } from "react";
import PortfolioCard from "../components/elements/PortfolioCard";
import republik from "../assets/republikrupiah.png";
import chainlords from "../assets/chainlords.png";
import kerjai from "../assets/kerjai.png";
import ourMovies from "../assets/our-movies.png";
import bookshelf from "../assets/bookshelf.png";
import nextCommerceV2 from "../assets/nextcommerce-v2.png";
import nextCommerceV1 from "../assets/nextcommerce.png";
import mealMap from "../assets/meal-map.png";
import library from "../assets/library.png";
import PageTitle from "../components/elements/PageTitle";

const PortfolioPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const portFolioImg = [
    {
      src: nextCommerceV1,
      title: "NextCommerce",
      tech: "javascript",
      link: "https://next-commerce-a7qoj1ouq-taradiptaroni.vercel.app/",
    },

    {
      src: kerjai,
      title: "Kerjai",
      tech: "javascript",
      link: "https://kerjai.netlify.app/",
    },
    {
      src: ourMovies,
      title: "Our Movies",
      tech: "javascript",
      link: "https://our-movies.netlify.app/",
    },
    {
      src: bookshelf,
      title: "Bookshelf App",
      tech: "javascript",
      link: "https://bookshelf-28917.netlify.app/",
    },
    {
      src: nextCommerceV2,
      title: "NextCommerce V2",
      tech: "javascript",
      link: "https://next-commerce-client.vercel.app/",
    },
    {
      src: mealMap,
      title: "Meal Map",
      tech: "javascript",
      link: "https://meal-map-restaurant.netlify.app/",
    },
    {
      src: library,
      title: "The Library",
      tech: "php",
      link: "https://github.com/ronitaradipta/the-library",
    },
    {
      src: republik,
      title: "Republikrupiah",
      tech: "php",
      link: "https://republikrupiah.com",
    },
    {
      src: chainlords,
      title: "Chainlords",
      tech: "php",
      link: "#",
    },
  ];

  const tabData = ["All Projects", "Javascript", "PHP"];

  return (
    <main className="min-h-screen py-16 bg-[#14213d]">
      <div className="container mx-auto md:px-36 px-4">
        <PageTitle title="Portfolio" />
        <div className="md:flex md:w-1/2 mx-auto md:mb-20 mb-5 md:justify-center md:gap-16 relative grid grid-cols-3">
          {tabData.map((item, index) => {
            return (
              <button
                key={index}
                className={`py-2 border-b-2 transition-colors duration-300 ${
                  index === activeTabIndex
                    ? "border-[#FCA311] text-white"
                    : "border-transparent hover:border-gray-500 text-gray-500"
                }`}
                onClick={() => setActiveTabIndex(index)}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {activeTabIndex === 0 &&
            portFolioImg.map((item, index) => {
              return <PortfolioCard items={item} key={index} />;
            })}

          {activeTabIndex === 1 &&
            portFolioImg
              .filter((item) => {
                return item.tech === "javascript";
              })
              .map((res, index) => {
                return <PortfolioCard items={res} key={index} />;
              })}

          {activeTabIndex === 2 &&
            portFolioImg
              .filter((item) => {
                return item.tech === "php";
              })
              .map((res, index) => {
                return <PortfolioCard items={res} key={index} />;
              })}

          {activeTabIndex === 3 &&
            portFolioImg
              .filter((item) => {
                return item.tech === "uiux";
              })
              .map((res, index) => {
                return <PortfolioCard items={res} key={index} />;
              })}
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;
