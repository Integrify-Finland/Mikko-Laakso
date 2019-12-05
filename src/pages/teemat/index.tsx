import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

import Section from '../../components/Section'

import ElectionCard from '../../components/ElectionCard'

interface Node {
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
interface Data {
  data: {
    allContentfulElectionTheme: {
      edges: Node[]
    }
  }
}
const Teemat: React.FC<Data> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Teemat" />

      <div className="index-page-wrapper">
        <Section>
          <h1 className="index-page-wrapper__title">TEEMAT</h1>
        </Section>
        <Section>
          {data.allContentfulElectionTheme.edges.map(({ node }: Node) => {
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
      </div>
    </Layout>
  )
}

export default Teemat

export const query = graphql`
  query {
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
  }
`
