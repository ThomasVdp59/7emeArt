import React from "react";
import styles from "./BoxOfficeItem.module.scss";

const BoxOfficeItem = (props) => {
  return (
    <div className={styles.container}>
      {props.details.boxOffice && props.details.boxOffice.length !== 0 && (
        <ul>
          <li>
            Budget :{" "}
            <span>
              {props.details.boxOffice.budget.slice(
                0,
                props.details.boxOffice.budget.indexOf("(")
              )}{" "}
              (estimation)
            </span>
          </li>
          <li>
            Week-end d'ouverture aux États-Unis :{" "}
            <span>
              {props.details.boxOffice.openingWeekendUSA.slice(
                0,
                props.details.boxOffice.openingWeekendUSA.indexOf(" ")
              )}{" "}
              :
            </span>
          </li>
          <li>
            Recette aux États-Unis :{" "}
            <span>{props.details.boxOffice.grossUSA}</span>
          </li>
          <li>
            Recette internationale:{" "}
            <span>{props.details.boxOffice.cumulativeWorldwideGross}</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default BoxOfficeItem;
