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
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPost({ title, content });
      navigate("/");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="flex flex-col  bg-white text-black">
      <h1 className="text-4xl text-center">CREATE.</h1>
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
