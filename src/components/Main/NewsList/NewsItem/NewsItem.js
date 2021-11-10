import React from "react";
import styles from "./NewsItem.module.scss";
import img from "../../../../assets/images/newsexemple.png";

const NewsItem = (props) => {
  return (
    <div className={styles.container}>
      <img
        src={img}
        alt="newsThumbnail"
      />
      <h3>
        Spawn : le projet maudit bouge encore et a trouvé son nouveau scénariste
      </h3>
      <span>par Niki Caro</span>
    </div>
  );
};

export default NewsItem;
