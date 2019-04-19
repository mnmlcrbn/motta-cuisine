import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const AboutPageTemplate = ({
  title,
  meta_title,
  meta_description,
  secondary_heading,
  about_main,
  about_callout,
  ralph,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='section section--gradient'>
      <div className='container'>
        <h1 className='is-size-2'>{title}</h1>
        <div className='columns'>
          <div className='column is-6'>
            <img src={about_main} />
            <p>{about_callout}</p>
          </div>
          <div className='column is-5 is-offset-1'>
            <h3>{secondary_heading}</h3>
            <img src={ralph} />
          </div>
        </div>
      </div>
    </section>
  </div>
)
AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  meta_title: PropTypes.string,
  secondary_heading: PropTypes.string,
  about_main: PropTypes.string,
  about_callout: PropTypes.string,
  ralph: PropTypes.string,
  meta_description: PropTypes.string,
}

export default AboutPageTemplate
