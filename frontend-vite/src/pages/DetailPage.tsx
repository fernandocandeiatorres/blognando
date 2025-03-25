import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Post } from "../services/api";
import { formatDate } from "../utils/formatDate";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.post) {
      setPost(location.state.post);
      setLoading(false);
    } else {
      const fetchPost = async () => {
        try {
          const response = await fetch(`http://localhost:3000/posts/${id}`);
          const data = await response.json();
          setPost(data);
        } catch (err) {
          console.error(err);
          setError("Error fetching post");
        } finally {
          setLoading(false);
        }
      };
      fetchPost();
    }
  }, [id, location.state]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="w-full flex mt-10 justify-center p-4 md:p-0">
      <div className="md:w-1/2 w-full px-3">
        <div className="gap-3 flex flex-col">
          <h2 className="text-4xl text-start">{post.title}</h2>
          <h2 className="text-gray-500 text-xs mb-1">
            {formatDate(post.createdAt)}
          </h2>
        </div>
        <div className="gap-4 mt-5">
          <div key={post._id}></div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
