import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Button from "../components/common/Button";

const IndexPage = () => (
  <Layout>
    <Helmet title="All The Way: Sidan kunde inte hittas"></Helmet>
    <Menu external />
    <Hero>
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">
            Sidan kunde inte hittas
          </h1>
          <Button link="/" text="Hem" className="mt-3 d-inline-block"></Button>
        </div>
      </div>
    </Hero>
  </Layout>
);

export default IndexPage;
