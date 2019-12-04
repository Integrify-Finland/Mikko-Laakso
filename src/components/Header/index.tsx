import React, { useState } from 'react'

import classNames from 'classnames'
import { navigate } from 'gatsby'
import Button from '../Button'

import mikkoHeader from './assets/mikkoHeader.png'
import './styles.scss'
const Logo = require('./assets/logo.svg')

interface Node {
  node: {
    headline: string
    subtext: string
    navigateTo: string
    buttonText: string
  }
}
interface Props {
  banner: Node[]
  isAbout?: boolean
  kotipaikka?: string
  syntynyt?: string
  ammatti?: string
  harrastukset?: string
  koulutus?: string[]
}

const Header: React.FC<Props> = ({
  banner,
  isAbout,
  kotipaikka,
  syntynyt,
  ammatti,
  harrastukset,
  koulutus = [''],
}) => {
  const [animationStage] = useState('initial')
  const [bannerData, setBannerData] = useState(banner[0].node)
  const [currentSlide, setCurrentSlide] = useState(0)
  const textboxClassName = classNames({
    header__textbox: true,
    'first-stage': animationStage === 'first stage',
    'second-stage': animationStage === 'second stage',
  })

  const setSlide = (n: number) => {
    setBannerData(banner[n].node)
    setCurrentSlide(n)
  }

  if (!isAbout) {
    return (
      <div className="header-wrapper">
        <header className="header">
          <img src={mikkoHeader} alt="Mikko's image" />
          <div className="header__box fade">
            <div className={textboxClassName}>
              <h1 className="header__headline">{bannerData.headline}</h1>
              {bannerData.subtext && (
                <p className="header__subtext">{bannerData.subtext}</p>
              )}
              <Button
                variant="primary"
                label={bannerData.buttonText}
                size="md"
                onClick={() => navigate(bannerData.navigateTo)}
              />
            </div>
          </div>
        </header>
        <div className="dotContainer">
          {banner.map((node, i) => {
            const bannerClassName = classNames({
              dot: true,
              active: i === currentSlide,
            })
            return (
              <span
                key={i}
                className={bannerClassName}
                onClick={e => setSlide(i)}
              />
            )
          })}
        </div>
      </div>
    )
  } else {
    return (
      <div className="about-header-wrapper">
        <header className="about-header">
          <div className="about-header__textbox">
            <img src={Logo} alt="Mikko Laakso logo" />
            <h3>Kotipaikka:</h3>
            <p>{kotipaikka}</p>

            <h3>Syntynyt:</h3>
            <p>{syntynyt}</p>

            <h3>Ammatti:</h3>
            <p>{ammatti}</p>

            <h3>Harrastukset:</h3>
            <p>{harrastukset}</p>

            <h3>Koulutus:</h3>
            <ul>
              {koulutus.map((el: string, i: number) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          </div>
        </header>
      </div>
    )
  }
}

export default Header
