import React from 'react'

import { storiesOf } from '@storybook/react'

import Header from '..'

storiesOf('Header', module)
	.add('Etusivu Header', () => (
		<Header Subtext="Kansanedustaja, yhteiskuntatieteiden maisteri ja intohimoinen perhokalastaja." />
	))

	.add('About Header', () => (
		<Header
			isAbout={true}
			kotipaikka="Heinäpää, Oulu"
			syntynyt="1990 Oulussa"
			ammatti="Viestinnän suunnittelija"
			koulutus={['Yhteiskuntatieteiden maisteri Jyväskylän yliopistosta']}
			harrastukset="test"
		/>
	))
