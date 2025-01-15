import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../Home/Home";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/donation">Donation</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
    </>
  );

  return (
      <nav className="bg-transparent">
        <div className="navbar ">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">
              <img className="h-10 w-20 md:w-36" src="https://i.ibb.co.com/6YbNGNy/Logo.png" alt="" />
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
        </div>
      </nav>
  );
};

export default Header;
