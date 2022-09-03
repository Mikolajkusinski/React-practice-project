import React from "react";

import styles from "./Header.module.css";
import image from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>TastyMeals</h1>
        <HeaderCartButton/>
      </header>
      <div className={styles["main-image"]}>
        <img src={image} alt="A food pic" />
      </div>
    </React.Fragment>
  );
}

export default Header;
