import React from 'react'
import { storiesOf } from '@storybook/react'

import Media from '..'
storiesOf('Media', module).add('Media', () => (
	<Media
		name="Janne&nbsp;Heikkinen"
		birthday="s. 1990, Oulu"
		text="on kokoomuslainen kansanedustaja,yrittäjätaustainen yhteiskuntatieteiden maisteri ja kolmannen kauden 
  kaupunginvaltuutettu. Hän toimi aikaisemmin 
  Kempeleen kunnanvaltuuston puheenjohtajana ja toimii 
  tällä hetkellä kansanedustajana ja Oulun 
  kaupunginvaltuutettuna."
	/>
))
