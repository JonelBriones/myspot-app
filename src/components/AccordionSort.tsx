import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const AccordionSort = ({
  selectCardSort,
  setSelectCardSort,
  cardSort,
  setCardSort,
  accordionSortRef,
  type,
}: any) => {
  useEffect(() => {
    if (type != "sort") return;
    document.addEventListener("mousedown", (event) => {
      console.log(type);
      let menuRef: any = accordionSortRef.current;
      if (!menuRef.contains(event.target)) setSelectCardSort(false);
    });
  }, []);
  return (
    <div className="relative overflow-visible" ref={accordionSortRef}>
      <div
        className={`text-lg flex gap-4 justify-center place-items-center cursor-pointer hover:bg-gray-300 py-2 px-4 rounded-lg ${
          selectCardSort ? "bg-gray-300" : ""
        } cursor-pointer`}
        onClick={() => setSelectCardSort(!selectCardSort)}
      >
        <span>{cardSort}</span>
        <IoIosArrowDown />
      </div>

      <div
        className={`absolute left-0 top-[50px] border rounded-lg z-10 drop-shadow-sm 
      transition-all duration-300 ease-in-out ${
        selectCardSort ? "opacity-100" : "opacity-0"
      } `}
      >
        <h1 className="p-4 font-semibold cursor-text">Sort by</h1>
        <div
          className={`flex gap-4 p-4  cursor-pointer ${
            cardSort == "Following" ? "bg-gray-300" : " hover:bg-gray-100 "
          }`}
          onClick={() => setCardSort("Following")}
        >
          <span>Following</span>
        </div>

        <div
          className={`flex gap-4 p-4 cursor-pointer ${
            cardSort == "All" ? "bg-gray-300" : " hover:bg-gray-100 "
          }`}
          onClick={() => setCardSort("All")}
        >
          <span>All</span>
        </div>
      </div>
    </div>
  );
};

export default AccordionSort;
