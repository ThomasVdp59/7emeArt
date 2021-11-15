import React from "react";
import styles from "./ActorsList.module.scss";
import Actor from "../Actor/Actor";

const ActorsList = () => {
  const numberOfActorsToShow = 6;
  const actors = [
    "Robb Hisley",
    "Robb Hisley",
    "Robb Hisley",
    "Robb Hisley",
    "Robb Hisley",
    "Robb Hisley",
    "Robb Hisley",
    "Robb Hisley",
    "Robb Hisley",
    "Robb Hisley",
    "Robb Hisley"
  ];
  const actorsToShow = actors.slice(0, numberOfActorsToShow);
  return (
    <div className={styles.container}>
      {actorsToShow.map((actor, position) => (
        <Actor key={position} />
      ))}
    </div>
  );
};

export default ActorsList;
