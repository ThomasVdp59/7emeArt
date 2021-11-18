import React, { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero.js";
import Main from "../components/Main/Main.js";
import Footer from "../components/Footer/Footer.js";
import { useLocation } from "react-router-dom";
import { PathContext } from "../components/Contexts/PathContext";
import axios from "axios";

const Details = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://imdb-api.com/fr/API/Title/k_811xf9fl/tt0145487/Posters,Images,Trailer,Ratings"
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <PathContext.Provider value={location}>
      <Hero details={data} />
      <Main details={data} />
      <Footer />
    </PathContext.Provider>
  );
};

export default Details;
