import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="my-3">
      <ul className="flex justify-left 2xl:justify-between gap-4 place-items-center">
        <li className="w-fit xl:basis-1/4 2xl:basis-1/3 ">
          <h1 className="text-2xl">myspot</h1>
        </li>
        <li className="flex-1 md:basis-1/2  2xl:w-[700px] 2xl:flex-initial">
          <input
            type="text"
            placeholder="Search"
            className="outline-none py-3 px-6 bg-gray-200 rounded-full w-full"
          />
        </li>
        <li className="flex xl:basis-1/4 2xl:basis-1/3 gap-4 justify-end ">
          <Link to={"/home"}>Home</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/settings"}>Settings</Link>
          <Link to={"/profile"}>Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
