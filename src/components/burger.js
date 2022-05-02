import React from "react";
import * as styles from "./../styles/modules/burger.module.scss";

const Burger = ({ active, updateParent }) => {
  const onToggle = () => {
    updateParent();
  };

  return (
    <button
      onClick={onToggle}
      className={`${styles.button} ${active && styles.open}`}
      aria-labelledby="menu-label"
      aria-expanded={active}
    >
      <span id="menu-label" className="sr-only">
        {active ? "Close menu" : "Open menu"}
      </span>
    </button>
  );
};

export default Burger;
