import * as React from 'react'
import classNames from 'classnames'
import './styles.scss'
interface Props {
	isBlog?: boolean
}
const Section: React.FC<Props> = ({children, isBlog}) => {
	const styles = classNames({
		section: true,
		'section--blog-post': isBlog,
	})
	return (
		<section className={styles}>
			{children && <div className="section__children">{children}</div>}
		</section>
	)
}

export default Section
