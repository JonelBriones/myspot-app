import React, { useEffect, useRef, useState } from "react";
import { BsViewStacked } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { LuRectangleHorizontal } from "react-icons/lu";
const AccordionView = ({
  selectCardView,
  setSelectCardView,
  cardView,
  setCardView,
  accordionRef,
  type,
}: any) => {
  useEffect(() => {
    if (type != "view") return;

    document.addEventListener("mousedown", (event) => {
      console.log(type);
      let menuRef: any = accordionRef.current;
      if (!menuRef.contains(event.target)) setSelectCardView(false);
    });
  }, []);
  return (
    <div className="relative overflow-visible" ref={accordionRef}>
      <div
        className={`text-lg flex gap-2 py-2 px-3 rounded-full justify-center place-items-center cursor-pointer hover:bg-gray-300 ${
          selectCardView ? "bg-gray-300" : ""
        } cursor-pointer`}
        onClick={() => setSelectCardView(!selectCardView)}
      >
        {cardView ? (
          <LuRectangleHorizontal size={"1.5rem"} />
        ) : (
          <BsViewStacked size={"1.5rem"} />
        )}
        <IoIosArrowDown />
      </div>

      <div
        className={`absolute left-0 top-[50px] border rounded-lg z-10 drop-shadow-sm 
      transition-all duration-300 ease-in-out bg-white ${
        selectCardView ? "opacity-100" : "opacity-0"
      } `}
      >
        <h1 className="p-4 font-semibold cursor-text">View</h1>
        <div
          className={`flex gap-4 p-4  cursor-pointer ${
            cardView ? "bg-gray-300" : " hover:bg-gray-100 "
          }`}
          onClick={() => setCardView(true)}
        >
          <LuRectangleHorizontal size={"1.5rem"} />
          <span>Card</span>
        </div>
        <div
          className={`flex gap-4 p-4 cursor-pointer ${
            !cardView ? "bg-gray-300" : " hover:bg-gray-100 "
          }`}
          onClick={() => setCardView(false)}
        >
          <BsViewStacked size={"1.5rem"} />
          <span>Component</span>
        </div>
      </div>
    </div>
  );
};

export default AccordionView;
