import React, { FC } from 'react'
import Img, { FluidObject } from 'gatsby-image'

import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from 'react-share'

import './styles.scss'

interface Props {
  image: FluidObject
  title: string
  url: string
  fullContent: string
}
const ElectionThemePost: FC<Props> = ({ image, title, url, fullContent }) => {
  const shareUrl =
    'http://www.mikkolaakso.com/teemat/' +
    url
      .toLowerCase()
      .replace(/[']/gi, '')
      .replace(/ /gi, '-')
      .replace(/[,]/gi, '')
      .replace(/[ä]/gi, 'a')
      .replace(/[ö]/gi, 'o')

  return (
    <div className="election-theme-post">
      <h1 className="election-theme-post__title">{title}</h1>
      <Img fluid={image} className="election-theme-post__image" />
      <div className="election-theme-post__content">
        <div className="election-theme-post__content__children">
          {fullContent}
        </div>

        <div className="election-theme-post__footer">
          <div className="election-theme-post__share-button-container">
            <FacebookShareButton
              url={shareUrl}
              quote={title}
              className="election-theme-post__share-button"
            >
              <FacebookIcon size={64} round />
            </FacebookShareButton>

            <TwitterShareButton
              url={shareUrl}
              quote={title}
              className="election-theme-post__share-button"
            >
              <TwitterIcon size={64} round />
            </TwitterShareButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElectionThemePost
