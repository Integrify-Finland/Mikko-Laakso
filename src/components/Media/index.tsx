import React from 'react'
import './styles.scss'
const name = `Mikko Laakso`
const birthday = `s. 1992, Helsinki`
const text = `on kaupnginvaltuutettu Espoosta ja pitkän linjan kokoomusvaikuttaja. Koulutukseltaan hän on kauppatieteiden maisteri. Laakso työskentelee teknologia-alan start-upeissa sekä viestinnän freelancerina. Laakso toimi kansanedustaja Elina Lepomäen (kok.) eduskunta-avustajana 2014-2017. Oheisia kuvia saa käyttää vapaasti median julkaisuissa.`

const Media: React.FC = () => {
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
