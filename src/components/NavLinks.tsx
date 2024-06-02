import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { AiOutlineRise } from "react-icons/ai";
import { MdOutlineFilterList } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

const NavLinks = () => {
  const [toggleCustomFeed, setToggleCustomFeed] = useState(false);
  const [toggleCommunities, setToggleCommunities] = useState(false);
  const [toggleResources, setToggleResources] = useState(false);
  return (
    <nav className="hidden w-[300px] 2xl:block border-t border-r border-gray-300 pr-6  overflow-auto select-none">
      <ul className="flex flex-col py-3">
        <Link
          to="/home"
          className="hover:bg-gray-100 py-3 px-6 rounded-lg flex gap-4 place-items-center"
        >
          <TiHome size={"2rem"} /> Home
        </Link>
        <Link
          to="/popular"
          className="hover:bg-gray-100 py-3 px-6 rounded-lg flex gap-4 place-items-center"
        >
          <AiOutlineRise size={"2rem"} /> Popular
        </Link>
        <Link
          to="/all"
          className="hover:bg-gray-100 py-3 px-6 rounded-l flex gap-4 place-items-center"
        >
          <MdOutlineFilterList size={"2rem"} /> All
        </Link>
      </ul>
      <ul className="flex flex-col py-3 border-t border-gray-300  ">
        <div
          onClick={() => setToggleCustomFeed(!toggleCustomFeed)}
          className="hover:bg-gray-100 py-3 px-6 rounded-lg flex justify-between place-items-center"
        >
          <span className=" tracking-wider uppercase">custom feeds</span>
          {!toggleCustomFeed ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
        {toggleCustomFeed && (
          <div className="flex flex-col">
            <Link
              to="/all"
              className="hover:bg-gray-100 py-4 px-6 rounded-lg flex gap-4 justify-left place-items-center "
            >
              <FaPlus size={"1.5rem"} /> <span>Create a custom feed</span>
            </Link>
          </div>
        )}
      </ul>
      <ul className="flex flex-col py-3 border-t border-gray-300 ">
        <div
          onClick={() => setToggleCommunities(!toggleCommunities)}
          className="hover:bg-gray-100 py-3 px-6 rounded-lg flex justify-between place-items-center"
        >
          <span className=" tracking-wider uppercase">communities</span>
          {!toggleCommunities ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
        {toggleCommunities && (
          <div className="flex flex-col">
            <Link
              to="/all"
              className="hover:bg-gray-100 py-4 px-6 rounded-lg flex gap-4 justify-left place-items-center "
            >
              <FaPlus size={"1.5rem"} /> <span>Create a community</span>
            </Link>
          </div>
        )}
      </ul>
      <ul className="flex flex-col py-3 border-t border-gray-300 ">
        <div
          onClick={() => setToggleResources(!toggleResources)}
          className="hover:bg-gray-100 py-3 px-6 rounded-lg flex justify-between place-items-center"
        >
          <span className="tracking-wider uppercase">resources</span>

          {!toggleResources ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
        {toggleResources && (
          <div className="flex flex-col">
            <Link
              to="/about"
              className="hover:bg-gray-100 py-3 px-6 rounded-lg"
            >
              about
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavLinks;
