import React, { useContext, useState, useEffect } from "react";
import styles from "./HeroMain.module.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { PathContext } from "../../Contexts/PathContext";
import Modal from "react-modal";
import axios from "axios";

const HeroMain = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { pathname } = useContext(PathContext);
  let { itemId } = useParams();
  const date = new Date(Date.parse(props.data.releaseDate)).toLocaleDateString(
    undefined,
    { month: "long", day: "numeric" }
  );

  const openModal = () => {
    setIsOpen(!modalIsOpen);
  };

  if (pathname.startsWith("/details")) {
    return (
      <div className={`${styles.container} ${styles.detailsContainer}`}>
        <h1>{itemId}</h1>
        <strong>
          Sorti le 24 décembre 2020 - <span> Action, Adventure, Sci-Fi</span>
        </strong>
        <ul>
          <li>
            Directeur(s) : <span> Todd Philips</span>
          </li>
          <li>
            Écrivain(s) : <span> Todd Philips, Scott Silver</span>
          </li>
          <li>
            Note Metacritic : <span>84</span>
          </li>
        </ul>
        <p>
          Dom Cobb is a skilled thief, the absolute best in the dangerous art of
          extraction, stealing valuable secrets from deep within the
          subconscious during the dream state, when the mind is at its most
          vulnerable. Cobb&#39;s rare ability has made him a coveted player in
          this treacherous new world of corporate espionage, but it has also
          made him an international fugitive and cost him everything he has ever
          loved. Now Cobb is being offered a chance at redemption. One last job
          could give him his life back but only if he can accomplish the
          impossible, inception. Instead of the perfect heist, Cobb and his team
          of specialists have to pull off the reverse: their task is not to
          steal an idea, but to plant one. If they succeed, it could be the
          perfect crime. But no amount of careful planning or expertise can
          prepare the team for the dangerous enemy that seems to predict their
          every move. An enemy that only Cobb could have seen coming.
        </p>
        <div className={styles.cta}>
          <button className={styles.trailer} to="/" onClick={openModal}>
            Voir la bande-annonce
          </button>
        </div>
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
    );
  } else {
    return (props.data.id != null && (
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
    ): "");
  }
};

export default HeroMain;
