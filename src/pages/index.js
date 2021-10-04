import React, { useRef } from "react";
import Layout from "../components/Layout";
import Footer from "../components/common/Footer";
import SocialLinks from "../components/common/SocialLinks";
import About from "../components/pages/Start/About";
import Offering from "../components/pages/Start/Offering";
import Menu from "../components/common/Menu";
import Hero from "../components/pages/Start/Hero";
import Membership from "../components/pages/Start/Membership";
import Testimonials from "../components/pages/Start/Testimonials";
import Start from "../components/pages/Start/Start";
import Map from "../components/pages/Start/Map";
import UniqueSellingPoints from "../components/pages/Start/UniqueSellingPoints";
import Contact from "../components/pages/Start/Contact";

const IndexPage = () => {
  const membershipRef = useRef(null);

  const handleMembershipClick = () => {
    membershipRef.current.scrollIntoView();
  };

  return (
    <Layout>
      <Menu />
      <Hero>
        <Start />
      </Hero>
      <UniqueSellingPoints />
      <About onClickMembership={handleMembershipClick}></About>
      <Map />
      <Offering onClickMembership={handleMembershipClick}></Offering>
      <Membership membershipRef={membershipRef} center />
      <Testimonials />
      <Contact />
      <SocialLinks />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
