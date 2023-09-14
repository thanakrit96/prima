require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Prima lounge`,
    description: ``,
    author: ``,
    languages: {
      langs: ['th'],
      defaultLangKey: 'th',
    },
    siteUrl: 'https://www.primalounge.com'
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `2817e373ce0bec0b3d7382191c4176`,
        preview: false,
        disableLiveReload: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `Kanit`,
    //     ],
    //     display: 'swap'
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-env-variables`,
      options: {
        envFolderPath: `src/env/`
      }
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: `en`,
        langKeyDefault: `en`,
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Prima lounge`,
        short_name: `Prima lounge`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/icon_logo.png`,
        include_favicon: false,
      },
    },
  ],
}
