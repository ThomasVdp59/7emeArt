import React from "react";
import PropTypes from "prop-types";
import styles from "./BoxOfficeItem.module.scss";

const BoxOfficeItem = ({ details }) => {
  return (
    <div className={styles.container}>
      {details.boxOffice && details.boxOffice.length !== 0 && (
        <ul>
          <li>
            Budget :{" "}
            <span>
              {details.boxOffice.budget.slice(
                0,
                details.boxOffice.budget.indexOf("(")
              )}{" "}
              (estimation)
            </span>
          </li>
          <li>
            Week-end d'ouverture aux États-Unis :{" "}
            <span>
              {details.boxOffice.openingWeekendUSA.slice(
                0,
                details.boxOffice.openingWeekendUSA.indexOf(", ")
              )}{" "}
            </span>
          </li>
          <li>
            Recette aux États-Unis : <span>{details.boxOffice.grossUSA}</span>
          </li>
          <li>
            Recette internationale:{" "}
            <span>{details.boxOffice.cumulativeWorldwideGross}</span>
          </li>
        </ul>
      )}
    </div>
  );
};

BoxOfficeItem.propTypes = {
  details: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default BoxOfficeItem;
