import { Link } from "gatsby";
import * as React from "react";
import * as styles from "./../styles/modules/brand.module.scss";

const Brand = ({ title }) => {
  return (
    <h1 className={styles.brand}>
      <Link to={"/"}>{title}</Link>
    </h1>
  );
};

export default Brand;
