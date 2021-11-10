import React from "react";
import styles from "./Footer.module.scss";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiTwitter } from "react-icons/si";

const Footer = () => {
  const author = "Thomas Vanderplancke";
  const year = new Date().getFullYear();
  console.log(year);

  return (
    <footer className={styles.container}>
      <div className={styles.footerMain}>
        <div className={styles.footerMainInfos}>
          <span className={styles.footerMainInfosBrand}>7ème Art</span>
          <span className={styles.footerMainInfosDesc}>
            Films et séries tv, <br /> Site d'actualité cinéma
          </span>
          <div className={styles.footerMainInfosSocial}>
            <FaFacebook />
            <SiTwitter />
            <RiInstagramFill />
            <FaTiktok />
          </div>
        </div>
        <div className={styles.footerMainNav}>
          <div className={styles.footerMainNavGroup}>
            <h4>À propos</h4>
            <div className={styles.footerMainNavGroupLinks}>
              <span>Qui sommes-nous</span>
              <span>Recrutement</span>
            </div>
          </div>
          <div className={styles.footerMainNavGroup}>
            <h4>Aide</h4>
            <div className={styles.footerMainNavGroupLinks}>
              <span>Contact</span>
              <span>Accessibilité</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.footerSub}>
        <span>
          ©7èmeArt, {year}. Crée par {author}.
        </span>
        <div className={styles.footerSubHeadings}>
          <h5>Cookies</h5>
          <h5>Confidentialité</h5>
          <h5>Conditions générales</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
