import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import ElectionThemePost from '../../components/ElectionThemePost'

import Section from '../../components/Section'

// const image = require('../../../images/gatsby-astronaut.png')

interface Data {
  data: {
    contentfulElectionTheme: {
      id: string
      url: string
      title: string
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
}
const ElectionThemePostTemplate: FC<Data> = ({ data }) => {
  const { contentfulElectionTheme } = data
  return (
    <Layout>
      <Section isBlog>
        <ElectionThemePost
          title={contentfulElectionTheme.title}
          image={contentfulElectionTheme.pictureForArticle.fluid}
          url={contentfulElectionTheme.url}
          fullContent={contentfulElectionTheme.fullContent.fullContent}
        />
      </Section>
    </Layout>
  )
}

export default ElectionThemePostTemplate

export const query = graphql`
  query($slug: String!) {
    contentfulElectionTheme: contentfulElectionTheme(id: { eq: $slug }) {
      id
      url
      title
      shortenContent
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
`
