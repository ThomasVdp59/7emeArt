import React from "react";
import styles from "./Title.module.scss";
import PropTypes from "prop-types";

const Title = ({ value }) => {
  return (
    <div className={styles.container}>
      <h2>{value}</h2>
    </div>
  );
};

Title.propTypes = {
  data: PropTypes.string
};

export default Title;
