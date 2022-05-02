import * as React from "react";
import { graphql } from "gatsby";
import * as styles from "./../styles/modules/index.module.scss";

import Layout from "../components/layout";
import Head from "../components/head";

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Head title="Home" />
      <section className={styles.banner}>
        <h1 className={styles.bannerTitle}>Thinking. Results.</h1>
        <span className={styles.bannerSeparator}></span>
        <p className={styles.bannerSubtitle}>
          Helping solve significant communication challenges.
        </p>
      </section>
      <section>
        <div>
          <h3>Focus</h3>
          <p>
            This consultancy focuses on what we do best and where we know we can
            give our clients the most value. We bring extensive leadership
            experience with leading communication agencies and measure our
            success by the results we help our clients achieve.
          </p>
          <a href="https://www.linkedin.com/in/robert-mannion-4a55265/">
            Profile on LinkedIn
          </a>
        </div>
        <div>
          <h3>Expertise</h3>
          <p>
            We have a strong record helping a wide range of clients succeed with
            often challenging assignments.
          </p>

          <p>
            We draw on the input of highly-experienced communication
            professionals in putting together the right team for each client or
            client need.
          </p>
          <h4>Areas of expertise</h4>
          <ul>
            <li>Crisis management, planning, preparation</li>
            <li>Stakeholder engagement</li>
            <li>Reputation management</li>
            <li>
              Communication strategy, including change, health, litigation and
              political communication
            </li>
            <li>Corporate communication, documents and materials</li>
            <li>Media relations</li>
          </ul>
          <h4>Training and capability building</h4>
          <ul>
            <li>
              Facilitation of workshops in strategy, change, brand narrative
            </li>
            <li>Media training</li>
            <li>Presentation training, managing high-conflict environments</li>
            <li>Business writing, board report writing</li>
          </ul>
        </div>
        <div>
          <h3>Sectors</h3>
          <ul>
            <li>
              Private sector, property, energy, finance, insurance, primary
              industry
            </li>
            <li>Public sector, education, health, housing</li>
            <li>Public good, heritage, recreation, social agency</li>
            <li>Infrastructure, regional and private and public sector</li>
            <li>America’s Cup (strategic counsel to two winning teams)</li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <p>+027 615 20 06</p>
          <p>info@robertmannion.nz</p>
          <p>
            123 Fake St,
            <br />
            Britomart
            <br />
            Auckland
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
