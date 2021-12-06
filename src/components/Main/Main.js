import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styles from "./Main.module.scss";
import MainSubsection from "./MainSubsection/MainSubsection";
import { pathContext } from "../../contexts/pathContext";

const Main = ({ details }) => {
  const [sections, setSections] = useState([]);
  const { pathname } = useContext(pathContext);

  useEffect(() => {
    switch (true) {
      case pathname.startsWith("/") && pathname.length === 1:
        setSections([
          "Actuellement au cinéma",
          "Prochaines sorties",
          "Actualités films et séries"
        ]);
        break;
      case pathname.startsWith("/films"):
        setSections([
          "Films les plus populaires",
          "Top 250 films",
          "Box-office de la semaine",
          "Actualités films"
        ]);
        break;
      case pathname.startsWith("/series"):
        setSections([
          "Séries les plus populaires",
          "Top 250 séries",
          "Actualités séries"
        ]);
        break;
      case pathname.startsWith("/news"):
        setSections([
          "Actualités films et séries",
          "Actualités films",
          "Actualités séries"
        ]);
        break;
      case pathname.startsWith("/details"):
        setSections([
          "Acteurs principaux",
          "Chiffres/Récompenses",
          "Images",
          "Similaires"
        ]);
        break;
      default:
        console.log("No path found.");
    }
  }, [pathname]);

  return (
    <div className={styles.container}>
      {sections.map((section, index) => (
        <MainSubsection key={index} title={section} details={details} />
      ))}
    </div>
  );
};

Main.propTypes = {
  details: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default Main;
