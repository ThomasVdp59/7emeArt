import React from "react";
import styles from "./HeaderSearchBar.module.scss";
import { FiSearch } from "react-icons/fi";

const HeaderSearchBar = () => {
  return (
    <div className={styles.container}>
      <FiSearch />
      <input type="text" placeholder="Rechercher un film, une série, un genre..."/>
    </div>
  );
};

export default HeaderSearchBar;
