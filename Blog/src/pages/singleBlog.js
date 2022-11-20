import "./singleBlog.css";
import Spinner from "../shared/spinner";
import Error404 from "./Error404";
import { useParams } from "react-router";
import UseFetch from "../services/useFetch";
import { Link, useNavigate } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isPending, error, isEmpty } = UseFetch(
    `http://localhost:8000/blogs/${id}`
  );

  //Delete Blog
  const delBlog = async () => {
    try {
      const res = await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
      });

      navigate("/");
    } catch (e) {}
  };

  //Edit Blog

  const editBlog = async () => {};
  return (
    <div>
      {error && <Error404 />}
      {isPending && <Spinner />}
      {data && (
        <article className="container">
          <h2 className="single-blog-title">{data.title}</h2>
          <p>{data.body}</p>
          <div className="btn-container">
            <button className="del-btn" onClick={delBlog}>
              Delete Blog
            </button>
          </div>
          <Link to={`/edit/${id}`}>
            <button className="edit-btn">Edit Blog</button>
          </Link>
        </article>
      )}
    </div>
  );
};

export default SingleBlog;
