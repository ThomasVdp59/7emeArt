import Hero from "../components/Hero/Hero.js";
import Main from "../components/Main/Main.js";
import Footer from "../components/Footer/Footer.js";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  return (
    <div>
      <Hero />
      <Main path={location.pathname} />
      <Footer />
    </div>
  );
};

export default Home;
