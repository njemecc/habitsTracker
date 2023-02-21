import React from "react";
import styles from "./Habbits.module.css";

export const Habbit = (props) => {
  return (
    <div className={styles["habbit-container"]}>
      <p className={styles["Habbit-name"]}>{props.name}</p>
      <p>1h/3h</p>
      <div>
        <input type="text" placeholder="h" />
      </div>
    </div>
  );
};
