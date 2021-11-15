import React, { useState } from "react";
import styles from "./ItemImages.module.scss";

const ItemImages = () => {
  const [lightbox, setLightbox] = useState();
  const arrayImages = [
    "https://source.unsplash.com/800x600/?girl",
    "https://source.unsplash.com/800x600/?guy",
    "https://source.unsplash.com/800x600/?chicken",
    "https://source.unsplash.com/800x600/?forest",
    "https://source.unsplash.com/800x600/?city",
    "https://source.unsplash.com/800x600/?women",
    "https://source.unsplash.com/800x600/?man",
    "https://source.unsplash.com/800x600/?dog",
    "https://source.unsplash.com/800x600/?cat",
    "https://source.unsplash.com/800x600/?pen",
    "https://source.unsplash.com/800x600/?house",
    "https://source.unsplash.com/800x600/?computer",
    "https://source.unsplash.com/800x600/?marvel"
  ];
  const firstImage = arrayImages.slice(0, 1);
  const othersImages = arrayImages.slice(1, arrayImages.length);

  const handleClick = (image, e) => {
    e.preventDefault();
    lightbox === true ? setLightbox(false) : setLightbox(true);
    console.log(image);
    const lightboxElement = document.getElementById("lightbox");
    const img = document.createElement("img");
    img.src = image;
    while (lightboxElement.firstChild) {
      lightboxElement.removeChild(lightboxElement.firstChild);
    }
    lightboxElement.appendChild(img);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainImage}>
        <img
          src={firstImage[0]}
          alt="anImage"
          key={firstImage[0]}
          onClick={handleClick.bind(this, firstImage[0])}
          className={`${
            lightbox === firstImage[0] ? styles.imageLight : styles.image
          }`}
        />
      </div>
      <div className={styles.otherImages}>
        {othersImages.map((image, position) => (
          <img
            src={image}
            alt="anImage"
            key={image}
            onClick={handleClick.bind(this, image)}
            className={`${
              lightbox === image ? styles.imageLight : styles.image
            }`}
          />
        ))}
      </div>
      <div
        id="lightbox"
        onClick={(e) => {
          e.preventDefault();
          setLightbox(false);
          console.log("Le lien a été cliqué.");
        }}
        className={`${styles.lightbox} ${
          lightbox === true ? styles.lightboxActive : ""
        }`}
      ></div>
    </div>
  );
};
export default ItemImages;
