import React, { useDebugValue } from "react";
import styles from "./Habbits.module.css";

//redux
import { useSelector, useDispatch, useDispatch } from "react-redux";

//componenets
import { Habbit } from "./Habbit";

const Habbits = () => {
  const useDispatch = useDispatch();
  const habbits = useSelector((state) => state.habbits);

  return (
    <div className={styles["habbits-container"]}>
      <nav>
        <input type="search" /> <input type="date" />{" "}
        <button type="button">New Habbit</button>
      </nav>
    </div>
  );
};

export default Habbits;
