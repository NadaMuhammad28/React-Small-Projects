import "./App.css";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
import { useEffect, useReducer, useState } from "react";
const url = "https://randomuser.me/api/";
const defaultPicture = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState(null);
  const [title, setTitile] = useState("name");
  const [value, setValue] = useState("random person");

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await (await fetch(url)).json();
      const results = res.results[0];
      const data = {
        email: results.email,
        name: `${results.name.first} ${results.name.last}`,
        phone: results.phone,
        picture: results.picture.large,
        age: results.dob.age,
        street: `${results.location.street.number} ${results.location.street.name}`,
        password: results.login.password,
      };
      setUser(data);
      setTitile("name");
      setValue(data.name);
      setIsLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleBtn = (e) => {
    if (e.target.nodeName === "BUTTON") {
      let dynVal = e.target.dataset.label;
      setTitile(dynVal);
      setValue(user[dynVal]);
    }
  };
  return (
    <main>
      <div className="bg-black"></div>
      <div className="container">
        <article>
          <img src={user?.picture || defaultPicture} className="usr-img " />
          <div>
            <p className="title">my {title} is</p>
            <p className="value">{value}</p>
          </div>
          <div className="list">
            <button
              className="icon"
              data-label="name"
              onMouseEnter={(e) => handleBtn(e)}
            >
              <FaUser />
            </button>

            <button
              className="icon"
              data-label="email"
              onMouseOver={(e) => handleBtn(e)}
            >
              <FaEnvelopeOpen />
            </button>

            <button
              className="icon"
              data-label="age"
              onMouseEnter={(e) => handleBtn(e)}
            >
              <FaCalendarTimes />
            </button>

            <button
              className="icon"
              data-label="street"
              onMouseEnter={(e) => handleBtn(e)}
            >
              <FaMap />
            </button>

            <button
              className="icon"
              data-label="phone"
              onMouseEnter={(e) => handleBtn(e)}
            >
              <FaPhone />
            </button>

            <button
              className="icon"
              data-label="password"
              onMouseEnter={(e) => handleBtn(e)}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" onClick={() => fetchData()}>
            {isLoading ? "loading..." : "random user"}
          </button>
        </article>
      </div>
    </main>
  );
}

export default App;
