import React from "react";
import styles from "./Item.module.scss";
import img from "../../../assets/images/newsexemple.png";

const Item = (props) => {
  if (props.type === "Top" || props.type === "Slide") {
    return (
      <div className={styles.containerTop}>
        {props.type === "Top" && <span className={styles.rank}>1</span>}
        <div className={styles.textContainer}>
          <h3>Mulan</h3>
          <span>par Niki Caro</span>
        </div>
      </div>
    );
  } else if (props.type === "News") {
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
