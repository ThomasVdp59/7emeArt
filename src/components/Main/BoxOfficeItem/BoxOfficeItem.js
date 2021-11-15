import React from "react";
import styles from "./BoxOfficeItem.module.scss";

const BoxOfficeItem = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>Budget : <span>160,000,000 $ (estimation)</span></li>
        <li>Week-end d'ouverture aux États-Unis : <span>62,785,337 $</span></li>
        <li>Recette aux États-Unis : <span>292,576,195 $</span></li>
        <li>Recette internationale: <span>836,836,967 $</span></li>
      </ul>
    </div>
  );
};

export default BoxOfficeItem;
