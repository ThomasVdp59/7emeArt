import React, { useState, useEffect } from "react";
import styles from "./Rewards.module.scss";
import PropTypes from "prop-types";

const Rewards = ({ rewards }) => {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    const fields = ["nomination", "win", "oscar"];
    let arrayToReturnToState = [];
    fields.forEach((field) => {
      let reward = rewards;
      if (reward.toLowerCase().indexOf(" " + field) !== -1) {
        const arraySplit = reward
          .slice(0, reward.toLowerCase().indexOf(" " + field))
          .split(" ");
        arrayToReturnToState.push(
          arraySplit[arraySplit.length - 1].replace(/\D/g, "")
        );
      }
    });
    setAwards(arrayToReturnToState);
  }, [rewards]);

  return (
    <div className={styles.container}>
      {rewards?.length !== 0 && (
        <ul className={styles.rewardsList}>
          {awards[0]?.length > 0 && (
            <li>
              <span>{awards[0]}</span>
              <br />
              Nomination(s)
            </li>
          )}
          {awards[1]?.length > 0 && (
            <li>
              <span>{awards[1]}</span>
              <br />
              Victoire(s)
            </li>
          )}
          {awards[2]?.length > 0 && (
            <li>
              <span>{awards[2]}</span>
              <br />
              Oscar(s)
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

Rewards.propTypes = {
  rewards: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default Rewards;
