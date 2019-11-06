import React from 'react'
import { storiesOf } from '@storybook/react'

import ColumnsGrid from '../index'

storiesOf(`ColumnsGrid`, module).add(`Two columns: default`, () => (
	<ColumnsGrid columns={2}>
		<p>Column 1</p>
		<p>Column 2</p>
	</ColumnsGrid>
))
