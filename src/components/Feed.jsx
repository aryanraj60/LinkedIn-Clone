import React, { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import DisplayPost from "./DisplayPost";
import { db } from "../utils/firebase";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const postArray = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        });
        setPosts(postArray);
      });
  }, []);

  console.log("Feed Rendered!");
  return (
    <div className="flex-1 px-1 md:p-0 min-w-min md:flex-[0.7] h-full text-white overflow-y-auto">
      <CreatePost />
      <FlipMove>
        {posts.map(({ id, data }) => (
          <DisplayPost key={id} data={data} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
