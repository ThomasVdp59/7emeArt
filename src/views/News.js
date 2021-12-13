import Hero from "../components/Hero/Hero.js";
import Main from "../components/Main/Main.js";
import Footer from "../components/Footer/Footer.js";
import { useLocation } from "react-router-dom";
import { pathContext } from "../contexts/pathContext";
import { useEffect } from "react";

const News = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <pathContext.Provider value={location}>
      <Hero />
      <Main />
      <Footer />
    </pathContext.Provider>
  );
};

export default News;
