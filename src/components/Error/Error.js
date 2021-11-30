import React, { useState, useEffect } from "react";
import styles from "./Error.module.scss";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const [countdown, setCountdown] = useState(3);
  let navigate = useNavigate();

  useEffect(() => {
    if (countdown === 0) {
      navigate(-2);
    }
    setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => {};
  }, [countdown]);

  return (
    <div className={styles.container}>
      <h1>Oops...</h1>
      <h2>Il semblerait que la page souhaitée n'existe pas...</h2>
      <h3>
        Redirection automatique dans {countdown}{" "}
        {countdown === 1 ? "seconde" : "secondes"}
      </h3>
    </div>
  );
};

export default Error;
