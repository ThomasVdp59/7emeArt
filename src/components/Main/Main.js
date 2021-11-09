import React, { useState, useEffect } from "react";
import styles from "./Main.module.scss";
import MainSubsection from "./MainSubsection/MainSubsection";

const Main = (props) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const path = props.path;
    switch (path) {
      case "/":
        setSections([
          "Actuellement au cinéma",
          "Prochaines sorties",
          "Actualités films et séries"
        ]);
        break;
      default:
        console.log("No path found.");
    }
  }, []);

  return (
    <div className={styles.container}>
      {sections.map((section, index) => (
        <MainSubsection key={index} title={section}></MainSubsection>
      ))}
    </div>
  );
};

export default Main;
