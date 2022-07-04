import React, { useEffect } from "react";
import { graphql } from "gatsby";
import * as styles from "./../styles/modules/index.module.scss";

import Layout from "../components/layout";
import Head from "../components/head";
import PageNav from "../components/page-nav";
import { StaticImage } from "gatsby-plugin-image";

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
        {/* <div className={styles.bannerImage}>
          <StaticImage src="../images/bg-2.jpg" />
        </div> */}
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
      <PageNav />
      <section className={styles.homePageSection} id="about" data-animate="3">
        <div>
          <div className={styles.stickyContainer}>
            <h3>About</h3>
          </div>
          <p>
            This consultancy was founded to help clients in situations where how
            they communicate and connect is central to success.
            <br />
            <br />
            <StaticImage
              src="../images/robert-mannion.jpg"
              alt="Profile photo of Robert Mannion"
              className={styles.homePageImage}
            />
            Founder{" "}
            <a
              href="https://www.linkedin.com/in/robert-mannion-4a55265/"
              target="_blank"
              rel="noreferrer"
            >
              Robert Mannion
            </a>{" "}
            has a proven record in communication strategy, crisis management,
            writing, coaching, and in leading training, change and engagement
            programmes.
            <br />
            <br />
            He has advised some of New Zealand's largest private and public
            sector organisations, led significant communication and litigation
            strategies and has helped many corporate and other leaders
            successfully get through big communication challenges.
            <br />
            <br />
            Before getting into consultancy, Robert won national journalism
            awards. He was a magazine publisher and editor and journalist or
            contributor to the Dominion Post, The Sydney Morning Herald, Agence
            France-Presse, Metro, Reader’s Digest, The New Zealand Listener and
            National Business Review.
          </p>
        </div>
      </section>
      <section className={styles.homePageSection} id="work">
        <div>
          <div className={styles.stickyContainer}>
            <h3>Work</h3>
          </div>
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
            <li>Cyber incident response and planning</li>
            <li>Narrative development/facilitation</li>
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
          <div className={styles.stickyContainer}>
            <h3>Contact</h3>
          </div>
          <p>
            <a href="mailto:robert@mannionconsulting.nz">
              robert@mannionconsulting.nz
            </a>
            <br />
            +027 2310 301
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
