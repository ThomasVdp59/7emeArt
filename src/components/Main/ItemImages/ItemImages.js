import React, { useState } from "react";
import styles from "./ItemImages.module.scss";

const ItemImages = () => {
  const [lightbox, setLightbox] = useState("");
  const arrayImages = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n"
  ];

  function handleClick(position, e) {
    setLightbox(position);
  }

  return (
    <div className={styles.container}>
      {arrayImages.map((image, position) => {
        if (position === 0) {
          return (
            <div className={styles.mainImage}>
              <img
                src="https://source.unsplash.com/800x600/?girl"
                alt="anImage"
                key={position}
                onClick={handleClick.bind(this, position)}
                className={`${
                  lightbox === position ? styles.imageLight : styles.image
                }`}
              />
            </div>
          );
        } else {
          if (position === 0) {
            return (
              <div className={styles.mainImage}>
                <img
                  src="https://source.unsplash.com/800x600/?girl"
                  alt="anImage"
                  key={position}
                  onClick={handleClick.bind(this, position)}
                  className={`${
                    lightbox === position ? styles.imageLight : styles.image
                  }`}
                />
              </div>
            );
          }

          return (
            <img
              src="https://source.unsplash.com/800x600/?girl"
              alt="anImage"
              key={position}
              onClick={handleClick.bind(this, position)}
              className={`${
                lightbox === position ? styles.imageLight : styles.image
              }`}
            />
          );
        }
      })}
    </div>
  );
};
export default ItemImages;
