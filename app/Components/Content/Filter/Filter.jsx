import React from "react";
import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <main>
      <div className={styles.filter}>
        <div>
          <label htmlFor="chain">Chain : </label>
          <select name="chain" id="">
            <option value="wax">Wax</option>
            <option value="ethereum">Ethereum</option>
            <option value="solana">Solana</option>
          </select>
        </div>
        <form action="" method="get">
          <label htmlFor="text">Contract : </label>
          <input type="text" placeholder="Search by Address" />
        </form>
      </div>
    </main>
  );
};

export default Filter;
