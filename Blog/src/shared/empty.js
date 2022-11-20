import { Link } from "react-router-dom";
const EmptyBlogs = () => {
  return (
    <div className="empty-container">
      <h2> No Blogs Added </h2>
      <Link to="/add" className="add-btn-link">
        <button className="add-btn">Add A Blog</button>
      </Link>
    </div>
  );
};

export default EmptyBlogs;
