import React, { useEffect } from "react";
import { graphql } from "gatsby";
import * as styles from "./../styles/modules/index.module.scss";

import Layout from "../components/layout";
import Head from "../components/head";

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  useEffect(() => {
    if (document == undefined) return;

    const els = document.querySelectorAll("[data-animate]");

    if (!els.length) return;

    els.forEach(el => {
      const order = el.dataset.animate;

      el.style.transitionDelay = `${order * 0.2}s`;
      el.style.opacity = 1;
      el.style.transform = `none`;
    });

    const separator = document.querySelector("[data-animate-grow]");
    if (separator) {
      const width = separator.dataset.animateGrow;

      separator.style.width = width;
    }
  }, []);

  return (
    <Layout location={location} title={siteTitle}>
      <Head title="Home" />
      <section className={styles.banner}>
        <div>
          <h1 className={styles.bannerTitle} data-animate="1">
            Thinking. Results.
          </h1>
          <span
            className={styles.bannerSeparator}
            data-animate="4"
            data-animate-grow="5rem"
          ></span>
          <p data-animate="2" className={styles.bannerSubtitle}>
            Helping solve significant communication challenges
          </p>
        </div>
      </section>
      <section className={styles.homePageSection} id="about" data-animate="3">
        <div>
          <h3>About</h3>
          <p>
            We help clients in situations where how they communicate and connect
            is central to success.
          </p>
          <p>
            We value plain language, take accountability seriously and work only
            in areas where we provide sector-leading experience and expertise.
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/robert-mannion-4a55265/"
              target="_blank"
              rel="noreferrer"
            >
              Robert Mannion
            </a>
            , our founder, has a proven record in communication strategy, crisis
            management, writing, coaching, and in leading training, change and
            engagement programmes.
          </p>
          <p>
            He has advised major private and public sector clients, led
            communication and litigation strategy for two winning America’s Cup
            syndicates and has helped many corporate and other leaders
            successfully get through big communication challenges.
          </p>
          <p>
            Before getting into consultancy, Robert won national journalism
            awards. He was a publisher and editor of New Outlook magazine, a
            feature writer for the Dominion Post and a contributor to The Sydney
            Morning Herald, Agence France-Presse, Metro, Reader’s Digest, The
            New Zealand Listener and National Business Review.
          </p>
        </div>
      </section>
      <section className={styles.homePageSection} id="work">
        <div>
          <h3>Work</h3>
          <h4>Expertise</h4>
          <ul>
            <li>Communication strategy, writing and delivery</li>
            <li>Crisis management, coaching, planning and preparation</li>
            <li>Media and presentational training</li>
            <li>Stakeholder engagement and audits</li>
            <li>
              Corporate communication, litigation support, corporate documents
            </li>
            <li>Media advice, relations</li>
          </ul>
          <h4>Sectors</h4>
          <ul>
            <li>Corporate</li>
            <li>Infrastructure and services</li>
            <li>Public good, social agency</li>
            <li>Property and housing</li>
            <li>
              Working alongside iwi-owned and Māori-focussed organisations
            </li>
            <li>Health</li>
            <li>Professional services</li>
            <li>Primary and manufacturing</li>
            <li>Education and research</li>
          </ul>
        </div>
      </section>

      <section className={styles.homePageSection} id="contact">
        <div>
          <h3>Contact</h3>
          <p>
            <a href="mailto:info@robertmannion.nz">info@robertmannion.nz</a>
            <br />
            +027 615 20 06
          </p>
          <p>
            123 Fake St,
            <br />
            Britomart
            <br />
            Auckland,
            <br />
            New Zealand
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
