import React from 'react'

import './styles.scss'
interface Props {
	click: () => void
}
const BackDrop: React.FC<Props> = ({click}) => (
	<div
		className="backdrop"
		onKeyPress={click}
		tabIndex={-1}
		role="button"
		onClick={click}
	/>
)

export default BackDrop
