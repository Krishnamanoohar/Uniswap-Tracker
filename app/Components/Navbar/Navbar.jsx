import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <main className={styles.nav}>
      <div className={styles.title}>
        <img src="logo.png" alt="" className={styles.logo} />
      </div>
    </main>
  );
};

export default Navbar;
