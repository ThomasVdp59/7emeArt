import React from "react";
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";
import HeaderSearchBar from "./HeaderSearchBar/HeaderSearchBar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <HeaderNavbar/>
      <HeaderSearchBar/>
    </div>
  );
};

export default Header;
