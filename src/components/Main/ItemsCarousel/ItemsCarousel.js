import React from "react";
import styles from "./ItemsCarousel.module.scss";
import Item from "./Item/Item";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import Glide from "@glidejs/glide";
import { useEffect } from "react";

const ItemsCarousel = (props) => {
  useEffect(() => {
    const sliders = document.querySelectorAll(".glide");
    sliders.forEach((item) => {
      new Glide(item, {
        type: "carousel",
        startAt: 0,
        perView: 7,
        gap: 8
      }).mount();
    });
  }, []);

  return (
    <div className={`glide ${styles.container}`}>
      <div data-glide-el="controls">
        <FiArrowLeftCircle data-glide-dir="<" />
      </div>
      <div className={`glide__track ${styles.carousel}`} data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            {" "}
            <Item></Item>
          </li>
          <li className="glide__slide">
            {" "}
            <Item></Item>
          </li>
          <li className="glide__slide">
            {" "}
            <Item></Item>
          </li>
          <li className="glide__slide">
            {" "}
            <Item></Item>
          </li>
          <li className="glide__slide">
            {" "}
            <Item></Item>
          </li>
          <li className="glide__slide">
            {" "}
            <Item></Item>
          </li>
          <li className="glide__slide">
            {" "}
            <Item></Item>
          </li>
          <li className="glide__slide">
            {" "}
            <Item></Item>
          </li>
        </ul>
      </div>
      <div data-glide-el="controls">
        <FiArrowRightCircle data-glide-dir=">" />
      </div>
    </div>
  );
};

export default ItemsCarousel;
