import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Menu from "../components/common/Menu";
import Header from "../components/pages/About/Header/index";
import SocialLinks from "../components/common/SocialLinks";
import Footer from "../components/common/Footer";
import Recruitment from "../components/pages/Recruitment";

const RecruitmentPage = () => {
  return (
    <Layout>
      <Helmet title="All The Way Gym: Rekommendera oss">
        <meta name="description" content="" />
      </Helmet>
      <Menu external />
      <Recruitment />
      <SocialLinks />
      <Footer />
    </Layout>
  );
};

export default RecruitmentPage;
