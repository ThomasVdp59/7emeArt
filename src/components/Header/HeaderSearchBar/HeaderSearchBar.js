import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "./HeaderSearchBar.module.scss";
import { FiSearch } from "react-icons/fi";

const HeaderSearchBar = () => {
  const [data, setData] = useState([]);
  const [isListVisible, setListVisible] = useState(false);
  let cancelToken;
  const searchContainer = useRef(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleButtonClick);
  }, []);

  const handleButtonClick = (e) => {
    console.log(searchContainer);
    console.log(e.target);
    if (
      searchContainer.current &&
      !searchContainer.current.contains(e.target)
    ) {
      console.log("ouiiii");
      setListVisible(false);
    } else if (
      searchContainer.current &&
      searchContainer.current.contains(e.target)
    ) {
      console.log("nonnnn");
      setListVisible(true);
    }
  };

  const onChangeHandler = async (e) => {
    const searchTerm = e.target.value;

    //Check if there are any previous pending requests
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Operation canceled due to new request.");
    }

    //Save the cancel token for the current request
    cancelToken = axios.CancelToken.source();

    try {
      axios
        .get(
          `https://imdb-api.com/en/API/SearchTitle/k_811xf9fl/${e.target.value}`,
          { cancelToken: cancelToken.token } //Pass the cancel token to the current request
        )
        .then((response) => {
          setData(response.data.results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container} ref={searchContainer}>
      <FiSearch />
      <div>
        <input
          type="text"
          onChange={onChangeHandler}
          placeholder="Rechercher un film, une série, un genre..."
        />
        {data?.length > 0 && isListVisible && (
          <ul>
            {data.map((data, position) => (
              <li>
                <img src={data.image} alt="" />
                {data.title} - {data.description.slice(0, 6)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HeaderSearchBar;
