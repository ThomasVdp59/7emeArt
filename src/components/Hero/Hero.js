import React, { useContext } from "react";
import styles from "./Hero.module.scss";
import Header from "../Header/Header.js";
import HeroMain from "./HeroMain/HeroMain";
import { PathContext } from "../Contexts/PathContext";

const Hero = () => {
  const { pathname } = useContext(PathContext);
  if (pathname.startsWith("/details")) {
    return (
      <div className={`${styles.container} ${styles.detailsContainer}`}>
        <Header />
        <HeroMain />
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <Header />
        <HeroMain />
      </div>
    );
  }
};
export default Hero;
