import React, { useContext } from "react";
import styles from "./HeroMain.module.scss";
import { Link } from "react-router-dom";
import { PathContext } from "../../Contexts/PathContext";

const HeroMain = () => {
  const { pathname } = useContext(PathContext);
  return (
    <div className={styles.container}>
      {(pathname === "/" || pathname === "/news") && (
        <h1>
          Sortie prévue <span>le 24 décembre</span>
        </h1>
      )}
      {pathname === "/films" && <h1>Le film du moment</h1>}
      {pathname === "/series" && <h1>La série du moment</h1>}
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
