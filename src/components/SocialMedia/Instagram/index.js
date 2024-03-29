// import React, {Component} from 'react'

// import './styles.scss'

// class Instagram extends Component {
// 	render() {
// 		return (
// 			<div className="instagram-column">
// 				<h3 className="instagram-column__title">Instagram</h3>
// 				<div style={{margin: 'auto', display: 'block', overflow: 'hidden'}}>
// 					<iframe
// 						title="Janne's Instagram feed"
// 						src="https://cdn.lightwidget.com/widgets/b697a021935e50f8b4656ecedebb7698.html"
// 						scrolling="no"
// 						allowtransparency="true"
// 						className="lightwidget-widget"
// 						style={{width: '100%', border: '0', height: '580px'}}
// 					/>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default Instagram

import React, { Component } from 'react'

import './styles.scss'

class Instagram extends Component {
  render() {
    return (
      <div className="instagram-column">
        <h3 className="instagram-column__title">Instagram</h3>
        <div style={{ margin: 'auto', display: 'block', overflow: 'hidden' }}>
          <iframe
            title="Mikko's Instagram feed"
            src="https://cdn.lightwidget.com/widgets/52d1008562005062b1a0fe86ea50407b.html"
            scrolling="no"
            allowtransparency="true"
            class="lightwidget-widget"
            style={{ width: '100%', border: '0', height: '580px' }}
          ></iframe>
        </div>
      </div>
    )
  }
}

export default Instagram
