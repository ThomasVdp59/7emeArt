import React from "react";
import styles from "./MainSubsection.module.scss";
import Title from "../Title/Title";
import ItemsCarousel from "../ItemsCarousel/ItemsCarousel";
import BoxOfficeMovies from "../BoxOfficeMovies/BoxOfficeMovies";
import ItemsList from "../ItemsList/ItemsList";
import ActorsList from "../ActorsList/ActorsList";
import Rewards from "../Rewards/Rewards";
import BoxOfficeItem from "../BoxOfficeItem/BoxOfficeItem";
import ItemImages from "../ItemImages/ItemImages";

const MainSubsection = (props) => {
  return (
    <div className={styles.container}>
      {props.title !== "Box-Office/Récompenses" && (
        <Title value={props.title}></Title>
      )}
      {(() => {
        switch (props.title) {
          case "Actualités films et séries":
            return <ItemsList listType="News" />;
          case "Actualités films":
            return <ItemsList listType="News" />;
          case "Actualités séries":
            return <ItemsList listType="News" />;
          case "Actuellement au cinéma":
            return <ItemsCarousel dataNeeded="inTheaters" />;
          case "Films les plus populaires":
            return <ItemsCarousel dataNeeded="mostPopular" />;
          case "Séries les plus populaires":
            return <ItemsCarousel dataNeeded="mostPopularSeries" />;
          case "Prochaines sorties":
            return <ItemsCarousel dataNeeded="comingSoon" />;
          case "Films similaires":
            return <ItemsCarousel dataNeeded="similars" />;
          case "Top 250 films":
            return <ItemsList listType="Top" dataNeeded="topMovies" />;
          case "Top 250 séries":
            return <ItemsList listType="Top" dataNeeded="topShows" />;
          case "Box-office de la semaine":
            return <BoxOfficeMovies />;
          case "Acteurs principaux":
            return <ActorsList />;
          case "Box-Office/Récompenses":
            return (
              <div className={styles.boxOfficeAndRewards}>
                <section>
                  <Title value="Box-Office"></Title>
                  <BoxOfficeItem />
                </section>
                <section>
                  <Title value="Récompenses"></Title>
                  <Rewards />
                </section>
              </div>
            );
          case "Images":
            return <ItemImages />;
          default:
            console.log("No props.title found.");
            break;
        }
      })()}
    </div>
  );
};

export default MainSubsection;
