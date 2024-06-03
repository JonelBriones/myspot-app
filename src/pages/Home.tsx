import { useEffect, useRef, useState } from "react";

import AccordionSort from "../components/AccordionSort";
import AccordionView from "../components/AccordionView";
import CardPost from "../components/Cards/CardPost";

const Home = () => {
  const [cardView, setCardView] = useState(true);
  const [selectCardView, setSelectCardView] = useState(false);
  const accordionViewRef = useRef(null);

  const [cardSort, setCardSort] = useState("Following");
  const [selectCardSort, setSelectCardSort] = useState(false);
  const accordionSortRef = useRef(null);

  return (
    <div className="flex flex-col">
      <div className="flex gap-4 overflow-visible">
        <AccordionSort
          cardSort={cardSort}
          setCardSort={setCardSort}
          selectCardSort={selectCardSort}
          setSelectCardSort={setSelectCardSort}
          accordionSortRef={accordionSortRef}
          type={"sort"}
        />
        <AccordionView
          cardView={cardView}
          selectCardView={selectCardView}
          setCardView={setCardView}
          setSelectCardView={setSelectCardView}
          accordionRef={accordionViewRef}
          type={"view"}
        />
      </div>

      <div className="flex ">
        <div className="flex-1 h-screen mt-4">
          <div className="w-full overflow-auto h-5/6 ">
            <div className="flex flex-col gap-2 ">
              <div className="border border-t border-gray-300 " />
              <CardPost />
              <div className="border border-t border-gray-300 " />
              <CardPost />
              <div className="border border-t border-gray-300 " />
              <CardPost />
              <div className="border border-t border-gray-300 " />
              <CardPost />
              <div className="border border-t border-gray-300 " />
              <CardPost />
              <div className="border border-t border-gray-300 " />
              <CardPost />
            </div>
          </div>
        </div>
        <div className="flex gap-2 h-screen">
          <div className="min-w-[400px] bg-gray-200 overflow-auto h-5/6 rounded-lg p-4 scrollbar-invisible ">
            <div className="h-[200px]">THIS IS THE RIGHT CONTAINER</div>
            <div className="h-[200px]">THIS IS THE RIGHT CONTAINER</div>
            <div className="h-[200px]">THIS IS THE RIGHT CONTAINER</div>
            <div className="h-[200px]">THIS IS THE RIGHT CONTAINER</div>
            <div className="h-[200px]">THIS IS THE RIGHT CONTAINER</div>
            <div className="h-[200px]">THIS IS THE RIGHT CONTAINER</div>
            <div className="h-[200px]">THIS IS THE RIGHT CONTAINER</div>
            <div className="h-[200px]">THIS IS THE RIGHT CONTAINER</div>
            <div className="h-[200px]">THIS IS THE RIGHT CONTAINER</div>
          </div>
        </div>
      </div>

      {/* DISPLAY FOLLOWING TOPICS ONLY  */}
    </div>
  );
};

export default Home;
