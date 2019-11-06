import React from 'react'
import {Link} from 'gatsby'
import classNames from 'classnames'
import './styles.scss'
interface Props {
	show: boolean
	toggleMenu: () => void
}
const SideBar: React.FC<Props> = ({show, toggleMenu}) => {
	return (
		<aside>
			<div className={classNames('mobile-menu', {'mobile-menu--open': show})}>
				<div
					className="mobile-menu__close"
					onKeyPress={toggleMenu}
					tabIndex={-1}
					role="button"
					onClick={toggleMenu}
					aria-label="Close"
				/>

				<div className="mobile-menu__links">
					<Link to="/" className="mobile-menu__nav-link">
						Etusivu
					</Link>
					<Link to="/mikko" className="mobile-menu__nav-link">
						Mikko
					</Link>
					<Link
						to="/blogi"
						className="mobile-menu__nav-link"
						activeClassName="mobile-menu__nav-link--active"
					>
						Blogi
					</Link>
					<Link
						to="/videot"
						className="mobile-menu__nav-link"
						activeClassName="mobile-menu__nav-link--active"
					>
						Videot
					</Link>

					<Link to="/medialle" className="mobile-menu__nav-link">
						Medialle
					</Link>

					<Link
						to="/yhteys"
						className="mobile-menu__nav-link"
						activeClassName="mobile-menu__nav-link--active"
					>
						Yhteystiedot
					</Link>
				</div>
			</div>
		</aside>
	)
}

export default SideBar
