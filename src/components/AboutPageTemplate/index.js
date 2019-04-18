import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const AboutPageTemplate = ({
  title,
  meta_title,
  meta_description,
  about_main,
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
          <div className='column is-5'>
            <img src={about_main} />
          </div>
          <div className='column is-6 is-offset-1'>
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
  about_main: PropTypes.string,
  ralph: PropTypes.string,
  meta_description: PropTypes.string,
}

export default AboutPageTemplate
