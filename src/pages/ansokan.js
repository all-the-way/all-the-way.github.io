import React from "react";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import Helmet from "react-helmet";
import Hero from "../components/Hero";
import Membership from "../components/Membership";
import logo from "../components/Menu/logo.svg";

const ApplicationPage = () => {
  return (
    <Layout>
      <Helmet title="All The Way: Intresseanmälan"></Helmet>

      <Hero>
        <div className="container d-flex flex-column align-items-center">
          <img
            src={logo}
            style={{ width: 150, marginBottom: 50 }}
            alt="All The Way logotype"
          ></img>
          <Membership center />
        </div>
      </Hero>
    </Layout>
  );
};

export default ApplicationPage;
