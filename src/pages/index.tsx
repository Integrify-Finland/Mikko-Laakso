import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import SocialMedia from '../components/SocialMedia/index'
import Section from '../components/Section'
import Header from '../components/Header'
import ElectionCard from '../components/ElectionCard'

import './indexPageStyle.scss'
interface Node {
	node: {
		id: string
		title: string
		shortenContent: string
		fullContent: {
			fullContent: string
		}
		emphasisStatement: string
		pictureForArticle: {
			fluid: {
				base64: string
				aspectRatio: number
				src: string
				srcSet: string
				srcWebp: string
				srcSetWebp: string
				sizes: string
			}
		}
	}
}
interface Data {
	data: {
		allContentfulElectionTheme: {
			edges: Node[]
		}
	}
}
const IndexPage: React.FC<Data> = ({ data }) => {
	return (
		<Layout>
			<SEO title="Etusivu" />
			<Header
				isAbout={false}
				Headline="Tulosvastuu takaisin politiikkaan!"
				Subtext="Poliitikkojen ja virkamiesten tulee kantaa vastuu tuloksistaan. On aika palauttaa tulosvastuu politiikkaan."
			/>

			<div className="index-page-wrapper">
				<Section>
					<h1 className="index-page-wrapper__title">VAALITEEMAT</h1>
				</Section>
				<Section>
					{data.allContentfulElectionTheme.edges
						.slice(0, 3)
						.map(({ node }: Node) => {
							return (
								<ElectionCard
									backGroundImage={node.pictureForArticle.fluid}
									title={node.title}
									emphasisStatement={node.emphasisStatement}
									description={node.shortenContent}
									date={'5th Nov 2019'}
									author={'Mikko Laakso'}
									url={'/'}
									key={node.id}
								/>
							)
						})}
				</Section>
				<Section>
					<h1 className="index-page-wrapper__title">MEDIALLE</h1>
					<SocialMedia />
				</Section>
			</div>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query MyQuery {
		allContentfulElectionTheme(filter: {}) {
			edges {
				node {
					id
					title
					shortenContent
					fullContent {
						fullContent
					}
					emphasisStatement
					pictureForArticle {
						fluid {
							base64
							aspectRatio
							src
							srcSet
							srcWebp
							srcSetWebp
							sizes
						}
					}
				}
			}
		}
	}
`
