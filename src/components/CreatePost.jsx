import React, { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { HiPhotograph } from "react-icons/hi";
import { FiVideo } from "react-icons/fi";
import { BiCalendar } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { db } from "../utils/firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

const CreatePost = () => {
  const [inputMessage, setInputMessage] = useState("");
  const user = useSelector(selectUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      db.collection("posts").add({
        name: user.name,
        message: inputMessage,
        photoUrl: user.photoUrl || "",
        email: user.email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInputMessage("");
    }
  };

  return (
    <div className="px-4 bg-gray-900 py-4 rounded-lg sticky top-0 z-20">
      <form
        onSubmit={handleSubmit}
        className="flex px-3 py-3 gap-3 rounded-full border border-gray-400"
      >
        <BsPencilSquare size={25} />
        <input
          placeholder="Start a Post"
          type="text"
          onChange={(e) => {
            setInputMessage(e.target.value);
          }}
          value={inputMessage}
          className="w-full px-1 outline-none bg-transparent placeholder:text-gray-200"
        />
      </form>

      <div className="flex justify-evenly mt-2">
        <div className="flex p-3 space-x-2 cursor-pointer hover:text-blue-500">
          <HiPhotograph size={25} />
          <p>Photo</p>
        </div>
        <div className="flex p-3 space-x-2 cursor-pointer hover:text-blue-500">
          <FiVideo size={25} />
          <p>Video</p>
        </div>
        <div className="flex p-3 space-x-2 cursor-pointer hover:text-blue-500">
          <BiCalendar size={25} />
          <p>Event</p>
        </div>
        <div className="flex p-3 space-x-2 cursor-pointer hover:text-blue-500">
          <RiArticleLine size={25} />
          <p>Write Article</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
