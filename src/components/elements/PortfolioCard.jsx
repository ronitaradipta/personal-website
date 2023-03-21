import React from "react";

const PortfolioCard = ({ items }) => {
  return (
    <a
      href={items.link}
      target="_blank"
      style={{
        backgroundImage: `url(${items.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full h-[220px] flex items-end group hover:-translate-y-4 ease-in-out transition-all duration-300 cursor-pointer relative animate-fadeIn"
    >
      <div className="group-hover:bg-black flex justify-center items-center group-hover:bg-opacity-50 w-full h-full p-4 ease-in-out transition-all duration-300">
        <p className="text-transparent group-hover:text-white text-xl">
          {items.title}
        </p>
      </div>
    </a>
  );
};

export default PortfolioCard;
