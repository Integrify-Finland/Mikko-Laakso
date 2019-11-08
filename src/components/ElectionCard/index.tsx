import React, { FC } from 'react'
import { Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import './styles.scss'
interface Props {
	/** Background image of card */
	backGroundImage: FluidObject
	/** Title of eclection theme article */
	title: string
	/** Highlighted statement in article */
	emphasisStatement: string
	/** Article content */
	description: string
	/** Published date */
	date: string
	/** Name of author */
	author: string
	/** Link to Election theme page to view full content */
	url: string
}
const ElectionCard: FC<Props> = ({
	backGroundImage,
	title,
	emphasisStatement,
	description,
	date,
	author,
	url,
}) => {
	return (
		<div className="blog-card">
			<div className="blog-card__meta">
				<Img fluid={backGroundImage} className="blog-card__photo" />
				<ul className="blog-card__details">
					<li className="author">{author}</li>
					<li className="date">{date}</li>
				</ul>
			</div>
			<div className="blog-card__description">
				<h1>{title}</h1>
				<h2>{emphasisStatement}</h2>
				<p> {description}</p>
				<p className="blog-card__read-more">
					<Link className="link" to={url}>
						Read More
					</Link>
				</p>
			</div>
		</div>
	)
}
ElectionCard.defaultProps = {
	backGroundImage: {
		src:
			'https://mikkolaakso.com/wp-content/uploads/2015/08/Espoon_Tapiola_kes%C3%A4ll%C3%A4.jpg',
		base64: '',
		tracedSVG: '',
		aspectRatio: 1.6,
		srcSet: '',
		srcWebp: '',
		srcSetWebp: '',
		sizes: '',
	},
	title: 'Itsenäisen Espoon puolesta',
	emphasisStatement: 'Itsenäinen Espoo on metropolialueen kehityksen etu.',
	description:
		'Espoolaisten kuntapäättäjien tulee antaa voimakas viesti sen puolesta, ettei ole kenenkään edun mukaista rakentaa pääkaupunkiseudulle uutta tehotonta mammuttikuntaa.',
	date: '5th Nov 2019',
	author: 'Mikko Laakso',
	url: '/',
}
export default ElectionCard
