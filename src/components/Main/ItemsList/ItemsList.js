import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ItemsList.module.scss";
import Item from "../Item/Item.js";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Loading from "../../Loading/Loading.js";

const ItemsList = ({ listType, dataNeeded }) => {
  const numberOfItemsOnPage = listType === "Top" ? 18 : 6;
  const [isLoading, setLoading] = useState(true);
  const [itemsToShow, setItemsToShow] = useState([]);
  const [news, setNews] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (dataNeeded === "topMovies") {
      axios
        .get("https://imdb-api.com/en/API/Top250Movies/k_811xf9fl")
        .then((response) => {
          setItemsToShow(response.data.items);
          setLoading(false);
        });
    }
    if (dataNeeded === "topShows") {
      axios
        .get("https://imdb-api.com/en/API/Top250TVs/k_811xf9fl")
        .then((response) => {
          setItemsToShow(response.data.items);
          setLoading(false);
        });
    }
    if (dataNeeded === "NewsAll") {
      /* axios
        .get(
          "http://api.mediastack.com/v1/news?access_key=00ad828caa430c802b80e14db8426217&languages=fr&keywords=series marvel netflix cinema movies"
        )
        .then((response) => {
          setItemsToShow(response.data.data);
          setLoading(false);
        }); */
    }
    if (dataNeeded === "NewsMovies") {
      /* axios
        .get(
          "http://api.mediastack.com/v1/news?access_key=00ad828caa430c802b80e14db8426217&languages=fr&keywords=marvel cinema movies"
        )
        .then((response) => {
          setItemsToShow(response.data.data);
          setLoading(false);
        }); */
    }
    if (dataNeeded === "NewsShows") {
      /* axios
        .get(
          "http://api.mediastack.com/v1/news?access_key=00ad828caa430c802b80e14db8426217&languages=fr&keywords=series marvel netflix"
        )
        .then((response) => {
          setItemsToShow(response.data.data);
          setLoading(false);
        }); */
    }
    return () => {};
  }, [dataNeeded]);

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
    <React.Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <div className={styles.newsContainer}>
            {news?.map((data, index) => (
              <Item key={index} type={listType} data={data} />
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
      )}
    </React.Fragment>
  );
};
ItemsList.propTypes = {
  listType: PropTypes.string.isRequired,
  dataNeeded: PropTypes.string
};
export default ItemsList;
