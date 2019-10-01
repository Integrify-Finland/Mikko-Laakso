import React from 'react'

import './styles.scss'
import kokoomusLogo from './assets/kokoomus-logo.svg'
import FacebookIcon from '../SocialMediaIcons/Facebook/index'
import TwitterIcon from '../SocialMediaIcons/Twitter/index'
import InstagramIcon from '../SocialMediaIcons/Instagram/index'
interface Props {
	firstPersonName: string
	secondPersonName: string
	firstPersonTitle: string
	secondPersonTitle: string
	firstPersonPhone: string
	secondPersonPhone: string
	firstPersonEmail: string
	secondPersonEmail: string
}
const Footer: React.FC<Props> = ({
	firstPersonName,
	secondPersonName,
	firstPersonTitle,
	secondPersonTitle,
	firstPersonPhone,
	secondPersonPhone,
	firstPersonEmail,
	secondPersonEmail,
}) => {
	const year = new Date().getFullYear()

	const copyright = `Copyright ${String.fromCharCode(
		169,
	)} ${year} Janne Heikkinen`

	return (
		<div className="footer">
			<div className="footer__left-box">
				<div className="footer__social-media">
					<a
						href="https://www.facebook.com/janneheikkinenpage/"
						target="blank"
						rel="noopener"
						title="Go to Facebook"
					>
						<FacebookIcon iconSize="big" />
					</a>

					<a
						href="https://twitter.com/heikkinenjanne"
						target="blank"
						rel="noopener"
						title="Go to Twitter"
					>
						<TwitterIcon iconSize="big" />
					</a>

					<a
						href="https://www.instagram.com/janneheikkinen/"
						target="blank"
						rel="noopener"
						title="Go to Instagram"
					>
						<InstagramIcon iconSize="big" />
					</a>
				</div>

				<div className="footer__contact-container">
					<div className="footer__contact1">
						<h1>{firstPersonName}</h1>
						<p>
							{firstPersonTitle} <br />
							Puhelin:
							<br />
							{firstPersonPhone}
							<br />
							Sähköposti:
							<br />
							{firstPersonEmail}
						</p>
					</div>

					<div className="footer__contact2">
						<h1>{secondPersonName}</h1>
						<p>
							{secondPersonTitle}
							<br />
							Puhelin:
							<br />
							{secondPersonPhone}
							<br />
							Sähköposti:
							<br />
							{secondPersonEmail}
						</p>
					</div>
				</div>

				<p className="footer__copyright">{copyright}</p>
			</div>

			<div className="footer__logo-container">
				<img src={kokoomusLogo} alt="Kokoomus Logo" />
			</div>
		</div>
	)
}

export default Footer
