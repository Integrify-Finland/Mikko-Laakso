import React from 'react'

import './styles.scss'
import Facebook from './Facebook'
import Twitter from './Twitter'
import Instagram from './Instagram/index'
import ColumnsGrid from '../ColumnsGrid/index'

const twitterURL = 'https://twitter.com/mikkolaakso'
const facebookPage = 'mikkolaaksokok'
// interface Props {
// 	facebookPage: string
// 	twitterURL: string
// }
const SocialMedia: React.FC = () => (
  <div className="social-media">
    <ColumnsGrid columns={3}>
      <Facebook facebookPage={facebookPage} />
      <Twitter twitterURL={twitterURL} />
      <Instagram />
    </ColumnsGrid>
  </div>
)

export default SocialMedia
