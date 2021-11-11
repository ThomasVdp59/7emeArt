import React from "react";
import styles from "./MainSubsection.module.scss";
import Title from "../Title/Title";
import ItemsCarousel from "../ItemsCarousel/ItemsCarousel";
import ItemsList from "../ItemsList/ItemsList";

const MainSubsection = (props) => {
  return (
    <div className={styles.container}>
      <Title value={props.title}></Title>
      {(() => {
        switch (props.title) {
          case "Actualités films et séries":
            return <ItemsList listType="News" />;
          case "Actualités films":
            return <ItemsList listType="News" />;
          case "Actualités séries":
            return <ItemsList listType="News" />;
          case "Actuellement au cinéma":
            return <ItemsCarousel />;
          case "Films les plus populaires":
            return <ItemsCarousel />;
          case "Séries les plus populaires":
            return <ItemsCarousel />;
          case "Prochaines sorties":
            return <ItemsCarousel />;
          case "Top 250 films":
            return <ItemsList listType="Top" />;
          case "Top 250 séries":
            return <ItemsList listType="Top" />;
          default:
            console.log("No props.title found.");
            break;
        }
      })()}
    </div>
  );
};

export default MainSubsection;
