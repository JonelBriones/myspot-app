import React from "react";

const CardRecentPost = ({ username, text, likes, comments }: any) => {
  return (
    <div className="h-fit flex flex-col">
      <div className="flex gap-2">
        <img
          src=""
          alt=""
          className="size-6 rounded-full border border-black"
        />
        <p>{username}</p>
      </div>
      <p>{text}</p>
      <div className="flex gap-2">
        <button>{likes}like</button>
        <button>{comments}comment</button>
      </div>
    </div>
  );
};

export default CardRecentPost;
