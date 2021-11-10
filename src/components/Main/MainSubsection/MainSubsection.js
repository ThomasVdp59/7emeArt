import React from "react";
import styles from "./MainSubsection.module.scss";
import Title from "../Title/Title";
import ItemsCarousel from "../ItemsCarousel/ItemsCarousel";
import NewsList from "../NewsList/NewsList";

const MainSubsection = (props) => {
  return (
    <div className={styles.container}>
      <Title value={props.title}></Title>
      {(() => {
        switch (props.title) {
          case "Actualités films et séries":
            return <NewsList />;
          case "Actualités films":
            return <NewsList />;
          case "Actualités séries":
            return <NewsList />;
          case "Actuellement au cinéma":
            return <ItemsCarousel />;
          case "Prochaines sorties":
            return <ItemsCarousel />;
          default:
            console.log("No props.title found.");
            break;
        }
      })()}
    </div>
  );
};

export default MainSubsection;
