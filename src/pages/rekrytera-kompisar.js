import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Home from "../components/pages/Home";
import Recommendations from "../components/pages/Recommendations";

const RecruitmentPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Rekommendera oss" />
      <Recommendations></Recommendations>
    </Layout>
  );
};

export default RecruitmentPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
