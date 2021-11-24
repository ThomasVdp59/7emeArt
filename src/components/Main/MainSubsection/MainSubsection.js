import React from "react";
import styles from "./MainSubsection.module.scss";
import PropTypes from "prop-types";
import Title from "../Title/Title";
import ItemsCarousel from "../ItemsCarousel/ItemsCarousel";
import BoxOfficeMovies from "../BoxOfficeMovies/BoxOfficeMovies";
import ItemsList from "../ItemsList/ItemsList";
import ActorsList from "../ActorsList/ActorsList";
import Rewards from "../Rewards/Rewards";
import BoxOfficeItem from "../BoxOfficeItem/BoxOfficeItem";
import ItemImages from "../ItemImages/ItemImages";

const MainSubsection = ({ title, details }) => {
  return (
    <div className={styles.container}>
      {title !== "Box-Office/Récompenses" &&
        title !== "Films similaires" &&
        title !== "Acteurs principaux" &&
        title !== "Images" && <Title value={title}></Title>}
      {(() => {
        switch (title) {
          case "Actualités films et séries":
            return <ItemsList listType="News" />;
          case "Actualités films":
            return <ItemsList listType="News" />;
          case "Actualités séries":
            return <ItemsList listType="News" />;
          case "Actuellement au cinéma":
            return <ItemsCarousel dataNeeded="inTheaters" />;
          case "Films les plus populaires":
            return <ItemsCarousel dataNeeded="mostPopularMovies" />;
          case "Séries les plus populaires":
            return <ItemsCarousel dataNeeded="mostPopularShows" />;
          case "Prochaines sorties":
            return <ItemsCarousel dataNeeded="comingSoon" />;
          case "Films similaires":
            if (details?.similars?.length > 0) {
              return (
                <React.Fragment>
                  <Title value={title}></Title>
                  <ItemsCarousel details={details} />
                </React.Fragment>
              );
            } else {
              return null;
            }
          case "Top 250 films":
            return <ItemsList listType="Top" dataNeeded="topMovies" />;
          case "Top 250 séries":
            return <ItemsList listType="Top" dataNeeded="topShows" />;
          case "Box-office de la semaine":
            return <BoxOfficeMovies dataNeeded="boxOfficeWeek" />;
          case "Acteurs principaux":
            if (details?.actorList?.length > 0) {
              return (
                <React.Fragment>
                  <Title value={title}></Title>
                  <ActorsList details={details} />
                </React.Fragment>
              );
            } else {
              return null;
            }
          case "Box-Office/Récompenses":
            return (
              <div className={styles.boxOfficeAndRewards}>
                {details?.boxOffice?.budget?.length > 0 && (
                  <section>
                    <Title value="Box-Office"></Title>
                    <BoxOfficeItem details={details} />
                  </section>
                )}
                {details?.awards?.length > 0 && (
                  <section>
                    <Title value="Récompenses"></Title>
                    <Rewards rewards={details.awards} />
                  </section>
                )}
              </div>
            );
          case "Images":
            if (details?.images?.items?.length > 0) {
              return (
                <React.Fragment>
                  <Title value={title}></Title>
                  <ItemImages details={details} />
                </React.Fragment>
              );
            } else {
              return null;
            }
          default:
            console.log("No title found.");
            break;
        }
      })()}
    </div>
  );
};

MainSubsection.propTypes = {
  details: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  title: PropTypes.string.isRequired
};

export default MainSubsection;
