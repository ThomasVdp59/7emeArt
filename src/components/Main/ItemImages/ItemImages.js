import React, { useState } from "react";
import styles from "./ItemImages.module.scss";
import PropTypes from "prop-types";

const ItemImages = ({ details }) => {
  let images;
  let firstImage;
  let otherImages;
  const [lightbox, setLightbox] = useState();

  if (details?.images?.items?.length > 0) {
    images = details.images.items.slice(0, 13);
    firstImage = images.slice(0, 1);
    otherImages = images.slice(1, images.length);
  }

  const handleClick = (image, e) => {
    e.preventDefault();
    lightbox === true ? setLightbox(false) : setLightbox(true);
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
      {images?.length > 0 && (
        <React.Fragment>
          <div className={styles.mainImage}>
            <img
              src={firstImage[0].image}
              alt="anImage"
              key={firstImage[0].image}
              onError={(e) => (e.target.style = "display: none")}
              onClick={handleClick.bind(this, firstImage[0].image)}
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
                onError={(e) => (e.target.style = "display: none")}
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

ItemImages.propTypes = {
  details: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default ItemImages;
