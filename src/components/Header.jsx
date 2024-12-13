import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>contact App</h1>
      <p>
        <a href="http://google.com">Google</a> | React.js Full Course
      </p>
    </div>
  );
}

export default Header;
