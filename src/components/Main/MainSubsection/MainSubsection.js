import React from "react";
import styles from "./MainSubsection.module.scss";
import Title from "../Title/Title";
import ItemsCarousel from "../ItemsCarousel/ItemsCarousel";

const MainSubsection = (props) => {
  return (
    <div className={styles.container}>
      <Title value={props.title}></Title>
      <ItemsCarousel sectionTitle={props.title}></ItemsCarousel>
    </div>
  );
};

export default MainSubsection;
