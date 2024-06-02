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
      <div className="flex gap-4 overflow-visible ">
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

      <div className="flex justify-between gap-2">
        <CardPost />
        <div className="min-w-[400px] bg-gray-200 rounded-lg h-[900px]">
          wgwgwg
        </div>
      </div>

      {/* DISPLAY FOLLOWING TOPICS ONLY  */}
    </div>
  );
};

export default Home;
