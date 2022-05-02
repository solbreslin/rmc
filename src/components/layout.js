import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import "./../styles/global.scss";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="site-wrapper" data-is-root-path={isRootPath}>
      <Header title={title} root={isRootPath} />
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
