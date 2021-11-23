import "./styles/main.scss";
import Home from "./views/Home.js";
import News from "./views/News.js";
import Movies from "./views/Movies.js";
import Shows from "./views/Shows.js";
import Details from "./views/Details.js";
import NotFound from "./views/NotFound.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Movies />} />
        <Route path="/series" element={<Shows />} />
        <Route path="/news" element={<News />} />
        <Route path="/details/:itemId" element={<Details />} />
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
