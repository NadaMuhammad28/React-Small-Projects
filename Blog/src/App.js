import "./App.css";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Navbar from "./shared/Navbar";
import Footer from "./shared/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleBlog from "./pages/singleBlog";
import AddBlog from "./pages/addBlog";
import EditBlog from "./pages/EditBlog";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs/:id" element={<SingleBlog />} />
        <Route path="add" element={<AddBlog />} />
        <Route path="edit/:id" element={<EditBlog />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
