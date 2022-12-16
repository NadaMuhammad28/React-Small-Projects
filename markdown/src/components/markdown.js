import { useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkDown = () => {
  const [markdown, setMarkdown] = useState("# Markdoen Preview");
  return (
    <div className="container ">
      <div className="markdown-center">
        <textarea
          type="text"
          placeholder="Type Here.."
          className="markdown"
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <article>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default MarkDown;
