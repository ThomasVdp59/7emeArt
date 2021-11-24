import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./HeroMain.module.scss";
import TrailerModal from "./TrailerModal/TrailerModal.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { pathContext } from "../../../contexts/pathContext";
import Modal from "react-modal";

const HeroMain = ({ data }) => {
  const [dateItem, setDateItem] = useState("");
  const { pathname } = useContext(pathContext);
  let { itemId } = useParams();

  useEffect(() => {
    if (data?.releaseDate?.length > 0) {
      setDateItem(
        new Date(Date.parse(data.releaseDate)).toLocaleDateString(undefined, {
          month: "long",
          day: "numeric",
          year: "numeric"
        })
      );
    } else if (data?.releaseState?.length > 0) {
      setDateItem(
        new Date(Date.parse(data.releaseState)).toLocaleDateString(undefined, {
          month: "long",
          day: "numeric"
        })
      );
    }
  }, [data]);

  return (
    <React.Fragment>
      <React.Fragment>
        {pathname.startsWith("/details") && data?.id?.length !== 0 && (
          <div className={`${styles.container} ${styles.detailsContainer}`}>
            <h1>{data.title}</h1>
            <strong>
              Sorti le {dateItem} - <span>{data.genres}</span>
            </strong>
            <ul>
              {data?.directors?.length > 0 && (
                <li>
                  Directeur(s) : <span> {data.directors}</span>
                </li>
              )}
              {data?.writers?.length > 0 && (
                <li>
                  Écrivain(s) : <span> {data.writers}</span>
                </li>
              )}
              {data?.metacriticRating?.length > 0 && (
                <li>
                  Note Metacritic : <span>{data.metacriticRating}</span>
                </li>
              )}
            </ul>
            <p>{data?.plotLocal?.length > 0 ? data.plotLocal : data.plot}</p>
            {data?.trailer?.linkEmbed?.length > 0 && (
              <TrailerModal data={data?.trailer} />
            )}
          </div>
        )}
      </React.Fragment>
      <React.Fragment>
        {pathname.startsWith("/details") === false && data.id !== null && (
          <div className={styles.container}>
            {(pathname === "/" || pathname === "/news") && (
              <strong>
                Sortie prévue le <span>{dateItem}</span>
              </strong>
            )}

            {pathname === "/films" && <strong>Le film du moment</strong>}
            {pathname === "/series" && <strong>La série du moment</strong>}

            <h1>{data.title}</h1>
            <div className={styles.cta}>
              <button className={styles.details}>
                <Link to={"/details/" + data.id}>Plus de détails</Link>
              </button>
              {data?.trailer?.linkEmbed?.length > 0 && (
                <TrailerModal data={data?.trailer} />
              )}
            </div>
          </div>
        )}
      </React.Fragment>
    </React.Fragment>
  );
};

HeroMain.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default HeroMain;
