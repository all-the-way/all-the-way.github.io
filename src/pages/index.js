import React, { useRef } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import About from "../components/StartPage/About";
import Offering from "../components/StartPage/Offering";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import Membership from "../components/StartPage/Membership";
import Testimonials from "../components/Testimonials";
import Start from "../components/StartPage/Start";
import Map from "../components/StartPage/Map";
import UniqueSellingPoints from "../components/UniqueSellingPoints";
import Contact from "../components/StartPage/Contact";

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
