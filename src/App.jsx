import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/projects/Projects";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
