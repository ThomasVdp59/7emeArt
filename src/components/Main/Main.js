import React, { useState, useEffect, useContext } from "react";
import styles from "./Main.module.scss";
import MainSubsection from "./MainSubsection/MainSubsection";
import { PathContext } from "../Contexts/PathContext";

const Main = (props) => {
  const [sections, setSections] = useState([]);
  const { pathname } = useContext(PathContext);

  useEffect(() => {
    switch (pathname) {
      case "/":
        setSections([
          "Actuellement au cinéma",
          "Prochaines sorties",
          "Actualités films et séries"
        ]);
        break;
      case "/films":
        setSections([
          "Films les plus populaires",
          "Top 250 films",
          "Box-office",
          "Actualités films"
        ]);
        break;
      case "/series":
        setSections([
          "Séries les plus populaires",
          "Top 250 séries",
          "Actualités séries"
        ]);
        break;
      case "/news":
        setSections([
          "Actualités films et séries",
          "Actualités films",
          "Actualités séries"
        ]);
        break;
      default:
        console.log("No path found.");
    }
  }, [props.path]);

  return (
    <div className={styles.container}>
      {sections.map((section, index) => (
        <MainSubsection key={index} title={section} />
      ))}
    </div>
  );
};

export default Main;
