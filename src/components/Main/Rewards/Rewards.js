import React from "react";
import styles from "./Rewards.module.scss";
import PropTypes from "prop-types";

const Rewards = ({ details }) => {
  return (
    <div className={styles.container}>
      {details?.awards?.length !== 0 && (
        <ul className={styles.rewardsList}>
          <li>
            <span>
              {details.awards.slice(
                details.awards.indexOf("& ") + 2,
                details.awards.indexOf(" nominations")
              )}
            </span>
            <br />
            Nomination(s)
          </li>
          <li>
            <span>
              {details.awards.slice(
                details.awards.indexOf("Another ") + 8,
                details.awards.indexOf(" wins")
              )}
            </span>
            <br />
            Victoire(s)
          </li>
          <li>
            <span>
              {details.awards.slice(14, details.awards.indexOf(" Oscars."))}
            </span>
            <br />
            Oscar(s)
          </li>
        </ul>
      )}
    </div>
  );
};

Rewards.propTypes = {
  details: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default Rewards;
