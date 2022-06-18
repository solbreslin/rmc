import { Link } from "gatsby";
import * as React from "react";
import * as styles from "./../styles/modules/brand.module.scss";

import Logo from "./../images/logo/logo-light.svg";

const Brand = ({ title }) => {
  return (
    <h1 className={styles.brand}>
      <Link to={"/"}>
        <span className="sr-only">{title}</span>
        <Logo />
      </Link>
    </h1>
  );
};

export default Brand;
