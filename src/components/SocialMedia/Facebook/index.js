import React, { Component } from 'react'

import './styles.scss'

class Facebook extends Component {
  state = {
    height: 580,
    width: 500,
  }

  loadFBLoginApi = () => {
    window.fbAsyncInit = () => {
      window.FB.init({
        autoLogAppEvents: true,
        version: 'v3.2',
        xfbml: true,
      })
    }
    ;((d, s, id) => {
      const fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) {
        return
      }

      const js = d.createElement(s)
      js.id = id
      js.async = true
      js.src = 'https://connect.facebook.net/fi_FI/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  }

  componentDidMount = () => {
    this.loadFBLoginApi()
    return window.FB && window.FB.XFBML.parse()
  }

  render() {
    const { width, height } = this.state
    const { facebookPage } = this.props

    return (
      <div className="fb-column">
        <h3 className="fb-column__title">Facebook</h3>
        <div
          className="fb-page"
          data-width={width}
          data-height={height}
          data-href={`https://www.facebook.com/${facebookPage}`}
          data-tabs="timeline,events,messages"
          data-small-header="true"
          data-adapt-container-width="true"
          data-show-facepile="true"
          data-hide-cover="true"
        >
          <blockquote
            cite={`https://www.facebook.com/${facebookPage}`}
            className="fb-xfbml-parse-ignore"
          >
            <a
              className="fb-column__link"
              href={`https://www.facebook.com/${facebookPage}`}
              target="blank"
            >
              Facebook
            </a>
          </blockquote>
        </div>
      </div>
    )
  }
}

export default Facebook
