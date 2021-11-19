import React from "react";
import styles from "./ActorsList.module.scss";
import Actor from "../Actor/Actor";

const ActorsList = (props) => {
  return (
    <div className={styles.container}>
      {props.details.actorList &&
        props.details.actorList.length !== 0 &&
        props.details.actorList
          .slice(0, 6)
          .map((actor, position) => <Actor key={position} data={actor} />)}
    </div>
  );
};

export default ActorsList;
