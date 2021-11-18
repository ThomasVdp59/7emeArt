import React, { useEffect, useState } from "react";
import styles from "./ItemsList.module.scss";
import Item from "../Item/Item.js";
import axios from "axios";
import ReactPaginate from "react-paginate";

const ItemsList = (props) => {
  const numberOfItemsOnPage = props.listType === "Top" ? 18 : 6;
  const [itemsToShow, setItemsToShow] = useState([]);
  const [news, setNews] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (props.dataNeeded === "topMovies") {
      axios.get("../database/top250Movies.json").then((response) => {
        setItemsToShow(response.data.items);
      });
    }
    if (props.dataNeeded === "topShows") {
      axios.get("../database/top250Shows.json").then((response) => {
        setItemsToShow(response.data.items);
      });
    }
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + numberOfItemsOnPage;
    setNews(itemsToShow.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(itemsToShow.length / numberOfItemsOnPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsToShow, itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * numberOfItemsOnPage) % itemsToShow.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className={styles.container}>
      <div className={styles.newsContainer}>
        {news.map((data, index) => (
          <Item key={index} type={props.listType} data={data} />
        ))}
      </div>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={styles.paginationContainer}
        activeLinkClassName={styles.pageSelected}
        pageClassName={styles.page}
        breakClassName={styles.page}
        previousClassName={styles.commandPages}
        nextClassName={styles.commandPages}
      />
    </div>
  );
};

export default ItemsList;
