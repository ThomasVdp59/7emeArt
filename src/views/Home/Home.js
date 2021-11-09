import Hero from "../../components/Hero/Hero.js";
import Main from "../../components/Main/Main.js";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  return (
    <div>
      <Hero></Hero>
      <Main path={location.pathname}></Main>
    </div>
  );
};

export default Home;
