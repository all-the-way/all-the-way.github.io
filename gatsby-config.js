const config = require("./config");

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleTagManager: {
          trackingId: "GTM-MLC3G5D",
          cookieName: "acceptCookie",
          dataLayerName: "dataLayer",
        },
        facebookPixel: {
          pixelId: "871538353609114",
          cookieName: "acceptCookie",
        },
        environments: ["production"],
      },
    },
    "gatsby-plugin-sass",
  ],
};
