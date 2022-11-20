import { useState } from "react";

import "./addBlog.css";
import { useNavigate } from "react-router-dom";
const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const addBlog = async (e) => {
    e.preventDefault();
    const blog = { title, body };
    const b = JSON.stringify(blog);
    try {
      const data = await fetch("http://localhost:8000/blogs/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: b,
      });

      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="form-container">
      <div className="form-body">
        <div className="container">
          <form className="form row" onSubmit={addBlog}>
            <input
              className=" form-control  col-12"
              type="text"
              placeholder="Blog Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <textarea
              rows="4"
              className="form-control"
              type="text"
              placeholder="Blog Content"
              onChange={(e) => setBody(e.target.value)}
            />
            <button className="btn " type="sumbmit">
              Add Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
