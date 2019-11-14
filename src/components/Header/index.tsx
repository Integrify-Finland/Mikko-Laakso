import React, { useState } from 'react'

import classNames from 'classnames'

import './styles.scss'
const Logo = require('./assets/logo.svg')

interface Node {
	node: {
		headline: string
		subtext: string
	}
}
interface Props {
	banner?: Node[]
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

	const textboxClassName = classNames({
		header__textbox: true,
		'first-stage': animationStage === 'first stage',
		'second-stage': animationStage === 'second stage',
	})

	if (!isAbout) {
		return (
			<div className="header-wrapper">
				<header className="header">
					{banner.map(({ node }, i) => {
						return (
							<div key={i} className="header__box">
								<div className={textboxClassName}>
									<h1 className="header__headline">{node.headline}</h1>
									<p className="header__subtext">{node.subtext}</p>
								</div>
							</div>
						)
					})}
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
