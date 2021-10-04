import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Hero from "../components/pages/Start/Hero";
import Menu from "../components/common/Menu";
import Button from "../components/common/Button";

const IndexPage = () => (
  <Layout>
    <Helmet title="All The Way Gym: Sidan kunde inte hittas"></Helmet>
    <Menu external />
    <Hero>
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase text-white">
            Sidan kunde inte hittas
          </h1>
          <Button link="/" text="Hem" className="mt-3 d-inline-block"></Button>
        </div>
      </div>
    </Hero>
  </Layout>
);

export default IndexPage;
