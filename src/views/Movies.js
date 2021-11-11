import Hero from "../components/Hero/Hero.js";
import Main from "../components/Main/Main.js";
import Footer from "../components/Footer/Footer.js";
import { useLocation } from "react-router-dom";
import { PathContext } from "../components/Contexts/PathContext";

const Movies = () => {
  const location = useLocation();

  return (
    <PathContext.Provider value={location}>
      <Hero />
      <Main />
      <Footer />
    </PathContext.Provider>
  );
};

export default Movies;
