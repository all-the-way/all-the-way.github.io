import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { CookiesProvider } from "react-cookie";
import Menu from "./Layout/Menu";
import Footer from "./Layout/Footer";
import CookieBanner from "./Layout/CookieBanner";

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `);

  return (
    <div data-is-root-path={isHomePage}>
      <CookiesProvider>
        <Menu></Menu>
        <main style={{ paddingTop: 100 }}>{children}</main>
        <Footer></Footer>
        <CookieBanner></CookieBanner>
      </CookiesProvider>
    </div>
  );
};

export default Layout;
