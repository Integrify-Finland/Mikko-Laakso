import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import SocialMedia from '../components/SocialMedia/index'
import Section from '../components/Section'
import Header from '../components/Header'
import ElectionCard from '../components/ElectionCard'

import './indexPageStyle.scss'
interface ElectionTheme {
  node: {
    id: string
    title: string
    url: string
    shortenContent: string
    fullContent: {
      fullContent: string
    }
    emphasisStatement: string
    pictureForArticle: {
      fluid: {
        base64: string
        aspectRatio: number
        src: string
        srcSet: string
        srcWebp: string
        srcSetWebp: string
        sizes: string
      }
    }
  }
}
interface Banner {
  node: {
    headline: string
    subtext: string
    navigateTo: string
    buttonText: string
  }
}
interface Data {
  data: {
    allContentfulElectionTheme: {
      edges: ElectionTheme[]
    }
    allContentfulBanner: {
      edges: Banner[]
    }
  }
}
const IndexPage: React.FC<Data> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Etusivu" />
      <Header banner={data.allContentfulBanner.edges} />

      <div className="index-page-wrapper">
        <Section>
          <h1 className="index-page-wrapper__title">VAALITEEMAT</h1>
        </Section>
        <Section>
          {data.allContentfulElectionTheme.edges
            .slice(0, 3)
            .map(({ node }: ElectionTheme) => {
              return (
                <ElectionCard
                  backGroundImage={node.pictureForArticle.fluid}
                  title={node.title}
                  emphasisStatement={node.emphasisStatement}
                  description={node.shortenContent}
                  author={'Mikko Laakso'}
                  url={`teemat/${node.url
                    .toLowerCase()
                    .replace(/[']/gi, '')
                    .replace(/ /gi, '-')
                    .replace(/[,]/gi, '')
                    .replace(/[ä]/gi, 'a')
                    .replace(/[ö]/gi, 'o')}`}
                  key={node.id}
                />
              )
            })}
        </Section>
        <Section>
          <h1 className="index-page-wrapper__title">MEDIALLE</h1>
          <SocialMedia />
        </Section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allContentfulElectionTheme(filter: {}) {
      edges {
        node {
          id
          title
          shortenContent
          url
          fullContent {
            fullContent
          }
          emphasisStatement
          pictureForArticle {
            fluid {
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
    }

    allContentfulBanner {
      edges {
        node {
          subtext
          headline
          navigateTo
          buttonText
        }
      }
    }
  }
`
