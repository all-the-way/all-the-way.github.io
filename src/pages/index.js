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
import Testimonials from "../components/Testimonials";
import Start from "../components/Start";
import UniqueSellingPoints from "../components/UniqueSellingPoints";

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
      <Membership membershipRef={membershipRef} center />
      <About onClickMembership={handleMembershipClick}></About>
      <Offering onClickMembership={handleMembershipClick}></Offering>
      <Testimonials />
      {/* <References></References> */}
      <SocialLinks />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
