import { useEffect, useRef, useState } from "react";

import AccordionSort from "../components/AccordionSort";
import AccordionView from "../components/AccordionView";

const Home = () => {
  const [cardView, setCardView] = useState(true);
  const [selectCardView, setSelectCardView] = useState(false);
  const accordionViewRef = useRef(null);

  const [cardSort, setCardSort] = useState("Following");
  const [selectCardSort, setSelectCardSort] = useState(false);
  const accordionSortRef = useRef(null);

  return (
    <div className="p-3 flex 2xl:flex-1  overflow-visible">
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

      <div></div>

      {/* DISPLAY FOLLOWING TOPICS ONLY  */}
    </div>
  );
};

export default Home;
