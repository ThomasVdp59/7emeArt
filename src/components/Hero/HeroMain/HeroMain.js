import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./HeroMain.module.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { pathContext } from "../../../contexts/pathContext";
import Modal from "react-modal";

const HeroMain = ({ data }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [dateItem, setDateItem] = useState("");
  const { pathname } = useContext(pathContext);
  let { itemId } = useParams();

  const openModal = () => {
    setIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    console.log(data);
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
      console.log(dateItem);
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
              <li>
                Directeur(s) : <span> {data.directors}</span>
              </li>
              <li>
                Écrivain(s) : <span> {data.writers}</span>
              </li>
              {data?.metacriticRating?.length > 0 && (
                <li>
                  Note Metacritic : <span>{data.metacriticRating}</span>
                </li>
              )}
            </ul>
            <p>{data?.plotLocal?.length > 0 ? data.plotLocal : data.plot}</p>
            {data?.trailer?.length > 0 && (
              <div className={styles.cta}>
                <button className={styles.trailer} to="/" onClick={openModal}>
                  Voir la bande-annonce
                </button>
              </div>
            )}
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={() => (document.body.style.overflowY = "hidden")}
              onAfterClose={() => (document.body.style.overflowY = "unset")}
              onRequestClose={openModal}
              shouldCloseOnOverlayClick={true}
              preventScroll={true}
              className={styles.modal}
              overlayClassName={styles.modalOverlay}
            >
              <iframe
                title="Youtube trailer"
                src="https://www.youtube.com/embed/KK8FHdFluOQ?autoplay=1&mute=0"
              ></iframe>
            </Modal>
          </div>
        )}
      </React.Fragment>
      <React.Fragment>
        {pathname.startsWith("/details") !== true && data.id !== null && (
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
              {data.trailer && (
                <button className={styles.trailer}>
                  <Link to="/">Voir la bande-annonce</Link>
                </button>
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
