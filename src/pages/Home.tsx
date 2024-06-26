import { useEffect, useRef, useState } from "react";

import AccordionSort from "../components/AccordionSort";
import AccordionView from "../components/AccordionView";
import CardPost from "../components/Cards/CardPost";
import CardRecentPost from "../components/Cards/CardRecentPost";
import data from "../../data.json";
import userData from "../../user.json";

const fakeRecentPost = [
  {
    img: "",
    username: "ijonel906",
    text: "Best time to go to the gym",
    likes: 9,
    comments: 2,
  },
  {
    img: "",
    username: "jonel",
    text: "DBZ is the best anime",
    likes: 29,
    comments: 12,
  },
  {
    img: "",
    username: "jb",
    text: "I like one piece",
    likes: 201,
    comments: 40,
  },
];

type Post = {
  id: string;
  created_at: string;
  title: string;
  text: string;
  likes: string[];
  dislikes: string[];
  comments: {}[];
  image: string;
  created_by: {
    id: string;
    username: string;
    profile_image: string;
  };
};

const Home = () => {
  const [cardView, setCardView] = useState(true);
  const [selectCardView, setSelectCardView] = useState(false);
  const accordionViewRef = useRef(null);

  const [cardSort, setCardSort] = useState("All");
  const [selectCardSort, setSelectCardSort] = useState(false);
  const accordionSortRef = useRef(null);

  const [showRecent, setShowRecent] = useState(true);
  const [fakeData, setFakeData] = useState<Post[]>(data);
  const [fakeUserData, setUserData] = useState(userData);

  const sortByLikes = fakeData
    .map((data) => {
      return data;
    })
    .sort((a: any, b: any) => b.likes.length - a.likes.length);

  const like = (id: string, username: string) => {
    let post = fakeData.find((data) => data.id == id);
    let isLiked = post?.likes.includes(username);
    if (isLiked) {
      setFakeData(
        fakeData.map((data) =>
          data.id == id
            ? {
                ...data,
                likes: data.likes.filter((name) => name != username),
              }
            : data
        )
      );
    } else {
      setFakeData(
        fakeData.map((data) =>
          data.id == id
            ? {
                ...data,
                likes: [...data.likes, username],
                dislikes: data.dislikes.filter((name) => name != username),
              }
            : data
        )
      );
    }
    console.log("like");
  };
  const dislike = (id: string, username: string) => {
    let post = fakeData.find((data) => data.id == id);
    let isDisliked = post?.dislikes.includes(username);
    if (isDisliked) {
      setFakeData(
        fakeData.map((data) =>
          data.id == id
            ? {
                ...data,

                dislikes: data.dislikes.filter((name) => name != username),
              }
            : data
        )
      );
    } else {
      setFakeData(
        fakeData.map((data) =>
          data.id == id
            ? {
                ...data,

                likes: data.likes.filter((name) => name != username),
                dislikes: [...data.dislikes, username],
              }
            : data
        )
      );
    }
  };
  const comment = (id: string) => {
    console.log("comment");
  };

  const props = { like, dislike, comment };

  return (
    <div className="flex flex-col">
      <div className="flex overflow-visible">
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

      <div className="flex gap-2 overflow-hidden ">
        <div className="flex flex-1 flex-col-reverse gap-2 ">
          {cardSort !== "Hot" &&
            fakeData.map((data: any, idx) => (
              <div
                key={data.id}
                className={`border-t border-gray-300 ${idx == 0 ? "mt-4" : ""}`}
              >
                <>
                  {cardSort == "All" && (
                    <CardPost data={data} props={props} user={fakeUserData} />
                  )}
                  {cardSort == "Following" &&
                    fakeUserData.following.includes(
                      data.created_by.username
                    ) && (
                      <CardPost data={data} props={props} user={fakeUserData} />
                    )}
                </>
              </div>
            ))}
          {cardSort == "Hot" &&
            sortByLikes.map((data: any, idx) => (
              <div
                key={data.id}
                className={`border-t border-gray-300 ${idx == 0 ? "mt-4" : ""}`}
              >
                <CardPost data={data} props={props} user={fakeUserData} />
              </div>
            ))}
        </div>

        <div className="hidden 2xl:flex flex-col h-fit w-[350px] relative ">
          {showRecent && (
            <div className="rounded-lg p-4 bg-gray-200 fixed w-[350px]">
              <div className="flex justify-between my-2">
                <p>RECENT POSTS</p>
                <button onClick={() => setShowRecent(false)}>Clear</button>
              </div>
              <div className="flex flex-col gap-4">
                {fakeRecentPost.map((post: any, idx) => (
                  <div
                    key={idx}
                    className={` border-gray-300 pt-4 ${
                      idx > 0 ? "border-t" : ""
                    }`}
                  >
                    <CardRecentPost {...post} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* DISPLAY FOLLOWING TOPICS ONLY  */}
    </div>
  );
};

export default Home;
