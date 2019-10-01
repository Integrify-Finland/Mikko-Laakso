import React from 'react'
import classNames from 'classnames'

import '../styles.scss'
interface Props {
	iconSize: string
}
const TwitterIcon: React.FC<Props> = ({iconSize}) => {
	const iconStyles = classNames({
		'social-svg-icons': true,
		[`social-svg-icons--${iconSize}`]: iconSize,
	})

	return (
		<svg className={iconStyles} viewBox="0 0 24 20">
			<path
				clipRule="evenodd"
				d="M24 2.3125C23.1172 2.70312 22.168 2.96875 21.1719 3.08594C22.1875 2.47656 22.9688 1.51172 23.3359 0.363281C22.3867 0.925781 21.332 1.33594 20.2109 1.55859C19.3125 0.601562 18.0312 0 16.6172 0C13.8984 0 11.6914 2.20703 11.6914 4.92578C11.6914 5.3125 11.7344 5.6875 11.8203 6.04688C7.72656 5.84375 4.09766 3.88281 1.67188 0.902344C1.24609 1.62891 1.00391 2.47656 1.00391 3.37891C1.00391 5.08594 1.87109 6.59375 3.19531 7.47656C2.38672 7.44922 1.62891 7.23047 0.964844 6.85938C0.964844 6.88281 0.964844 6.90234 0.964844 6.92188C0.964844 9.30859 2.66016 11.3008 4.91406 11.75C4.5 11.8633 4.06641 11.9258 3.61719 11.9258C3.30078 11.9258 2.98828 11.8945 2.69141 11.8359C3.31641 13.793 5.13672 15.2148 7.28906 15.2578C5.60547 16.5781 3.48047 17.3633 1.17578 17.3633C0.777344 17.3633 0.386719 17.3398 0 17.293C2.17969 18.6914 4.76562 19.5078 7.54688 19.5078C16.6055 19.5078 21.5586 12.0039 21.5586 5.49609C21.5586 5.28516 21.5508 5.07031 21.543 4.85938C22.5039 4.16406 23.3398 3.29688 24 2.3125Z"
				fill="#6CCFF6"
			/>
		</svg>
	)
}

export default TwitterIcon
