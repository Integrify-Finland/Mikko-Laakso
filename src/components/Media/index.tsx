import React from 'react'
import './styles.scss'
const name = `Janne Heikkinen`
const birthday = `s. 1990, Oulu`
const text = `on kokoomuslainen kansanedustaja,yrittäjätaustainen yhteiskuntatieteiden maisteri ja kolmannen kauden 
  kaupunginvaltuutettu. Hän toimi aikaisemmin 
  Kempeleen kunnanvaltuuston puheenjohtajana ja toimii 
  tällä hetkellä kansanedustajana ja Oulun 
  kaupunginvaltuutettuna.`
const Media: React.FC = () => {
	return (
		<div className="textbox">
			<h1>{name}</h1>
			<span>({birthday})</span>
			<p>{text}</p>
		</div>
	)
}

export default Media
