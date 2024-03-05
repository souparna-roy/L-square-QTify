import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
    </nav>
  );
}
