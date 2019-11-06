import React from 'react'

import './styles.scss'
const kokoomusLogo = require('./assets/kokoomus-logo.svg')

const Footer: React.FC = () => {
	return (
		<div className="footer">
			<img src={kokoomusLogo} alt="Kokoomus Logo" />
		</div>
	)
}

export default Footer
