import React, { useRef } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import About from "../components/About";
import Offering from "../components/Offering";
import References from "../components/References";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import Membership from "../components/Membership";

const IndexPage = () => {
  const membershipRef = useRef(null);

  const handleMembershipClick = () => {
    console.log("click");
    membershipRef.current.scrollIntoView();
  };
  return (
    <Layout>
      <Menu />
      <Hero>
        <Membership membershipRef={membershipRef} />
      </Hero>

      <About onClickMembership={handleMembershipClick}></About>
      <Offering onClickMembership={handleMembershipClick}></Offering>
      <References></References>
      <SocialLinks />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
