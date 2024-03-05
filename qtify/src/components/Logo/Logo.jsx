import React from "react";
import LogoImage from "../../assets/logo.png";
import styles from "../Navbar/Navbar.module.css";

export default function Logo() {
  return (
    <img src={LogoImage} alt="QTify Logo" width={67} className={styles.logo} />
  );
}
