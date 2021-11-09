import React from "react";
import styles from "./HeaderNavbar.module.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const HeaderNavbar = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" className={styles.logo} />
      <Link className={styles.linkText} to="/">
        Accueil
      </Link>
      <Link className={styles.linkText} to="/films">
        Films
      </Link>
      <Link className={styles.linkText} to="/series">
        Séries
      </Link>
      <Link className={styles.linkText} to="/news">
        News
      </Link>
    </div>
  );
};

export default HeaderNavbar;
