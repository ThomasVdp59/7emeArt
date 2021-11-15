import React from "react";
import styles from "./Rewards.module.scss";

const Rewards = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.rewardsList}>
        <li>
          <span>220</span>
          <br />
          Nomination(s)
        </li>
        <li>
          <span>157</span>
          <br />
          Victoire(s)
        </li>
        <li>
          <span>4</span>
          <br />
          Oscar(s)
        </li>
        <li>
          <span>15ème</span>
          <br />
          Meilleur film
          <br />
          <i>(selon ImDb)</i>
        </li>
      </ul>
    </div>
  );
};

export default Rewards;
