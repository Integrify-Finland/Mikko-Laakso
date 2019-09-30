import * as React from 'react'
import Header from '../'
import {render} from '@testing-library/react'

describe('<Header/>', () => {
	it('should render Header with <TESTING> as title', () => {
		// Arrange
		const {getByText} = render(<Header siteTitle={'TESTiNG'} />)

		// Act

		// Assert
		expect(getByText('TESTING')).toBeInTheDocument()
	})
})
