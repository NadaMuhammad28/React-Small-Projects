import { Link } from "react-router-dom";
import "./allblogs.css";
const AllBlogs = ({ data }) => {
  console.log(data);
  return (
    <div className="blogs-container">
      {data.map((blog) => (
        <Link to={`blogs/${blog.id}`}>
          <div className="blog-card" key={blog.id}>
            <h2 className="blog-title">{blog.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllBlogs;
