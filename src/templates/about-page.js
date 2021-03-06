import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import AboutPageTemplate from '../components/AboutPageTemplate'
import Layout from '../components/Layout'

const AboutPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title}
        ralph={post.frontmatter.ralph}
        secondary_heading={post.frontmatter.secondary_heading}
        about_main={post.frontmatter.about_main}
        about_callout={post.frontmatter.about_callout}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
        ralph
        about_main
        about_callout
        secondary_heading
      }
    }
  }
`
