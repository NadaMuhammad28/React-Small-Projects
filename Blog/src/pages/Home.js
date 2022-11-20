import Spinner from "../shared/spinner";
import Error404 from "./Error404";

import UseFetch from "../services/useFetch";
import AllBlogs from "./allblogs";
import EmptyBlogs from "../shared/empty";
const Home = () => {
  const { data, isPending, isEmpty, error } = UseFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div>
      {error && <Error404 />}
      {isPending && <Spinner />}
      {isEmpty && <EmptyBlogs />}
      {data && <AllBlogs data={data} />}
    </div>
  );
};

export default Home;
