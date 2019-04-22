import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import PressPageTemplate from '../components/PressPageTemplate'
import Layout from '../components/Layout'

const PressPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <Layout>
      <PressPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

PressPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PressPage

export const pressPageQuery = graphql`
  query PressPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
      }
    }
  }
`
