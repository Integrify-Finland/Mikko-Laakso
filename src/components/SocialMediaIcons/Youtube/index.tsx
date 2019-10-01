import React from 'react'
import classNames from 'classnames'

import '../styles.scss'
interface Props {
	iconSize: string
}
const YouTubeIcon: React.FC<Props> = ({iconSize}) => {
	const iconStyles = classNames({
		'social-svg-icons': true,
		[`social-svg-icons--${iconSize}`]: iconSize,
	})

	return (
		<svg className={iconStyles} id="youtube" viewBox="0 4 23 17">
			<path
				d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z"
				fill="#6CCFF6"
			/>
		</svg>
	)
}

export default YouTubeIcon
