import React from "react";
import styles from "./Item.module.scss";
import img from "../../../assets/images/newsexemple.png";

const Item = (props) => {
  const { data } = props;
  const { type } = props;

  if (data) {
    if (data.directors.indexOf(",") !== -1) {
      data.directors = data.directors.substring(0, data.directors.indexOf(","));
    }
    if (data.image === "https://imdb-api.com/images/128x176/nopicture.jpg") {
      data.image = "https://imdb-api.com/images/384x528/nopicture.jpg";
    }
    if (data.image != "https://imdb-api.com/images/384x528/nopicture.jpg") {
      data.image =
        data.image.slice(
          0,
          data.image.length - "UX128_CR0,4,128,176_AL_.jpg".length
        ) + "UX384_CR0,4,384,528_AL_.jpg";
    }
  }

  if (type === "Top" || type === "Slide") {
    return (
      <div
        className={styles.containerTop}
        style={{
          backgroundImage: `url(${data.image})`
        }}
      >
        {type === "Top" && <span className={styles.rank}>1</span>}
        <div className={styles.textContainer}>
          <h3>{data.title}</h3>
          <span>par {data.directors}</span>
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

export default Item;
