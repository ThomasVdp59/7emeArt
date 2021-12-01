import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Loading.module.scss";

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <Loader type="ThreeDots" color="white" height={100} width={100} />
    </div>
  );
}

export default Loading;
