import React from "react";
import styles from "./Item.module.scss";

const Item = () => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url("https://via.placeholder.com/500")`
      }}
    >
      <div className={styles.textContainer}>
        <h3>Mulan</h3>
        <span>par Niki Caro</span>
      </div>
    </div>
  );
};

export default Item;
