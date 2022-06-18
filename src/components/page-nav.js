import * as React from "react";
import * as styles from "./../styles/modules/page-nav.module.scss";

const PageNav = () => {
  const scrollTo = (e, elementId) => {
    e.preventDefault();

    if (elementId) {
      const el = document.getElementById(elementId);
      if (!el) return;

      el.scrollIntoView({ behavior: "smooth", block: "start", top: 10 });
    }
  };
  return (
    <nav className={styles.pageNav}>
      <ul>
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

export default PageNav;
