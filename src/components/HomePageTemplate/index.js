import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const HomePageTemplate = ({
  title,
  heading,
  description,
  intro_img,
  meta_title,
  meta_description,
  secondary_branding,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='section section--gradient'>
      <div className='container'>
        <h1 className='mc-intro__heading'>
          {heading}
        </h1>
        <div className='columns'>
          <div className='column is-6'>
            <div className=''>
              <div>
                <p className='mc-intro__copy'>{description}</p>
                <Link to='/about'><button className='mc-intro__btn'>Read our story <span className='arrow'>→</span></button></Link>
              </div>
            </div>
          </div>
          <div className='column is-4 is-offset-1'>
            <img alt='Motta Cuisine Shrimp with dip' src={intro_img} />
          </div>
        </div>
      </div>
    </section>
    <div className='mc-intro__secondary'>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <h2 className='is-size-2'>Updates</h2>
              <hr />
              <div className='columns'>
                <div className='column is-4'>
                  <img src='/img/about-main.jpg' />
                </div>
                <div className='column'>
                  <p>info</p>
                </div>
              </div>
            </div>
            <div className='column'>
              <img alt='Motta Cuisine secondary branding' src={secondary_branding} />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  intro_img: PropTypes.string,
  secondary_branding: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,

}

export default HomePageTemplate
