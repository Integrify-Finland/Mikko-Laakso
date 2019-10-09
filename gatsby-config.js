require('dotenv').config()
module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-typescript`,
		{
			resolve: 'gatsby-plugin-tslint',
			options: {
				test: /\.ts$|\.tsx$/,
				exclude: /(node_modules|cache|public)/,
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				data:
					'@import "_variables.scss";@import "_mixins.scss";@import "_layout.scss";',
				includePaths: ['src/assets/styles'],
			},
		},
		{
			resolve: `gatsby-source-youtube-v2`,
			options: {
				channelId: process.env.YOUTUBE_CHANNEL_ID,
				apiKey: process.env.YOUTUBE_API_KEY,
				maxVideos: 50, // Defaults to 50
			},
		},
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
