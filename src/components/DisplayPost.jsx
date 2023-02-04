import React, { forwardRef } from "react";
import { BiLike, BiCommentDetail, BiShareAlt, BiSend } from "react-icons/bi";

const DisplayPost = forwardRef(
  ({ data: { message, name, photoUrl, email } }, ref) => {
    return (
      <div ref={ref} className="bg-gray-900 mt-5 rounded-lg py-4 px-2">
        <div>
          <div className="flex flex-col">
            <div className="flex gap-3">
              <img
                src={
                  photoUrl
                    ? photoUrl
                    : "https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
                }
                className="rounded-full w-12 cursor-pointer"
                alt="Avatar"
              />

              <div className="flex flex-col">
                <h3 className="text-slate-200 font-medium text-base">{name}</h3>
                <p className="text-slate-50 text-sm">{email}</p>
              </div>
            </div>
            <div className="py-4 px-2 text-base text-slate-50">
              <p>{message}</p>
            </div>
          </div>

          <div className="flex justify-evenly py-3">
            <div className="flex gap-2 hover:text-blue-500 cursor-pointer">
              <BiLike size={22} />
              <p>Like</p>
            </div>
            <div className="flex gap-2 hover:text-blue-500 cursor-pointer">
              <BiCommentDetail size={22} />
              <p>Comment</p>
            </div>
            <div className="flex gap-2 hover:text-blue-500 cursor-pointer">
              <BiShareAlt size={22} />
              <p>Share</p>
            </div>
            <div className="flex gap-2 hover:text-blue-500 cursor-pointer">
              <BiSend size={22} />
              <p>Send</p>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    );
  }
);

export default DisplayPost;
