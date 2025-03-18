// import React from "react";

import { useEffect, useState } from "react";
import { getPosts, Post } from "../services/api";
import ReactMarkdown from "react-markdown";

const MainPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="w-full flex mt-10 justify-center">
      <div className="w-1/3">
        <div>
          <h2 className="text-3xl text-start">Posts</h2>
        </div>
        <div className="gap-4 mt-5">
          {posts.map((post) => (
            <div key={post._id}>
              <h2>{post.createdAt}</h2>
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
