import React from "react";
import Helmet from "react-helmet";
import { CookiesProvider } from "react-cookie";
import { StaticQuery, graphql } from "gatsby";
import CookieBanner from "../CookieBanner";

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Helmet title="All The Way - Gym i Malmö">
            <meta
              name="description"
              content="Bli medlem hos All The Way Malmö. Tillsammans gör vi en personlig hälsoplan så att du når dina mål! Du hittar oss i Malmö."
            />
            <meta
              name="keywords"
              content="gym Malmö, Personlig träning, Personlig tränare, Personlig Tränare Malmö, friskvård"
            />
            <html lang="sv" />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
              rel="mask-icon"
              href="/safari-pinned-tab.svg"
              color="#1f5d81"
            />
            <meta name="msapplication-TileColor" content="#1f5d81" />
            <meta name="theme-color" content="#1f5d81" />
          </Helmet>
          <CookiesProvider>
            <div className={"page-top"}>{children}</div>
            <CookieBanner></CookieBanner>
          </CookiesProvider>
        </>
      )}
    />
  );
};
export default Layout;
