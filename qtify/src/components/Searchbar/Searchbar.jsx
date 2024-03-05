import React from "react";
import styles from "./Searchbar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

export default function Searchbar() {
  return (
    <div className={styles.container}>
      <input
        name="search"
        className={styles.search}
        placeholder="Search an album of your choice"
      />
      <button className={styles.searchButton}>
        <SearchIcon />
      </button>
    </div>
  );
}
