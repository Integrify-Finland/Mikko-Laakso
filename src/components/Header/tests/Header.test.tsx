import * as React from 'react'
import Header from '../header'
import {render} from '@testing-library/react'
//import {getByText} from '@testing-library/dom'

describe('<Header/>', () => {
	it('should render Header with <TESTING> as title', () => {
		// Arrange
		const {getByText} = render(<Header siteTitle={'TESTING'} />)

		//Act

		// Assert
		expect(getByText('TESTING')).toBeInTheDocument()
	})
})

// test('should render Header with <TESTING> as title', async => {
// 	const testSiteTitle = 'TESTING'
// 	const {getByText} = render(<Header siteTitle={testSiteTitle} />)
// 	const siteTitle = getByText(testSiteTitle)
// 	expect(siteTitle).toBeInTheDocument()
// })
