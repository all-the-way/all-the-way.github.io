import React from "react";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import Helmet from "react-helmet";

const ApplicationPage = () => {
  return (
    <Layout>
      <Helmet title="All The Way: Intresseanmälan"></Helmet>
      <div className="application">
        <Contact fullHeight="true"></Contact>
      </div>
    </Layout>
  );
};

export default ApplicationPage;
