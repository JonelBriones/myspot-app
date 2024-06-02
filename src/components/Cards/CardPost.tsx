import React from "react";

const CardPost = () => {
  return (
    <>
      <div className="px-4 pb-4 my-4 flex-1 flex flex-col gap-2 border-t  border-gray-300 hover:bg-gray-100 h-fit">
        <div className="flex justify-between mt-2   ">
          <div className="flex place-items-center gap-2">
            <img
              src=""
              alt=""
              className="border border-black rounded-full size-7"
            />
            <p className="font-bold">username</p>
            <p>4 minutes ago</p>
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
        <h1 className="font-bold text-2xl">title of the post</h1>
        <img
          src=""
          alt=""
          className="h-[600px] border border-black rounded-lg"
        />
        <div className="flex gap-2">
          <button className="flex justify-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-1 px-8 rounded-full">
            Like
          </button>
          <button className="flex justify-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-1 px-8 rounded-full">
            Dislike
          </button>
          <button className="flex justify-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-1 px-8 rounded-full">
            Comment
          </button>
          <button className="flex justify-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-1 px-8 rounded-full">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default CardPost;
