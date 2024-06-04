import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { LuBell } from "react-icons/lu";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <nav className="my-3">
      <ul className="flex justify-left 2xl:justify-between gap-4 place-items-center">
        <li className="w-fit xl:basis-1/4 2xl:basis-1/3 ">
          <Link to={"/home"} className="text-2xl font-bold">
            MySpot
          </Link>
        </li>
        <li className="flex-1 md:basis-1/2  2xl:w-[700px] 2xl:flex-initial">
          <input
            type="text"
            placeholder="Search"
            className="outline-none py-3 px-6 bg-gray-200 rounded-full w-full"
          />
        </li>
        <li className="flex xl:basis-1/4 2xl:basis-1/3 justify-end place-items-center ">
          {isLogged ? (
            <>
              <button className="flex gap-2 place-items-center hover:bg-gray-200 py-2 px-4 rounded-full">
                <FaPlus size={"1.75rem"} />
                <span className="font-semibold">Create</span>
              </button>
              <button className="hover:bg-gray-200 p-2 size-fit rounded-full">
                <LuBell size={"1.75rem"} />
              </button>
              <button className="hover:bg-gray-200 p-1 rounded-full">
                <img
                  src="https://source.unsplash.com/random/50x50"
                  alt=""
                  className="size-10 rounded-full"
                />
              </button>
            </>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
