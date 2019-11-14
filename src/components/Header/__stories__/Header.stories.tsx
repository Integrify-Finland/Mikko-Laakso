import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from '..'

storiesOf(`Header`, module).add(`Default`, () => (
	<Header
		banner={[
			{
				node: {
					subtext: 'subtext 2',
					headline: 'Headline 2bbbbbbbbbbbbbb',
				},
			},
		]}
	/>
))
