import React, { useState } from "react";
import styles from "./TrailerModal.module.scss";
import Modal from "react-modal";

const TrailerModal = ({ data }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!modalIsOpen);
  };

  return (
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
          title="Youtube trailer"
          src={data?.linkEmbed + `?autoplay=false`}
          allowFullScreen={true}
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          frameBorder="no"
          scrolling="no"
        ></iframe>
      </Modal>
    </React.Fragment>
  );
};

export default TrailerModal;
