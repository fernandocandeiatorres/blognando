import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import { createPost } from "../services/api";

// Set up the markdown converter with GitHub-flavored options
const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setShowError(false);

    try {
      console.log(content);
      await createPost({ title, content, password });
      navigate("/");
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setError("Senha incorreta. Apenas admins podem postar.");
      } else {
        setError("An error occurred while creating the post.");
      }

      setShowError(true);

      setTimeout(() => setShowError(false), 2000);
      setTimeout(() => setError(""), 2500);
    }
  };

  return (
    <div className="flex flex-col  bg-white text-black">
      <h1 className="text-4xl text-center">CREATE.</h1>

      {/* Error Notification */}
      <div
        className={`transition-all duration-500 p-4 text-red-700 bg-red-100 border border-red-400 rounded-lg fixed top-20 right-4 ${
          showError ? "opacity-100 top-0" : "opacity-0 top-28"
        } `}
      >
        {error}
      </div>

      {/* Title Input */}
      <div className="p-6 border-b border-gray-200">
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the title"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* ReactMde Editor */}
      <div className="flex-grow p-6 ">
        <ReactMde
          value={content}
          onChange={setContent}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          generateMarkdownPreview={(markdown) =>
            Promise.resolve(converter.makeHtml(markdown))
          }
          toolbarCommands={[
            ["header", "bold", "italic", "strikethrough"],
            ["quote", "code", "link", "image"],
            ["unordered-list", "ordered-list", "checked-list"],
          ]}
          childProps={{
            textArea: {
              className: " w-full min-h-screen",
            },
          }}
        />
      </div>

      {/* Password Input */}
      <div className="p-6 border-b border-gray-200">
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter the password"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Post Button */}
      <div className="p-6 border-t border-gray-200">
        <button
          type="button"
          onClick={handleSubmit}
          className="hover:cursor-pointer w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
