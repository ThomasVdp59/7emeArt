import React from "react";
import styles from "./HeroMain.module.scss";
import { Link } from "react-router-dom";

const HeroMain = () => {
  return (
    <div className={styles.container}>
      <h1>
        Sortie prévue <span>le 24 décembre</span>
      </h1>
      <h1>Mulan</h1>
      <div className={styles.cta}>
        <span>
          <Link className={styles.details} to="/">
            Plus de détails
          </Link>
        </span>
        <span>
          <Link className={styles.trailer} to="/">
            Voir la bande-annonce
          </Link>
        </span>
      </div>
    </div>
  );
};

export default HeroMain;
