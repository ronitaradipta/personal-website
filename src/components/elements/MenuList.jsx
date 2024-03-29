import React from "react";
import { NavLink } from "react-router-dom";

const MenuList = ({ title, href, onClick }) => {
  return (
    <li onClick={onClick}>
      <NavLink
        to={href}
        className={({ isActive, isPending }) =>
          isActive
            ? "text-[#FCA311]"
            : isPending
            ? "text-gray-500"
            : "text-gray-400 font-medium text-base"
        }
      >
        {title}
      </NavLink>
    </li>
  );
};

export default MenuList;
