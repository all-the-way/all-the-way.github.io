import React from "react";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import Membership from "../components/pages/Start/Membership";
import logo from "../components/common/Menu/logo.svg";
import video from "../components/pages/Start/Hero/hero.mp4";
import heroImage from "../components/pages/Start/Hero/hero.jpg";

const ApplicationPage = () => {
  return (
    <Layout>
      <Helmet title="All The Way Gym: Intresseanmälan"></Helmet>
      <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
        <div style={{ width: "100vw", height: "100vh" }}>
          <video
            playsInline
            autoPlay
            muted
            loop
            poster={heroImage}
            style={{ objectFit: "cover", width: "100vw", height: "100vh" }}
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div style={{ zIndex: 2, position: "absolute", top: 0, width: "100%" }}>
          <div className="container d-flex flex-column align-items-center mt-5">
            <img
              src={logo}
              style={{ width: 150, marginBottom: 50 }}
              alt="All The Way logotype"
            ></img>

            <Membership center />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ApplicationPage;
