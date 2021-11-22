import Hero from "../components/Hero/Hero.js";
import Main from "../components/Main/Main.js";
import Footer from "../components/Footer/Footer.js";
import { useLocation } from "react-router-dom";
import { pathContext } from "../contexts/pathContext";

const News = () => {
  const location = useLocation();

  return (
    <pathContext.Provider value={location}>
      <Hero />
      <Main />
      <Footer />
    </pathContext.Provider>
  );
};

export default News;
