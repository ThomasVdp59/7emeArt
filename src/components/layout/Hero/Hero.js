import React from "react";
import styles from "./Hero.module.scss";
import Header from "../Header/Header.js";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Header></Header>
    </div>
  );
};

export default Hero;
