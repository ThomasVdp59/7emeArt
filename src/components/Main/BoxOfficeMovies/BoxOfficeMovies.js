import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./BoxOfficeMovies.module.scss";
import axios from "axios";
import Loading from "../../Loading/Loading.js";

const BoxOfficeMovies = ({ dataNeeded }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (dataNeeded === "boxOfficeWeek") {
      axios
        .get("https://imdb-api.com/en/API/BoxOffice/k_811xf9fl")
        .then((response) => {
          setLoading(false);
          setData(response.data.items.slice(0, 6));
        });
    }
    return () => {};
  }, []);
  return (
    <React.Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          {data.map((item, index) => {
            return (
              <div className={styles.movie} key={index}>
                <span>{item.rank}</span>
                <div className={styles.movieDetails}>
                  <h3>{item.title}</h3>
                  <span>
                    <strong>
                      {item.weekend} (
                      {item.weeks === 1 ? "1ère" : item.weeks + "ème"} semaine)
                    </strong>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

BoxOfficeMovies.propTypes = {
  dataNeeded: PropTypes.string.isRequired
};

export default BoxOfficeMovies;
