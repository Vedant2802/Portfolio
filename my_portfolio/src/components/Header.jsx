import React from "react";
import { NavLink } from "react-router-dom";
import { staticText } from "../constants/constants";

export const Header = () => {
  const {
    header: { contact, about, home },
  } = staticText;
  return (
    <header id="header" className="h-15 bg-gray-400">
      <nav id="nav" className="flex justify-end px-4 gap-3 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-1 rounded-lg transition-colors mt-1 ${
              isActive
                ? " bg-gray-100"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-300"
            }`
          }
        >
          {home}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-3 py-1 rounded-lg transition-colors mt-1 ${
              isActive
                ? " bg-gray-100"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-300"
            }`
          }
        >
          {about}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-3 py-1 rounded-lg transition-colors mt-1 ${
              isActive
                ? " bg-gray-100"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-300"
            }`
          }
        >
          {contact}
        </NavLink>
      </nav>
    </header>
  );
};
