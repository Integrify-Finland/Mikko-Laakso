import React from 'react'
import { Link } from 'gatsby'
const Logo = require('../assets/logo.svg')
import FacebookIcon from '../../../SocialMediaIcons/Facebook/index'
import TwitterIcon from '../../../SocialMediaIcons/Twitter/index'
import InstagramIcon from '../../../SocialMediaIcons/Instagram/index'

import './styles.scss'
interface Props {
	toggleMenu: () => void
}
const MenuBar: React.FC<Props> = ({ toggleMenu }) => (
	<div className="navbar__wrapper">
		<nav className="navbar">
			<div className="navbar__logo">
				<Link to="/">
					<img src={Logo} alt="Mikko Laakso logo" />
				</Link>
			</div>
			<div className="navbar__wrapper__links">
				<div className="navbar__links">
					<Link
						to="/"
						className="navbar__nav-link"
						activeClassName="navbar__nav-link--active"
					>
						Etusivu
					</Link>

					<Link
						to="/mikko"
						className="navbar__nav-link"
						activeClassName="navbar__nav-link--active"
					>
						Mikko
					</Link>

					<a
						href="https://puheenvuoro.uusisuomi.fi/mikkolaakso"
						className="navbar__nav-link"
					>
						Blogi
					</a>

					<Link
						to="/medialle"
						className="navbar__nav-link"
						activeClassName="navbar__nav-link--active"
					>
						Medialle
					</Link>
				</div>
				<div className="navbar__links">
					<a
						href="https://www.facebook.com/mikkolaaksokok/"
						className="navbar__nav-media-link"
						target="blank"
						rel="noopener"
						title="Go to Facebook"
					>
						<FacebookIcon iconSize="small" />
					</a>

					<a
						href="https://twitter.com/mikkolaakso"
						className="navbar__nav-media-link"
						target="blank"
						rel="noopener"
						title="Go to Twitter"
					>
						<TwitterIcon iconSize="small" />
					</a>

					<a
						href="https://www.instagram.com/mikkolaakso/"
						className="navbar__nav-media-link"
						target="blank"
						rel="noopener"
						title="Go to Instagram"
					>
						<InstagramIcon iconSize="small" />
					</a>
				</div>
			</div>

			<div
				role="button"
				onKeyPress={toggleMenu}
				onClick={toggleMenu}
				className="mobile-menu__button navbar__menu"
				tabIndex={-1}
				aria-label="Close"
			>
				&#9776;
			</div>
		</nav>
	</div>
)

export default MenuBar
