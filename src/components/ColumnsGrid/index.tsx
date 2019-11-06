import React from 'react'
import classNames from 'classnames'
import './styles.scss'

interface Props {
	columns: number
}

const ColumnsGrid: React.FC<Props> = ({ children, columns = 0 }) => {
	const grid = classNames({
		'grid-container': true,
		[`grid-container--${columns}`]: columns,
	})
	return <div className={grid}>{children}</div>
}

export default ColumnsGrid
