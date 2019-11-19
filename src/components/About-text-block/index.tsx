import classNames from 'classnames'
import React from 'react'
import './styles.scss'
interface Props {
  title: string
  text: string
  icon: string
  isLeft: boolean
}
const AboutTextBlock: React.FC<Props> = ({ title, text, icon, isLeft }) => {
  const classes = classNames({
    iconRight: isLeft,
    iconLeft: !isLeft,
  })

  return (
    <div className="about-text-block">
      <img className={classes} src={icon} alt="icons" />
      <div className="about-text-block__text-wrapper">
        <h1 className="about-text-block__title">
          <u>{title}</u>
        </h1>
        <p className="about-text-block__paragraph">{text}</p>
      </div>
    </div>
  )
}

export default AboutTextBlock
