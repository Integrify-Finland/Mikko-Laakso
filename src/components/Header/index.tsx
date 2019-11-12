import React, { useState } from 'react'

import classNames from 'classnames'

import Img, { FluidObject } from 'gatsby-image'
import './styles.scss'
const Logo = require('./assets/logo.svg')

interface Node {
	id: string
	headline: string
	subtext: string
	background: {
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
interface Props {
	banner: Node[]
	isAbout?: boolean
	kotipaikka?: string
	syntynyt?: string
	ammatti?: string
	harrastukset?: string
	koulutus?: string[]
}

const Header: React.FC<Props> = ({
	banner,
	isAbout,
	kotipaikka,
	syntynyt,
	ammatti,
	harrastukset,
	koulutus = [''],
}) => {
	const [animationStage] = useState('initial')
	const [isActive, setIsActive] = useState('')

	const textboxClassName = classNames({
		header__textbox: true,
		'first-stage': animationStage === 'first stage',
		'second-stage': animationStage === 'second stage',
	})
	let slideIndex = 1
	const showSlides = (n: number) => {
		let slides = mockData.length
		if (n > slides) {
			slideIndex = 1
		}
		if (n < 1) {
			slideIndex = slides
		}

		// slides[slideIndex - 1].style.display = 'block'
	}

	const plusSlides = (n: number) => {
		setIsActive('--active')
	}

	if (!isAbout) {
		return (
			<div className="header-wrapper">
				<header className="header">
					{banner.map((node, i) => {
						return (
							<div className={`header__mySlide${isActive} fade`} key={i}>
								<Img fluid={} className="header__bg" />
								<div className="header__box">
									<div className={textboxClassName}>
										<h1 className="header__headline">{'node.headline'}</h1>
										<p className="header__subtext">{'option.Subtext'}</p>
									</div>
								</div>
							</div>
						)
					})}

					<div
						className="header__prev"
						role="button"
						onClick={e => plusSlides(-1)}
					>
						&#10094;
					</div>
					<div className="header__next" onClick={e => plusSlides(1)}>
						&#10095;
					</div>
				</header>
			</div>
		)
	} else {
		return (
			<div className="about-header-wrapper">
				<header className="about-header">
					<div className="about-header__textbox">
						<img src={Logo} alt="Mikko Laakso logo" />
						<h3>Kotipaikka:</h3>
						<p>{kotipaikka}</p>

						<h3>Syntynyt:</h3>
						<p>{syntynyt}</p>

						<h3>Ammatti:</h3>
						<p>{ammatti}</p>

						<h3>Harrastukset:</h3>
						<p>{harrastukset}</p>

						<h3>Koulutus:</h3>
						<ul>
							{koulutus.map((el: string, i: number) => (
								<li key={i}>{el}</li>
							))}
						</ul>
					</div>
				</header>
			</div>
		)
	}
}

export default Header
