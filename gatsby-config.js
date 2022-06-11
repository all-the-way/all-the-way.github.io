module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL || `https://cms.allthewaygym.se/graphql`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    "gatsby-plugin-remove-serviceworker",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleTagManager: {
          trackingId: "GTM-MLC3G5D",
          cookieName: "acceptCookie",
          dataLayerName: "dataLayer",
        },
        facebookPixel: {
          pixelId: "2947608032185571",
          cookieName: "acceptCookie",
        },
        environments: ["production"],
      },
    },
  ],
};
