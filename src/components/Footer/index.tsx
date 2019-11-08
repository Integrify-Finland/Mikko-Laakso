import React from 'react'
import FacebookIcon from '../SocialMediaIcons/Facebook/index'
import TwitterIcon from '../SocialMediaIcons/Twitter/index'
import InstagramIcon from '../SocialMediaIcons/Instagram/index'
const kokoomusLogo = require('./assets/kokoomus-logo.svg')

import './styles.scss'

const Footer: React.FC = () => {
	const year = new Date().getFullYear()

	const copyright = `Copyright ${String.fromCharCode(169)} ${year} Mikko Laakso`
	return (
		<div className="footer">
			<div className="footer__left-box">
				<div className="footer__social-media">
					<a
						href="https://www.facebook.com/mikkolaaksokok/"
						target="blank"
						rel="noopener"
						title="Go to Facebook"
					>
						<FacebookIcon iconSize="big" />
					</a>

					<a
						href="https://twitter.com/mikkolaakso"
						target="blank"
						rel="noopener"
						title="Go to Twitter"
					>
						<TwitterIcon iconSize="big" />
					</a>

					<a
						href="https://www.instagram.com/mikkolaakso/"
						target="blank"
						rel="noopener"
						title="Go to Instagram"
					>
						<InstagramIcon iconSize="big" />
					</a>
				</div>

				<div className="footer__contact-container">
					<div className="footer__contact1">
						<h1>Mikko Laakso</h1>
						<p>
							Kauppatieteiden maisteri, Kaupunginvaltuutettu, Espoo
							<br />
							Kotipaikka:
							<br />
							Olari, Espoo
							<br />
							Puhelin:
							<br />
							+358 {'('}0{')'} 50 3839432
							<br />
							Sähköposti:
							<br />
							mikko.laakso(at)alumni.aalto.fi
						</p>
					</div>
				</div>

				<p className="footer__copyright">{copyright}</p>
			</div>
			<img src={kokoomusLogo} alt="Kokoomus Logo" />
		</div>
	)
}

export default Footer
