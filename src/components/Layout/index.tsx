import React from 'react'
// import { useStaticQuery, graphql } from "gatsby"

import Footer from '../Footer'

import Navigation from '../Navigation'

const Layout: React.FC = ({children}) => {
	// const data = useStaticQuery(graphql`
	//   query SiteTitleQuery {
	//     site {
	//       siteMetadata {
	//         title
	//       }
	//     }
	//   }
	// `)

	return (
		<>
			<Navigation />
			<main>{children}</main>

			<Footer />
		</>
	)
}

export default Layout
