import { Link } from "gatsby";
import * as React from "react";
import * as styles from "./../styles/modules/nav.module.scss";

const Nav = ({ active, root }) => {
  return (
    <nav
      className={`${styles.nav} ${active ? styles.active : ""} ${
        root ? styles.index : ""
      }`}
      aria-labelledby="menu-label"
    >
      <ul id="menu" className={active ? "is-open" : ""}>
        <li>
          <Link
            partiallyActive={true}
            activeClassName={styles.current}
            to="/work"
          >
            <span>Work</span>
          </Link>
        </li>
        <li>
          <Link
            partiallyActive={true}
            activeClassName={styles.current}
            to="/work"
          >
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link
            partiallyActive={true}
            activeClassName={styles.current}
            to="/work"
          >
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
