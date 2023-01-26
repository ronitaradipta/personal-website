import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import MenuList from "./elements/MenuList";

const NavBar = () => {
  const listMenu = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Kontak",
      href: "/kontak",
    },
  ];

  const toggleStyle =
    "w-6 h-1 rounded-lg bg-[#14213d] transition-all duration-500";

  return (
    <header className="sticky top-0 z-20 bg-[#14213d] px-4">
      <nav className="container mx-auto flex justify-between items-center h-20">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <button
            id="btn-toggle"
            className="md:hidden bg-[#fca311] flex flex-col h-14 w-14 p-4 justify-between rounded-lg"
          >
            <span className={toggleStyle}></span>
            <span className={toggleStyle}></span>
            <span className={toggleStyle}></span>
          </button>
        </div>
        <div id="nav-list" className="hidden md:block">
          <ul className="flex gap-11 items-center">
            {listMenu.map((item, index) => {
              return (
                <MenuList title={item.title} href={item.href} key={index} />
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
