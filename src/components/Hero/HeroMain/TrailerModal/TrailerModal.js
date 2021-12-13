import React, { useState, useEffect } from "react";
import styles from "./TrailerModal.module.scss";
import Modal from "react-modal";

const TrailerModal = ({ data }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const openModal = () => {
    setIsOpen(!modalIsOpen);
  };

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <React.Fragment>
      {window.innerWidth > 399 && (
        <React.Fragment>
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
              id="myFrame"
              title="Trailer"
              src={data?.linkEmbed + `?autoplay=false&width=` + width}
              allowFullScreen={true}
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              frameBorder="no"
              scrolling="no"
              className={styles.iframe}
              width={width}
              height={width / 1.77777777778}
            ></iframe>
          </Modal>
        </React.Fragment>
      )}
      {window.innerWidth <= 399 && (
        <a href={data?.link} target="_blank" className={styles.link}>
          Voir la bande-annonce
        </a>
      )}
    </React.Fragment>
  );
};

export default TrailerModal;
