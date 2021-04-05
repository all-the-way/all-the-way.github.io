import React, { useRef } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import Contact from "../components/Contact";
import About from "../components/About";
import Offering from "../components/Offering";
import References from "../components/References";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import Button from "../components/common/Button";

const IndexPage = () => {
  const applicationRef = useRef(null);

  const handleClick = () => {
    applicationRef.current.scrollIntoView();
    if (typeof window !== "undefined") {
      if (window.fbq != null) {
        window.fbq("track", "Lead");
      }
    }
  };
  return (
    <Layout>
      <Menu />
      <Hero>
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">
              2021 öppnar vi på Berga, Helsingborg
            </h1>
            <Button onClick={handleClick} text="Anmäl intresse"></Button>
          </div>
        </div>
      </Hero>

      <About></About>
      <Offering></Offering>
      <References></References>
      <Contact applicationRef={applicationRef} />
      <SocialLinks />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
