import React from "react";
import PropTypes from "prop-types";
import styles from "./ActorsList.module.scss";
import Actor from "../Actor/Actor";

const ActorsList = ({ details }) => {
  return (
    <div className={styles.container}>
      {details?.actorList?.length !== 0 &&
        details.actorList
          .slice(0, 6)
          .map((actor, position) => <Actor key={actor.id} actor={actor} />)}
    </div>
  );
};

ActorsList.propTypes = {
  details: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default ActorsList;
