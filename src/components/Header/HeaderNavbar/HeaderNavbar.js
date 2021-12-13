import React, { useState } from "react";
import styles from "./HeaderNavbar.module.scss";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { stack as Menu } from "react-burger-menu";
import logo from "../../../assets/images/logo.png";

const HeaderNavbar = () => {
  const [menuOpen, isMenuOpen] = useState(false);
  const toggleMenu = () => {
    isMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.fullLinks}>
        <Link className={styles.linkText} to="/">
          Accueil
        </Link>
        <Link className={styles.linkText} to="/films">
          Films
        </Link>
        <Link className={styles.linkText} to="/series">
          Séries
        </Link>
        <Link className={styles.linkText} to="/news">
          News
        </Link>
      </div>
      <div className={styles.burgerMenu}>
        <GiHamburgerMenu onClick={toggleMenu} />
        <Menu
          isOpen={menuOpen}
          right
          disableAutoFocus
          width={150}
          className={styles.menu}
          customBurgerIcon={false}
          itemListClassName={styles.itemList}
        >
          <Link className="menu-item" to="/">
            Accueil
          </Link>
          <Link className="menu-item" to="/films">
            Films
          </Link>
          <Link className="menu-item" to="/series">
            Séries
          </Link>
          <Link className="menu-item" to="/news">
            News
          </Link>
          <MdClose onClick={toggleMenu} />
        </Menu>
      </div>
    </div>
  );
};

export default HeaderNavbar;
