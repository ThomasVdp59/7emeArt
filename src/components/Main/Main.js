import React, { useState, useEffect, useContext } from "react";
import styles from "./Main.module.scss";
import MainSubsection from "./MainSubsection/MainSubsection";
import { PathContext } from "../Contexts/PathContext";

const Main = (props) => {
  const [sections, setSections] = useState([]);
  const { pathname } = useContext(PathContext);

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
          "Box-Office/Récompenses",
          "Images",
          "Films similaires"
        ]);
        break;
      default:
        console.log("No path found.");
    }
  }, [pathname]);

  return (
    <div className={styles.container}>
      {sections.map((section, index) => (
        <MainSubsection key={index} title={section} details={props.details} />
      ))}
    </div>
  );
};

export default Main;
