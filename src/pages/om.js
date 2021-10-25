import React from "react";
import Helmet from "react-helmet";
import About from "../components/pages/About/About";
import History from "../components/pages/About/History";
import ImageDivider from "../components/common/ImageDivider";
import Layout from "../components/Layout";
import Menu from "../components/common/Menu";
import Header from "../components/pages/About/Header/index";
import SocialLinks from "../components/common/SocialLinks";
import Footer from "../components/common/Footer";

const OmPage = () => {
  return (
    <Layout>
      <Helmet title="All The Way Gym: Vår historia">
        <meta name="description" content="" />
      </Helmet>
      <Menu external />
      <Header></Header>
      <History></History>
      {/* <ImageDivider></ImageDivider>
      <About></About> */}
      <SocialLinks />
      <Footer />
    </Layout>
  );
};

export default OmPage;
