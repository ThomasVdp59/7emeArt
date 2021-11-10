import React, { useEffect, useState } from "react";
import styles from "./NewsList.module.scss";
import NewsItem from "./NewsItem/NewsItem.js";
import ReactPaginate from "react-paginate";

const NewsList = (props) => {
  const itemsToShow = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3,
    4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
  ];
  const numberOfItemsOnPage = 6;
  const [news, setNews] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + numberOfItemsOnPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setNews(itemsToShow.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(itemsToShow.length / numberOfItemsOnPage));
  }, [itemOffset]);

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
        {news.map((section, index) => (
          <NewsItem id={index} />
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

export default NewsList;
