import classNames from "classnames";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../constants";

const Nav = () => {
  const location = useLocation();
  return (
    <nav className="flex justify-center item-center space-x-2">
      {ROUTES.map((route, index) => (
        <Link
          key={index}
          to={route.path}
          className={classNames("px-2 text-gray-400 dark:text-gray-400 text-lg py-2 hover:text-gray-600", {
             "border-b-2 border-teal-400 text-gray-800 dark:text-gray-100": location.pathname === route.path,
          })}
        >
          {route.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
