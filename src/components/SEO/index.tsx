import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const thumbnail = require('../../assets/images/thumbnail.jpg')
interface Props {
	description?: string
	lang?: string
	meta?: []
	title?: string
}
const SEO: React.FC<Props> = ({ description, lang, meta, title }) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`,
	)

	const metaDescription = description || site.siteMetadata.description
	const URL = 'https://janneheikkinen.fi'

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `title`,
					content: site.siteMetadata.title,
				},
				{
					property: `og:title`,
					content: site.siteMetadata.title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					name: 'og:image',
					property: 'og:image',
					content: `${URL}${thumbnail}`,
				},
				{
					property: 'og:image:width',
					content: '1200',
				},
				{
					property: 'og:image:height',
					content: '630',
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary_large_image`,
				},
				{
					name: `twitter:image:src`,
					content: `${URL}${thumbnail}`,
				},
				{
					name: `twitter:title`,
					content: site.siteMetadata.title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta || [])}
		/>
	)
}

export default SEO
