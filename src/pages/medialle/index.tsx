import React from 'react'
// import {graphql} from 'gatsby'

import Layout from '../../components/Layout'
// import Image from '../../components/Image'
import SEO from '../../components/SEO'
import Media from '../../components/Media'
import Section from '../../components/Section'

import './styles.scss'
// interface DataProps {
// 	data: {
// 		forMedia: {
// 			pictures: []
// 		}
// 	}
// }
// interface Data {
// 	fluid: any
// }
// const Medialle = ({data}: DataProps) => {
const Medialle = () => {
	// const {forMedia} = data

	return (
		<Layout>
			<SEO title="Medialle" />
			<Section>
				<Media />
				{/* <div className="medialle-images">
					{forMedia.pictures.map((data: Data, i) => (
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={`https://${data.fluid.src}`}
							key={i}
						>
							<Image fluid={data.fluid} key={i} />
						</a>
					))}
				</div>
				<p className="medialle-p">
					Oheisia kuvia saa käyttää vapaasti median julkaisuissa.
				</p> */}
			</Section>
		</Layout>
	)
}

export default Medialle

// export const query = graphql`
// 	query {
// 		forMedia: contentfulForTheMedia {
// 			description {
// 				id
// 				description
// 			}
// 			pictures {
// 				fluid(maxWidth: 3200, quality: 100) {
// 					base64
// 					aspectRatio
// 					src
// 					srcSet
// 					srcWebp
// 					srcSetWebp
// 					sizes
// 				}
// 			}
// 		}
// 	}
// `
