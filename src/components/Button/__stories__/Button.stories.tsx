import React from 'react'

import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'

import Button from '..'
storiesOf('Button', module)
	.addDecorator(jsxDecorator)
	.add('orange', () => (
		<Button
			label="Tilaa uutiskirje →"
			size="lg"
			variant="orange"
			onClick={() => {
				console.log('clicked')
			}}
		/>
	))
	.add('primary', () => (
		<Button label="Lähetä→" size="md" variant="primary" onClick={() => {
			console.log('clicked')
		}} />
	))
	.add('secondary', () => (
		<Button
			label="Lue lisää"
			size="sm"
			variant="secondary"
			onClick={() => {
				console.log('clicked')
			}}
		/>
	))
