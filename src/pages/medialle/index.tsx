import React from 'react'
import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Media from '../../components/Media'
import Section from '../../components/Section'

import './styles.scss'
interface DataProps {
  data: {
    forMedia: {
      pictures: []
    }
  }
}
interface Data {
  fluid: FluidObject
}
const Medialle = ({ data }: DataProps) => {
  const { forMedia } = data

  return (
    <Layout>
      <SEO title="Medialle" />
      <Section>
        <Media />
        <div className="medialle-images">
          {forMedia.pictures.map((data: Data, i) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://${data.fluid.src}`}
              key={i}
            >
              <Img
                fluid={data.fluid}
                style={{
                  maxWidth: `100%`,
                  width: '150px',
                  marginTop: '20px',
                }}
              />
            </a>
          ))}
        </div>
        <p className="medialle-p">
          Oheisia kuvia saa käyttää vapaasti median julkaisuissa.
        </p>
      </Section>
    </Layout>
  )
}

export default Medialle

export const query = graphql`
  query {
    forMedia: contentfulForTheMedia {
      description {
        id
        description
      }
      pictures {
        fluid(maxWidth: 3200, quality: 100) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
  }
`
