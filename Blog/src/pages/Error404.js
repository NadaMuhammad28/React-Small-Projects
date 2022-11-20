import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="err-container">
      <h1 className="h-404">404</h1>
      <h2>Page Not Found </h2>
      <Link className="home-btn-link" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default Error404;
