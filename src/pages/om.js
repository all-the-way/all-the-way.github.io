import React from "react";
import Helmet from "react-helmet";
import About from "../components/AboutPage/About";
import History from "../components/AboutPage/History";
import ImageDivider from "../components/ImageDivider";
import Layout from "../components/Layout";
import Menu from "../components/Menu";

const OmPage = () => {
  return (
    <Layout>
      <Helmet title="All The Way Gym: Vår historia">
        <meta name="description" content="" />
      </Helmet>
      <Menu external />
      <History></History>
      <ImageDivider></ImageDivider>
      <About></About>
    </Layout>
  );
};

export default OmPage;
