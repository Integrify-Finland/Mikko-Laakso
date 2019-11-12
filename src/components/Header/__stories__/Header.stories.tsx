import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from '..'

storiesOf(`Header`, module).add(`Default`, () => (
	<Header
		isAbout={false}
		Headline="Tulosvastuu takaisin politiikkaan!"
		Subtext="Poliitikkojen ja virkamiesten tulee kantaa vastuu tuloksistaan. On aika palauttaa tulosvastuu politiikkaan."
	/>
))
