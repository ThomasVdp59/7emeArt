import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Hero.module.scss";
import Header from "../Header/Header.js";
import HeroMain from "./HeroMain/HeroMain";
import { pathContext } from "../../contexts/pathContext";
import axios from "axios";
import Loading from "../Loading/Loading.js";

const Hero = ({ details }) => {
  const [itemData, setItemData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [backdrop, setBackdrop] = useState("");
  const [error, setError] = useState("");
  const { pathname } = useContext(pathContext);

  const backdropFinder = (posters) => {
    try {
      setBackdrop(
        posters.backdrops.filter(
          (backdrop) => backdrop.aspectRatio === 1.7777777777777777
        )[0].link
      );
    } catch (error) {
      console.log("No backdrop");
    }
  };

  useEffect(() => {
    if (details) {
      setLoading(false);
      setItemData(details);
    } else {
      let itemData;
      let apiCallCategory;
      if (pathname === "/" || pathname === "/news") {
        apiCallCategory = "ComingSoon";
      } else if (pathname === "/films") apiCallCategory = "MostPopularMovies";
      else if (pathname === "/series") apiCallCategory = "MostPopularTVs";
      axios
        .get("https://imdb-api.com/en/API/" + apiCallCategory + "/k_811xf9fl")
        .then((response) => {
          itemData = response.data.items[0];
          axios
            .get(
              "https://imdb-api.com/fr/API/Title/k_811xf9fl/" +
                response.data.items[0].id +
                "/Posters"
            )
            .then((response) => {
              setLoading(false);
              itemData = { ...itemData, ...response.data };
              setItemData(itemData);
            });
        });
    }
  }, [details]);

  useEffect(() => {
    if (itemData?.posters?.backdrops[0]?.id?.length > 0) {
      backdropFinder(itemData.posters);
    } else {
    }
  }, [itemData]);

  return (
    <React.Fragment>
      {isLoading ? (
        <div style={{ height: "100vh" }}>
          <Loading />
        </div>
      ) : (
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
      )}
    </React.Fragment>
  );
};

Hero.propTypes = {
  details: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default Hero;
