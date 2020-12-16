import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import "../../assets/sass/main.scss";

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
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: "description",
                content: "Ditt premiumgym på Berga, Helsingborg.",
              },
              {
                name: "keywords",
                content:
                  "gym, gym helsingborg, gym berga, Personlig träning, Personlig tränare, Personlig Tränare Helsingborg, friskvård",
              },
            ]}
          >
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

          <div className={"page-top"}>{children}</div>
        </>
      )}
    />
  );
};
export default Layout;
