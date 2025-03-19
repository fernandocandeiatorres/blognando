// import React from "react";

import { useEffect, useState } from "react";
import { getPosts, Post } from "../services/api";
import { formatDate } from "../utils/formatDate";
import { Link } from "react-router-dom";

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
      <div className="md:w-1/2 w-full px-3">
        <div>
          <h2 className="text-3xl text-start">Posts</h2>
        </div>
        <div className="gap-4 mt-5">
          {posts.map((post) => (
            <div key={post._id} className="mb-4">
              <h2 className="text-gray-500 text-xs mb-1">
                {formatDate(post.createdAt)}
              </h2>
              <div className="text-blue-600 text-2xl hover:text-black hover:cursor-pointer hover:underline">
                <Link to={`/post/${post._id}`} state={{ post }}>
                  <h1>{post.title}</h1>
                </Link>
                {/* <ReactMarkdown>{post.content}</ReactMarkdown> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
