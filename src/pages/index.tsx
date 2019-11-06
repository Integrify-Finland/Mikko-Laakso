import React from 'react'
// import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import SocialMedia from '../components/SocialMedia/index'
import Section from '../components/Section'
import Header from '../components/Header'

const IndexPage: React.FC = () => {
	return (
		<Layout>
			<SEO title="Etusivu" />
			<Header
				isAbout={false}
				Subtext={
					'Kansanedustaja, yhteiskuntatieteiden maisteri ja intohimoinen perhokalastaja.'
				}
			/>
			<div className="index-page-wrapper">
				<Section>
					<SocialMedia />
				</Section>
			</div>
		</Layout>
	)
}

export default IndexPage

// export const query = graphql`
// 	query {
// 		contentfulBlog: allContentfulBlogPost(
// 			sort: {fields: [createdAt], order: DESC}
// 		) {
// 			edges {
// 				node {
// 					title
// 					tags
// 					entryDescription {
// 						entryDescription
// 					}
// 					# body {
// 					# 	childMarkdownRemark {
// 					# 		html
// 					# 	}
// 					# }
// 					categories
// 					id
// 					slug
// 					date
// 					entryImage {
// 						fluid {
// 							base64
// 							aspectRatio
// 							src
// 							srcSet
// 							srcWebp
// 							srcSetWebp
// 							sizes
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// `
