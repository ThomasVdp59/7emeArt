import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Hero.module.scss";
import Header from "../Header/Header.js";
import HeroMain from "./HeroMain/HeroMain";
import { pathContext } from "../../contexts/pathContext";
import axios from "axios";

const Hero = ({ details }) => {
  const [itemData, setItemData] = useState([]);
  const [backdrop, setBackdrop] = useState("");
  const [error, setError] = useState("");
  const { pathname } = useContext(pathContext);

  const backdropFinder = (posters) => {
    setBackdrop(
      posters.backdrops.filter(
        (backdrop) => backdrop.aspectRatio === 1.7777777777777777
      )[0].link
    );
    console.log(backdrop);
  };

  useEffect(() => {
    if (details) {
      setItemData(details);
    }
  }, [details]);

  useEffect(() => {
    if (itemData && itemData.posters && itemData.posters) {
      backdropFinder(itemData.posters);
    }
  }, [itemData]);

  return (
    <React.Fragment>
      <React.Fragment>
        {pathname.startsWith("/details") && details.length > 0 && (
          <div className={`${styles.container} ${styles.detailsContainer}`}>
            <Header />
            <HeroMain data={details} />
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

Hero.propTypes = {
  details: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default Hero;
