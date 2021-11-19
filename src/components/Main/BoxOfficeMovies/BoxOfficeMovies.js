import React, { useState, useEffect } from "react";
import styles from "./BoxOfficeMovies.module.scss";
import axios from "axios";

const BoxOfficeMovies = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.dataNeeded === "boxOfficeWeek") {
      axios.get("../database/weekBoxoffice.json").then((response) => {
        setData(response.data.items.slice(0, 6));
      });
    }
    return () => {};
  }, []);
  return (
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
  );
};

export default BoxOfficeMovies;
