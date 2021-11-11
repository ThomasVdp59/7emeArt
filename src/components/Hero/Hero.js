import React from "react";
import styles from "./Hero.module.scss";
import Header from "../Header/Header.js";
import HeroMain from "./HeroMain/HeroMain";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Header />
      <HeroMain />
    </div>
  );
};

export default Hero;
