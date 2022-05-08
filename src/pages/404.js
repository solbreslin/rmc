import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Head title="404: Not Found" />
      <h1>404: Not Found</h1>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
