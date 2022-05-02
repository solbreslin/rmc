import React, { useState, useEffect } from "react";
import Brand from "./brand";
import Nav from "./nav";
import * as styles from "./../styles/modules/header.module.scss";
import Burger from "./burger";

const Header = ({ title, root }) => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add("o-hidden");
    } else {
      document.body.classList.remove("o-hidden");
    }
  }, [navOpen]);

  const updateParent = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className={`${styles.header} ${root && styles.invert}`}>
      <Brand title={title} />
      <Burger root={root} updateParent={updateParent} active={navOpen} />
      <Nav active={navOpen} root={root} />
    </header>
  );
};

export default Header;
