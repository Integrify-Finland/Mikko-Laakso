const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return graphql(`
		{
			allContentfulElectionTheme {
				edges {
					node {
						id
						url
					}
				}
			}
		}
	`).then(result => {
		result.data.allContentfulElectionTheme.edges.forEach(({ node }) => {
			createPage({
				path: `teemat/${node.url
					.toLowerCase()
					.replace(/[']/gi, '')
					.replace(/ /gi, '-')
					.replace(/[,]/gi, '')
					.replace(/[ä]/gi, 'a')
					.replace(/[ö]/gi, 'o')}`,
				component: path.resolve(`./src/templates/electionThemePost/index.tsx`),
				context: {
					slug: node.id,
				},
			})
		})
	})
}
