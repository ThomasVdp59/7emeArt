import React from "react";
import styles from "./Actor.module.scss";

const Actor = (props) => {
  return (
    <div className={styles.container}>
      <figure>
        <img src={props.data.image} alt="Actor" />
        <figcaption>
          {props.data.name} <br />{" "}
          <span>{props.data.asCharacter}</span>
        </figcaption>
      </figure>
    </div>
  );
};

export default Actor;
