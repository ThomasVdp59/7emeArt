import React, { useContext, useState, useEffect } from "react";
import styles from "./Hero.module.scss";
import Header from "../Header/Header.js";
import HeroMain from "./HeroMain/HeroMain";
import { PathContext } from "../Contexts/PathContext";
import axios from "axios";

const Hero = () => {
  const [itemData, setItemData] = useState([]);
  const [backdrop, setBackdrop] = useState("");
  const { pathname } = useContext(PathContext);

  useEffect(() => {
    axios.get("../database/heroComingSoon.json").then((response) => {
      setItemData(response.data);
      backdropFinder(response.data.posters);
    });
  }, []);

  const backdropFinder = (posters) => {
    console.log(posters);
    setBackdrop(
      posters.backdrops.filter(
        (backdrop) =>
          backdrop.aspectRatio === 1.7777777777777777 && backdrop.width > 3000
      )[0].link
    );
    console.log(backdrop);
  };

  if (pathname.startsWith("/details") && itemData.id !== null) {
    return (
      <div className={`${styles.container} ${styles.detailsContainer}`}>
        <Header />
        <HeroMain data={itemData} />
      </div>
    );
  } else if (itemData.id !== null) {
    return (
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${backdrop})`
        }}
      >
        <Header />
        <HeroMain data={itemData} />
      </div>
    );
  }
};
export default Hero;
