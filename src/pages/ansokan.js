import React from "react";
import Layout from "../components/Layout";
import Contact from "../components/Contact";

const ApplicationPage = () => {
  return (
    <Layout>
      <div className="application">
        <Contact fullHeight="true"></Contact>
      </div>
    </Layout>
  );
};

export default ApplicationPage;
