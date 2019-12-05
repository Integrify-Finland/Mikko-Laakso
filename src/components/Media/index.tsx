import React from 'react'
import './styles.scss'

interface Props {
  text: string
}

const Media: React.FC<Props> = ({ text }) => {
  const name = `Mikko Laakso`
  const birthday = `s. 1992, Helsinki`

  return (
    <div className="textbox">
      <h1>{name}</h1>
      <span>
        {'('}
        {birthday}
        {')'}
      </span>
      <p>{text}</p>
    </div>
  )
}

export default Media
