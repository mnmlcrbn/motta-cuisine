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
        <h1 className='mc-heading'>{title}</h1>
        <div className='columns'>
          <div className='column is-6'>
            <img src={about_main} />
            <p className='mc-callout'>{about_callout}</p>
          </div>
          <div className='column is-5 is-offset-1'>
            <h3 className='mc-secondary__heading'>{secondary_heading}</h3>
            <p className='mc-secondary__copy'>In the Spring of 2014 Motta Cuisine was launched in the heart of Spanish Harlem with the help of fellow Crucians. From its launch MC Executive Chef Ralph Motta has been the driving force behind many innovative culinary experiences. Many of which began with his 3 course brunches once offered through Feastly. Within its first 2 years of operation MC was servicing the NYC, PEN & STX markets</p>
            <p className='mc-secondary__copy'>In the Fall of 2016 MC closed its doors for 6 months while Chef Motta mourned the loss of his father Robert W. Motta.</p>
            <p className='mc-secondary__copy'>Recently relocating home to St. Croix Chef Motta relaunched MC in the Spring of 2017. The brands connection to the history and culture of the islands made the transition effortless. Chef Motta's style can be described as a fusion of Caribbean, French and American cuisine.</p>
            <div className='columns'>
              <div className='column is-6'>
                <h3 className='mc-secondary__heading'>Ralph Motta</h3>
                <ul>
                  <li>Culinary Ambassodor of the U.S.V.I</li>
                  <li>Executive Chef </li>
                  <li>Creative Director</li>
                </ul>
              </div>
              <div className='column is-6'>
                <img src={ralph} />
              </div>
            </div>
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
