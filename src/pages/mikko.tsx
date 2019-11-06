import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Resume from '../components/Resume'
import AboutTextBlock from '../components/About-text-block'
import Section from '../components/Section'

import Header from '../components/Header'
interface Node {
	node: {
		title: string
		dateForOrder: string
		image: {
			file: {
				url: string
			}
		}
		description: {
			description: string
		}
	}
}
interface Data {
	data: {
		resume: {
			opinnot: string[]
			varusmiespalvelus: string[]
			tyoelamassa: string[]
			luottamustoimet: string[]
		}
		DetailsAboutMe: {
			edges: Node[]
		}
		aboutMe: {
			kotipaikka: string
			syntynyt: string
			perhe: string
			sotilasarvo: string
			ammatti: string
			harrastukset: string
			koulutus: string[]
			luottamustehtava: string
		}
	}
}
const Janne: React.FC<Data> = ({ data }) => {
	const { resume, DetailsAboutMe, aboutMe } = data
	const revertedDetails = DetailsAboutMe.edges.reverse()
	return (
		<Layout>
			<SEO title="Mikko" />
			<Header
				isAbout={true}
				kotipaikka={aboutMe.kotipaikka}
				syntynyt={aboutMe.syntynyt}
				ammatti={aboutMe.ammatti}
				harrastukset={aboutMe.harrastukset}
				koulutus={aboutMe.koulutus}
			/>
			<Section>
				{revertedDetails.map(({ node }: Node, i: number) => {
					return i % 2 !== 0 ? (
						<AboutTextBlock
							title={node.title}
							isLeft={false}
							text={node.description.description}
							icon={`https:${node.image.file.url}`}
						/>
					) : (
						<AboutTextBlock
							title={node.title}
							text={node.description.description}
							isLeft
							icon={`https:${node.image.file.url}`}
						/>
					)
				})}
			</Section>

			<Resume
				opinnot={resume.opinnot}
				tyo={resume.tyoelamassa}
				luottamus={resume.luottamustoimet}
			/>
		</Layout>
	)
}

export default Janne

export const query = graphql`
	query {
		resume: contentfulResume {
			opinnot
			tyoelamassa
			luottamustoimet
		}
		aboutMe: contentfulAboutMe {
			kotipaikka
			syntynyt
			koulutus
			ammatti
			harrastukset
		}

		DetailsAboutMe: allContentfulDetailsAboutMe(
			sort: { fields: [dateForOrder], order: DESC }
		) {
			edges {
				node {
					title
					dateForOrder
					image {
						file {
							url
						}
					}
					description {
						description
					}
				}
			}
		}
	}
`
