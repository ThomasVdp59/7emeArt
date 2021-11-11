import "./styles/main.scss";
import Home from "./views/Home.js";
import News from "./views/News.js";
import Movies from "./views/Movies.js";
import Shows from "./views/Shows.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Movies />} />
        <Route path="/series" element={<Shows />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
