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
            {/* <!-- Facebook Pixel Code --> */}
            <script>
              {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '871538353609114');
fbq('track', 'PageView');`}
            </script>
            <noscript>
              {`<img
                height="1"
                width="1"
                style="display:none"
                src="https://www.facebook.com/tr?id=871538353609114&ev=PageView&noscript=1"
              />`}
            </noscript>
            {/* <!-- End Facebook Pixel Code --> */}
          </Helmet>

          <div className={"page-top"}>{children}</div>
        </>
      )}
    />
  );
};
export default Layout;
