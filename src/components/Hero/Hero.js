import React, { useContext, useState, useEffect } from "react";
import styles from "./Hero.module.scss";
import Header from "../Header/Header.js";
import HeroMain from "./HeroMain/HeroMain";
import { PathContext } from "../Contexts/PathContext";
import axios from "axios";

const Hero = (props) => {
  const [itemData, setItemData] = useState([]);
  const [backdrop, setBackdrop] = useState("");
  const { pathname } = useContext(PathContext);

  useEffect(() => {
    const backdropFinder = (posters) => {
      setBackdrop(
        posters.backdrops.filter(
          (backdrop) =>
            backdrop.aspectRatio === 1.7777777777777777 && backdrop.width > 3000
        )[0].link
      );
    };
    axios.get("../database/heroComingSoon.json").then((response) => {
      setItemData(response.data);
      backdropFinder(response.data.posters);
    });
  }, []);

  return (
    <React.Fragment>
      <React.Fragment>
        {pathname.startsWith("/details") && props.details.length > 0 && (
          <div className={`${styles.container} ${styles.detailsContainer}`}>
            <Header />
            <HeroMain data={props.details} />
          </div>
        )}
      </React.Fragment>
      <React.Fragment>
        {itemData.id !== null && (
          <div
            className={styles.container}
            style={{
              backgroundImage: `url(${backdrop})`
            }}
          >
            <Header />
            <HeroMain data={itemData} />
          </div>
        )}
      </React.Fragment>
    </React.Fragment>
  );
};

export default Hero;
