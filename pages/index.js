import React from "react";
import AboutMe from "../sections/AboutMe/AboutMe";
import Header from "../sections/Header/Header";
import PortfolioHiglights from "../sections/PortfolioHighlights/PortfolioHiglights";
import Technologies from "../sections/Technologies/Technologies";
import Education from "../sections/Education/Education";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        {/* <meta httpEquiv="X-UA-Compatible" content="IE=edge" /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta
          name="description"
          content="I am Jibran Advani and I am a full stack developer looking to work as a freelancer to build different web projects."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, NextJS, NodeJS, ExpressJS"
        />
        <meta name="author" content="Jibran Advani" />
        <meta property="og:title" content="Jibran Advani | Resume" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.jibranadvani.com/profileImage.jpg" />
        <meta
          property="og:description"
          content="I am Jibran Advani and I am a full stack developer looking to work as a freelancer to build different web projects."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jibran Advani | Resume" />
        <meta
          name="twitter:description"
          content="I am Jibran Advani and I am a full stack developer looking to work as a freelancer to build different web projects."
        />
        <meta name="twitter:site" content="@advani_jibran" />
        <meta
          name="twitter:image"
          content="http://www.jibranadvani.com/profileImage.jpg"
        />
        <meta name="twitter:creator" content="@advani_jibran" />
        <link rel="icon" type="image/png" href="/favicon.png"></link>
        <title>Jibran Advani | Resume</title>
      </Head>
      <Header />
      <main>
        <Technologies />
        <AboutMe />
        <PortfolioHiglights />
        {/* <Education /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
