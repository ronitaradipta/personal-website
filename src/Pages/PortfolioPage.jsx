import React, { useState } from "react";
import PortfolioCard from "../components/elements/PortfolioCard";
import republik from "../assets/republikrupiah.png";
import chainlords from "../assets/chainlords.png";
import kerjai from "../assets/kerjai.png";
import sitanggap from "../assets/sitanggap.png";
import movie from "../assets/movie-app.png";
import bookshelf from "../assets/bookshelf.png";
import PageTitle from "../components/elements/PageTitle";

const PortfolioPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const portFolioImg = [
    {
      src: republik,
      title: "Republikrupiah",
      tech: "php",
    },
    {
      src: chainlords,
      title: "Chainlords",
      tech: "php",
    },
    {
      src: kerjai,
      title: "Kerjai",
      tech: "javascript",
    },
    {
      src: sitanggap,
      title: "Sitanggap",
      tech: "uiux",
    },
    {
      src: bookshelf,
      title: "Bookshelf App",
      tech: "javascript",
    },
    {
      src: movie,
      title: "Movie App",
      tech: "javascript",
    },
  ];

  const tabData = ["All Projects", "Javascript", "PHP", "UI/UX"];

  return (
    <main className="min-h-screen py-16 bg-[#14213d]">
      <div className="container mx-auto px-36">
        <PageTitle title="Portfolio" />
        <div className="flex w-1/2 mx-auto mb-20 justify-center gap-16 relative">
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
        <div className="grid grid-cols-3 gap-6">
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
