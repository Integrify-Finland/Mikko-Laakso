import React from 'react'
import { storiesOf } from '@storybook/react'
const imageFile = require('../assets/gatsby-astronaut.png')
import AboutTextBlock from '..'
storiesOf('AboutTextBlock', module)
	.add('Text left', () => (
		<AboutTextBlock
			title="Title goes here"
			text="This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!"
			icon={imageFile}
			isLeft={true}
		/>
	))

	.add('Text right', () => (
		<AboutTextBlock
			title="Title title"
			text="This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!This is some random text. Enjoy!"
			icon={imageFile}
			isLeft={false}
		/>
	))
