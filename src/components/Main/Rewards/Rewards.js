import React from "react";
import styles from "./Rewards.module.scss";

const Rewards = (props) => {
  return (
    <div className={styles.container}>
      {props.details.awards && props.details.awards.length !== 0 && (
        <ul className={styles.rewardsList}>
          <li>
            <span>
              {props.details.awards.slice(
                props.details.awards.indexOf("& ") + 2,
                props.details.awards.indexOf(" nominations")
              )}
            </span>
            <br />
            Nomination(s)
          </li>
          <li>
            <span>
              {props.details.awards.slice(
                props.details.awards.indexOf("Another ") + 8,
                props.details.awards.indexOf(" wins")
              )}
            </span>
            <br />
            Victoire(s)
          </li>
          <li>
            <span>
              {props.details.awards.slice(
                14,
                props.details.awards.indexOf(" Oscars.")
              )}
            </span>
            <br />
            Oscar(s)
          </li>
        </ul>
      )}
    </div>
  );
};

export default Rewards;
