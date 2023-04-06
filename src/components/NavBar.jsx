import React, { useState } from "react";
import logo from "../assets/logo.png";
import MenuList from "./elements/MenuList";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
      title: "Contact",
      href: "/contact",
    },
  ];

  const toggleStyle =
    "w-6 h-1 rounded-lg bg-[#14213d] transition-all duration-500";

  const toggle = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-20 bg-[#14213d] px-4">
      <nav className="container mx-auto flex justify-between items-center h-20 relative">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div>
          <button
            id="btn-toggle"
            className="md:hidden bg-[#fca311] flex flex-col h-14 w-14 p-4 justify-between rounded-lg"
            onClick={toggle}
          >
            <span className={toggleStyle}></span>
            <span className={toggleStyle}></span>
            <span className={toggleStyle}></span>
          </button>
        </div>
        <div
          id="nav-list"
          className={`absolute top-20 p-4 md:p-0 md:static bg-white md:bg-transparent w-full md:w-auto md:block ${
            toggleMenu ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-3 md:gap-11 items-center">
            {listMenu.map((item, index) => {
              return (
                <MenuList
                  title={item.title}
                  href={item.href}
                  key={index}
                  onClick={toggle}
                />
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
