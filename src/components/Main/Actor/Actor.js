import React from "react";
import styles from "./Actor.module.scss";
import PropTypes from "prop-types";

const Actor = ({ actor }) => {
  return (
    <div className={styles.container}>
      <figure>
        <img
          src={actor.image}
          alt="Actor"
          onError={(e) =>
            (e.target.src = "https://imdb-api.com/images/384x528/nopicture.jpg")
          }
        />
        <figcaption>{actor.name}</figcaption>
      </figure>
    </div>
  );
};

Actor.propTypes = {
  actor: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default Actor;
