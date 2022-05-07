import React, { useEffect } from "react";
import * as styles from "./../styles/modules/nav.module.scss";

const Nav = ({ active, root }) => {
  useEffect(() => {
    const url = window.location.href.split("/");
    const target = url[url.length - 1].toLowerCase();
    const element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const scrollTo = (e, elementId) => {
    e.preventDefault();

    const el = document.getElementById(elementId);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <nav
      className={`${styles.nav} ${active ? styles.active : ""} ${
        root ? styles.index : ""
      }`}
      aria-labelledby="menu-label"
    >
      <ul id="menu" className={active ? "is-open" : ""}>
        <li>
          <a
            href="about"
            onClick={e => {
              scrollTo(e, "about");
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="work"
            onClick={e => {
              scrollTo(e, "work");
            }}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="contact"
            onClick={e => {
              scrollTo(e, "contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
