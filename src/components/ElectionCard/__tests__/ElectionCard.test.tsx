import React from 'react'
import ElectionCard from '..'
import { render } from '@testing-library/react'

describe('<ElectionCard />', () => {
	it('should render', () => {
		const { container } = render(
			<ElectionCard
				backGroundImage={{
					src:
						'https://mikkolaakso.com/wp-content/uploads/2015/08/Espoon_Tapiola_kes%C3%A4ll%C3%A4.jpg',
					base64: '',
					tracedSVG: '',
					aspectRatio: 1.6,
					srcSet: '',
					srcWebp: '',
					srcSetWebp: '',
					sizes: '',
				}}
				title={'Itsenäisen Espoon puolesta'}
				emphasisStatement={
					'Itsenäinen Espoo on metropolialueen kehityksen etu.'
				}
				description={
					'Espoolaisten kuntapäättäjien tulee antaa voimakas viesti sen puolesta, ettei ole kenenkään edun mukaista rakentaa pääkaupunkiseudulle uutta tehotonta mammuttikuntaa.'
				}
				date={'5th Nov 2019'}
				author={'Mikko Laakso'}
				url={'/'}
			/>,
		)

		expect(container).toMatchSnapshot()
	})
})
