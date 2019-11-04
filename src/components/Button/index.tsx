import React from 'react'
import classNames from 'classnames'
import './styles.scss'

interface Props {
	variant: string
	label: string
	size: string
	disabled?: boolean
	onClick?: () => void
}

const Button: React.FC<Props> = ({
	variant,
	label,
	size,
	disabled,
	onClick,
}) => {
	const classes = classNames({
		button: true,
		'button--primary': variant === 'primary',
		'button--secondary': variant === 'secondary',
		'button--orange': variant === 'orange',
		'button--sm': size === 'sm',
		'button--md': size === 'md',
		'button--lg': size === 'lg',
		'button--disabled': disabled,
	})

	return (
		<button
			type="submit"
			className={classes}
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	)
}

export default Button
