// import { useState, useEffect } from "react";
// const useFetch = (apiURL) => {
//   const [blogs, setBlog] = useState(null);

//   const [isLoaded, setIsLoaded] = useState(true);
//   const [err, setError] = useState(null);
//   useEffect(
//     () => async () => {
//       try {
//         const res = await fetch(apiURL);
//         if (!res.ok) throw new Error("smth is wrong my boy");
//         const data = await res.json();
//         // console.log(data);
//         setBlog(data);
//         setIsLoaded(false);
//       } catch (e) {
//         setError(e.message);
//         setIsLoaded(false);
//       }
//     },
//     []
//   );
//   return { blogs, isLoaded, err };
// };
// // module.exports = useFetch;
// export default useFetch;

import { useState, useEffect } from "react";
const UseFetch = (apiURL) => {
  const [isEmpty, SetIsEmpty] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(
    () => async () => {
      try {
        const res = await fetch(apiURL);
        if (!res.ok) throw new Error("something IG...");
        const d = await res.json();
        setData(d);
        setIsPending(false);
        d[0] === undefined ? SetIsEmpty(true) : SetIsEmpty(false);
      } catch (e) {
        console.log(e.message);
        setError(e.message);
        setIsPending(true);
      }
    },
    []
  );
  return { data, isPending, error, isEmpty };
};

export default UseFetch;
