import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ItemsCarousel.module.scss";
import Item from "../Item/Item";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import Glide from "@glidejs/glide";
import axios from "axios";

const ItemsCarousel = ({ dataNeeded, details }) => {
  const [itemsData, setItemsData] = useState([]);
  const viewsNumber = 7;

  useEffect(() => {
    if (dataNeeded && dataNeeded.length > 0) {
      switch (dataNeeded) {
        case "mostPopularMovies":
          axios.get("../database/mostPopularMovies.json").then((response) => {
            setItemsData(response.data.items);
          });
          break;
        case "mostPopularShows":
          axios.get("../database/mostPopularShows.json").then((response) => {
            setItemsData(response.data.items);
          });
          break;
        case "comingSoon":
          axios.get("../database/comingSoon.json").then((response) => {
            setItemsData(response.data.items);
          });
          break;
        case "inTheaters":
          axios.get("./database/mostPopularMovies.json").then((response) => {
            setItemsData(response.data.items);
          });
          break;
        default:
          console.log("Correct needed");
          break;
      }
    }
  }, []);

  useEffect(() => {
    let sliders;
    if (details && details.similars && details.similars.length > 0) {
      setItemsData(details.similars);
      sliders = document.querySelectorAll(".glide");
    } else if (itemsData) {
      sliders = document.querySelectorAll(".glide" + dataNeeded);
    }
    if (itemsData.length > 0) {
      sliders.forEach((item) => {
        if (itemsData.length > viewsNumber) {
          new Glide(item, {
            type: "slider",
            startAt: 0,
            perView: viewsNumber,
            dragDistance: 0,
            rewind: true
          }).mount();
        } else {
          new Glide(item, {
            type: "slider",
            startAt: 0,
            perView: viewsNumber,
            swipeThreshold: false,
            dragThreshold: false,
            rewind: true
          }).mount();
        }
      });
    }
  }, [details, itemsData]);

  return (
    <div
      className={`glide${
        dataNeeded && dataNeeded.length && dataNeeded.length > 0
          ? dataNeeded
          : ""
      }
        ${styles.container}`}
    >
      <React.Fragment>
        {itemsData.length !== viewsNumber && (
          <div data-glide-el="controls">
            <FiArrowLeftCircle data-glide-dir="<" />
          </div>
        )}
        <div
          className={`glide__track ${styles.carousel}`}
          data-glide-el="track"
        >
          <ul className="glide__slides">
            {itemsData &&
              itemsData.length > 0 &&
              itemsData.map((data, position) => (
                <li className="glide__slide" key={position}>
                  {" "}
                  <Item type="Slide" data={data} />
                </li>
              ))}
          </ul>
        </div>
        {itemsData.length !== viewsNumber && (
          <div data-glide-el="controls">
            <FiArrowRightCircle data-glide-dir=">" />
          </div>
        )}
      </React.Fragment>
    </div>
  );
};

ItemsCarousel.propTypes = {
  dataNeeded: PropTypes.string,
  details: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default ItemsCarousel;
