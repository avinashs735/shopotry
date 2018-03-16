module.exports = {
    plugins: [
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `data`,
              path: `${__dirname}/data/`,
            },
          },
 

          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `post`,
              path: `${__dirname}/content/post/`,
            },},
            {
              resolve:`gatsby-source-filesystem`,
              options: {
                name:`team`,
                path:`${__dirname}/content/team`,
              },
            },
            {
              resolve:`gatsby-source-filesystem`,
              options: {
                name:`team`,
                path:`${__dirname}/static/redcarpetcom`,
              },
            },
          
          `gatsby-transformer-yaml`,
          `gatsby-transformer-json`,
          `gatsby-transformer-remark`,
          `gatsby-plugin-react-helmet`,
         `gatsby-plugin-catch-links`,
          `gatsby-plugin-react-next`,
    
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,

     {
       resolve: `gatsby-transformer-remark`,
       options: {
         plugins: [
           {
             resolve: `gatsby-remark-images`,
             options: {
               maxWidth: 500,
               linkImagesToOriginal: false,
             },
           },
           {
             resolve: `gatsby-remark-responsive-iframe`,
             options: {
               wrapperStyle: `margin-bottom: 1.0725rem`,
             },
           },
           'gatsby-remark-copy-linked-files',
           'gatsby-remark-smartypants',
         ],
       },
     },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`
      
      ]
        };