import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const PricingPageTemplate = ({
  title,
  meta_title,
  meta_description,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>

    <section className='section section--gradient'>
      <div className='container'>
        <h1 className='mc-heading'>{title}</h1>
        <div className='columns'>
          <div className='column is-6'>
            <p>Services</p>
          </div>
          <div className='column is-6'>
            <p>Image</p>
          </div>
        </div>
      </div>
    </section>
  </div>
)

PricingPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
}

export default PricingPageTemplate
