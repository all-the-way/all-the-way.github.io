import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { Link } from "gatsby";

const IndexPage = () => (
  <Layout>
    <Helmet title="All The Way: Sidan kunde inte hittas"></Helmet>
    <Header logoOnly />
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">
            Sidan kunde inte hittas
          </h1>

          <Link to="/" className="btn btn-primary">
            Hem
          </Link>
        </div>
      </div>
    </header>
  </Layout>
);

export default IndexPage;
