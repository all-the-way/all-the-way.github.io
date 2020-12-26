import React from "react";

import Scroll from "../components/Scroll";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import Header from "../components/Header";
import Contact from "../components/Contact";
import About from "../components/About";
import Offering from "../components/Offering";

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead" id="start">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">
            2021 öppnar vi på Berga, Helsingborg
          </h1>
          <Scroll type="id" element="intresseanmalan">
            <a href="#intresseanmalan" className="btn btn-primary">
              Anmäl intresse
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <About></About>
    <Offering></Offering>
    <section className="quote-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p>En start med små steg är början på en större förändring</p>
          </div>
        </div>
      </div>
    </section>
    <Contact />
    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
