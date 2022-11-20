import { useParams } from "react-router";
import "./addBlog.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UseFetch from "../services/useFetch";
///
const EditBlog = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { data } = UseFetch(`http://localhost:8000/blogs/${id}`);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  /////////////////////////////////
  const editBlog = async (e) => {
    e.preventDefault();
    const blog = { title, body };
    title == "" ? (blog.title = data.title) : (blog.title = title);
    body == "" ? (blog.body = data.body) : (blog.body = body);

    const b = JSON.stringify(blog);
    console.log(b);
    try {
      const data = await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "PUT",
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
          {data && (
            <form className="form row" onSubmit={editBlog}>
              <input
                defaultValue={data.title}
                className=" form-control  col-12"
                type="text"
                placeholder="Blog Title"
                onChange={(e) => {
                  console.log(`pppp$s{e.target.value}`);
                  e.target.value != ""
                    ? setTitle(e.target.value)
                    : setTitle(e.target.defaultValue);
                }}
              />
              <textarea
                rows="4"
                defaultValue={data.body}
                className="form-control"
                type="text"
                placeholder="Blog Content"
                onChange={(e) => setBody(e.target.value)}
              />
              <button className="btn " type="sumbmit">
                Add Blog
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
