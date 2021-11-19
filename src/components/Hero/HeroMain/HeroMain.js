import React, { useContext, useState } from "react";
import styles from "./HeroMain.module.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { PathContext } from "../../Contexts/PathContext";
import Modal from "react-modal";

const HeroMain = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { pathname } = useContext(PathContext);
  let { itemId } = useParams();
  const date = new Date(Date.parse(props.data.releaseDate)).toLocaleDateString(
    undefined,
    { month: "long", day: "numeric", year: "numeric" }
  );

  const openModal = () => {
    setIsOpen(!modalIsOpen);
  };

  return (
    <React.Fragment>
      <React.Fragment>
        {pathname.startsWith("/details") && props.data.actorList &&
        props.data.actorList.length !== 0 && (
          <div className={`${styles.container} ${styles.detailsContainer}`}>
            <h1>{props.data.title}</h1>
            <strong>
              Sorti le {date} - <span>{props.data.genres}</span>
            </strong>
            <ul>
              <li>
                Directeur(s) : <span> {props.data.directors}</span>
              </li>
              <li>
                Écrivain(s) : <span> {props.data.writers}</span>
              </li>
              {props.data.metacriticRating && props.data.metacriticRating.length > 0 && (
                <li>
                  Note Metacritic : <span>{props.data.metacriticRating}</span>
                </li>
              )}
            </ul>
            <p>
              {props.data.plotLocal && props.data.plotLocal.length > 0
                ? props.data.plotLocal
                : props.data.plot}
            </p>
            {props.data.trailer && props.data.trailer.length > 0 && (
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
        {pathname.startsWith("/details") !== true && props.data.id !== null && (
          <div className={styles.container}>
            {(pathname === "/" || pathname === "/news") && (
              <strong>
                Sortie prévue le <span>{date}</span>
              </strong>
            )}

            {pathname === "/films" && <strong>Le film du moment</strong>}
            {pathname === "/series" && <strong>La série du moment</strong>}

            <h1>{props.data.title}</h1>
            <div className={styles.cta}>
              <button className={styles.details}>
                <Link to="/">Plus de détails</Link>
              </button>

              <button className={styles.trailer}>
                <Link to="/">Voir la bande-annonce</Link>
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    </React.Fragment>
  );
};

export default HeroMain;
