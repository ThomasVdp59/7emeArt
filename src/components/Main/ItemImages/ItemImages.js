import React, { useState } from "react";
import styles from "./ItemImages.module.scss";

const ItemImages = (props) => {
  let images;
  let arrayImages;
  let firstImage;
  let otherImages;
  const [lightbox, setLightbox] = useState();

  if (props.details.images && props.details.images.items.length > 0) {
    images = props.details.images.items.slice(0, 12);
    arrayImages = ["https://source.unsplash.com/800x600/?girl", ...images];
    console.log(arrayImages);
    firstImage = arrayImages.slice(0, 1);
    otherImages = arrayImages.slice(1, arrayImages.length);
  }

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
      {arrayImages && arrayImages.length > 0 && (
        <React.Fragment>
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
            {otherImages.map((image, position) => (
              <img
                src={image.image}
                alt="anImage"
                key={image.image}
                onClick={handleClick.bind(this, image.image)}
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
        </React.Fragment>
      )}
    </div>
  );
};
export default ItemImages;
