import React from "react";
import styles from "./Title.module.scss";

const Title = (props) => {
  return (
    <div className={styles.container}>
      <h2>{props.value}</h2>
    </div>
  );
};

export default Title;
