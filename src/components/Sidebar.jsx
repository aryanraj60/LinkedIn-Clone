import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);

  return (
    <div className="flex-[0.2] hidden md:block">
      <div className="bg-gray-900 rounded-2xl">
        <div className="border-b-2 border-zinc-400">
          <div className="h-20 w-72 relative bg-gradient-to-r from-red-500 to-cyan-300 rounded-lg">
            <img
              src={
                user.photoUrl
                  ? user.photoUrl
                  : "https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
              }
              className="rounded-full w-16 cursor-pointer absolute bottom-0 left-[50%] -ml-8 -mb-4"
              alt="Avatar"
            />
          </div>
          <div className="px-4 mt-8">
            <h2 className="text-gray-200 text-2xl font-bold text-center">
              {user.name}
            </h2>
            <p className="text-xl text-gray-400 py-3 text-center">
              {user.email}
            </p>
          </div>
        </div>

        <div className="px-3 pt-10 pb-5">
          <div>
            <div className="flex justify-between">
              <p className="text-gray-400 text-xl">Who viewed you</p>
              <p className="text-blue-500 text-lg font-semibold">2,000</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400 text-xl">Views On Post</p>
              <p className="text-blue-500 text-lg font-semibold">2,000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-2xl mt-5 text-slate-300 px-5">
        <p className="pt-3 text-white text-xl">Recent</p>
        <div className="py-5">
          <div className="flex px-1 justify-start py-1 hover:bg-slate-800 rounded-full cursor-pointer">
            <p>#</p>
            <p className="pl-3">ReactJs</p>
          </div>
          <div className="flex px-1 justify-start py-1 hover:bg-slate-800 rounded-full cursor-pointer">
            <p>#</p>
            <p className="pl-3">Firebase</p>
          </div>
          <div className="flex px-1 justify-start py-1 hover:bg-slate-800 rounded-full cursor-pointer">
            <p>#</p>
            <p className="pl-3">Redux</p>
          </div>
          <div className="flex px-1 justify-start py-1 hover:bg-slate-800 rounded-full cursor-pointer">
            <p>#</p>
            <p className="pl-3">Firestore Database</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
