import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Item.module.scss";
import img from "../../../assets/images/newsexemple.png";

const Item = ({ data, type }) => {
  if (data) {
    if (data.image === "https://imdb-api.com/images/128x176/nopicture.jpg") {
      data.image = "https://imdb-api.com/images/384x528/nopicture.jpg";
    }
    if (
      data.image !== "https://imdb-api.com/images/384x528/nopicture.jpg" &&
      data.image.indexOf("/original") === -1
    ) {
      data.image =
        data.image.slice(
          0,
          data.image.length - "UX128_CR0,4,128,176_AL_.jpg".length
        ) + "UX384_CR0,4,384,528_AL_.jpg";
    }

    if (data && data.directors && data?.directors?.indexOf(",") !== -1) {
      data.directors = data.directors.substring(
        0,
        data.directors.indexOf("(dir.)")
      );
    } else if (data && data.crew && data?.crew?.indexOf(",") !== -1) {
      data.directors = data?.crew?.substring(0, data?.crew?.indexOf("(dir.)"));
    }
  }

  if (type === "Top" || type === "Slide") {
    return (
      <div
        className={type === "Top" ? styles.containerTop : styles.containerSlide}
        style={{
          backgroundImage: `url(${data.image})`
        }}
      >
        {type === "Top" && <span className={styles.rank}>{data.rank}</span>}
        <div className={styles.textContainer}>
          <Link to={"/details/" + data.id}>
            <h3>{data.title}</h3>
          </Link>
          {data.imDbRating ? <span>note Imdb : {data.imDbRating}</span> : ""}
          {data.metacriticRating ? (
            <span>note Imdb : {data.metacriticRating}</span>
          ) : (
            ""
          )}
          {data.metacriticRating || data.imDbRating ? (
            ""
          ) : (
            <span>Pas encore noté</span>
          )}
        </div>
      </div>
    );
  } else if (type === "News") {
    return (
      <div className={styles.container}>
        <img src={img} alt="newsThumbnail" />
        <h3>
          "Spawn : le projet maudit bouge encore et a trouvé son nouveau
          scénariste"
        </h3>
        <span>par Niki Caro</span>
      </div>
    );
  }
};

Item.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  type: PropTypes.string.isRequired
};

export default Item;
