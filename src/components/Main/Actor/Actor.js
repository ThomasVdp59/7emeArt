import React from "react";
import styles from "./Actor.module.scss";

const Actor = () => {
  return (
    <div className={styles.container}>
      <figure>
        <img src="https://source.unsplash.com/800x600/?girl" alt="Actor" />
        <figcaption>
          Robb Hisley <br/> <span>Personnage : Leon</span>
        </figcaption>
      </figure>
    </div>
  );
};

export default Actor;
