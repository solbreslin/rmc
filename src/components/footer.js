import * as React from "react";
import * as styles from "./../styles/modules/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()}, Robert Mannion Consulting</p>
    </footer>
  );
};

export default Footer;
