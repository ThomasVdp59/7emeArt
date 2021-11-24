import React, { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero.js";
import Main from "../components/Main/Main.js";
import Footer from "../components/Footer/Footer.js";
import { useNavigate, useLocation } from "react-router-dom";
import { pathContext } from "../contexts/pathContext";
import axios from "axios";

const Details = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getIdWithUrl = ({ pathname }) => {
    const id = pathname.slice(pathname.lastIndexOf("/") + 1, pathname.length);
    return id;
  };

  useEffect(() => {
    const url =
      "https://imdb-api.com/fr/API/Title/k_811xf9fl/" +
      getIdWithUrl(location) +
      "/Posters,Images,Trailer,Ratings";
    axios
      .get(url)
      .then((response) => {
        if (
          response.data.title.length > 0 &&
          response.data.fullTitle.length > 0
        ) {
          setData(response.data);
        }
      })
      .catch((error) => {
        navigate("/notFound");
      });
  }, [location]);

  return (
    <pathContext.Provider value={location}>
      {data?.id?.length > 0 && (
        <React.Fragment>
          <Hero details={data} />
          <Main details={data} />
          <Footer />
        </React.Fragment>
      )}
    </pathContext.Provider>
  );
};

export default Details;
