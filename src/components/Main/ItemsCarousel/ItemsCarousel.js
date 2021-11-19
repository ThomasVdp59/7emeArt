import React, { useEffect, useState } from "react";
import styles from "./ItemsCarousel.module.scss";
import Item from "../Item/Item";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import Glide from "@glidejs/glide";
import axios from "axios";

const ItemsCarousel = (props) => {
  const [itemsData, setItemsData] = useState([]);
  const viewsNumber = 7;

  useEffect(() => {
    if (props && props.dataNeeded && props.dataNeeded.length > 0) {
      switch (props.dataNeeded) {
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
          console.log("Correct props needed");
          break;
      }
    }
  }, [props]);

  useEffect(() => {
    let sliders;
    if (props && props.details && props.details.similars && props.details.similars.length > 0) {
      setItemsData(props.details.similars);
      sliders = document.querySelectorAll(".glide");
    } else if (itemsData) {
      sliders = document.querySelectorAll(".glide" + props.dataNeeded);
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
  }, [props, itemsData]);

  return (
    <div className={`glide${props.dataNeeded} ${styles.container}`}>
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
            {props &&
              itemsData &&
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

export default ItemsCarousel;
