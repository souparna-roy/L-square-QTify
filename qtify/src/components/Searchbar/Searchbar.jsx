import React from "react";
import styles from "./Searchbar.module.css";

export default function Searchbar() {
  return (
    <div>
      <input
        name="search"
        className={styles.search}
        placeholder="Search an album of your choice"
      />
    </div>
  );
}
