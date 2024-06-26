import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiShare } from "react-icons/fi";

const CardPost = ({
  data,
  props,
  user,
}: {
  data: any;
  props: any;
  user: any;
}) => {
  const { dislike, like, comment } = props;

  const {
    id,
    created_at,
    title,
    text,
    likes,
    dislikes,
    comments,
    image,
    created_by,
  } = data;

  return (
    <>
      <div className="p-2 flex mt-2 flex-col gap-2 min-w-min hover:bg-gray-100 h-fit rounded-lg ">
        <div className="flex justify-between">
          <div className="flex place-items-center gap-2">
            <img
              src={created_by.profile_image}
              alt=""
              className="rounded-full size-7"
            />
            <p className="font-bold">{created_by.username}</p>
            <p>{created_at}</p>
          </div>
          <div className="flex gap-2">
            <button className="flex justify-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-1 px-8 rounded-full">
              Join
            </button>
            <button className="size-full flex justify-center place-items-center rounded-full hover:bg-gray-300">
              ...
            </button>
          </div>
        </div>
        <h1 className="font-bold text-2xl">{title}</h1>
        {text && <p>{text}</p>}
        {image && (
          <img
            src={image}
            alt=""
            className="rounded-2xl w-fit  object-contain "
          />
        )}
        <div className="flex gap-2 ">
          <button className="flex justify-between gap-2 bg-gray-200 text-white font-bold py-1 px-4 rounded-full place-items-center">
            <AiOutlineLike
              color="black"
              size={"1.2rem"}
              className={`${
                likes.includes(user.username) ? "fill-green-500" : "like-hover"
              }`}
              onClick={() => like(id, user.username)}
            />
            <span className="text-black font-semibold">
              {likes.length - dislikes.length}
            </span>
            <AiOutlineDislike
              color="black"
              size={"1.2rem"}
              className={`${
                dislikes.includes(user.username)
                  ? "fill-red-500"
                  : "dislike-hover"
              }`}
              onClick={() => dislike(id, user.username)}
            />
          </button>

          <button className="flex justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-white font-bold py-1 px-4 rounded-full place-items-center">
            <FaRegComment color="black" size={"1.2rem"} />
            <span className="text-black font-semibold uppercase">
              {comments.length}k
            </span>
          </button>

          <button className="flex justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-white font-bold py-1 px-4 rounded-full place-items-center">
            <FiShare color="black" size={"1.2rem"} />
            <span className="text-black font-semibold">Share</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardPost;
