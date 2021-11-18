import React, { useEffect, useState } from "react";
import styles from "./ItemsCarousel.module.scss";
import Item from "../Item/Item";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import Glide from "@glidejs/glide";
import axios from "axios";

const ItemsCarousel = (props) => {
  const [itemsData, setItemsData] = React.useState([]);
  const viewsNumber = 7;

  useEffect(() => {
    if (props.dataNeeded === "mostPopularMovies") {
      axios.get("../database/mostPopularMovies.json").then((response) => {
        setItemsData(response.data.items);
        const sliders = document.querySelectorAll(".glide");
        sliders.forEach((item) => {
          new Glide(item, {
            type: "slider",
            startAt: 0,
            perView: viewsNumber,
            bound: true
          }).mount();
        });
      });
    } else if (props.dataNeeded === "mostPopularShows") {
      axios.get("../database/mostPopularShows.json").then((response) => {
        setItemsData(response.data.items);
        const sliders = document.querySelectorAll(".glide");
        sliders.forEach((item) => {
          new Glide(item, {
            type: "slider",
            startAt: 0,
            perView: viewsNumber,
            bound: true
          }).mount();
        });
      });
    } else if (props.dataNeeded === "inTheaters") {
      axios.get("../database/inTheathers.json").then((response) => {
        setItemsData(response.data.items);
        const sliders = document.querySelectorAll(".glide");
        sliders.forEach((item) => {
          new Glide(item, {
            type: "slider",
            startAt: 0,
            perView: viewsNumber,
            bound: true
          }).mount();
        });
      });
    } else {
      if (props.dataNeeded === "comingSoon") {
        axios.get("../database/comingSoon.json").then((response) => {
          setItemsData(response.data.items);
          const sliders = document.querySelectorAll(".glide");
          sliders.forEach((item) => {
            new Glide(item, {
              type: "slider",
              startAt: 0,
              perView: viewsNumber,
              bound: true
            }).mount();
          });
        });
      }
    }
  }, []);

  return (itemsData.length > 0 && (
    <div className={`glide ${styles.container}`}>
      {itemsData.length !== viewsNumber && (
        <div data-glide-el="controls">
          <FiArrowLeftCircle data-glide-dir="<" />
        </div>
      )}

      <div className={`glide__track ${styles.carousel}`} data-glide-el="track">
        <ul className="glide__slides">
          {itemsData.map((data, position) => (
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
    </div>
  ): "");
};

export default ItemsCarousel;
