import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const GalleryPageTemplate = ({
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
          <div className='column is-4'>
            <img src='/img/gallery/gallery-1.jpg' />
          </div>
          <div className='column is-4'>
            <img src='/img/gallery/gallery-2.jpg' />
          </div>
          <div className='column is-4'>
            <img src='/img/gallery/gallery-3.jpg' />
          </div>
        </div>
        <div className='columns'>
          <div className='column is-4'>
            <img src='/img/gallery/gallery-4.jpg' />
          </div>
          <div className='column is-4'>
            <img src='/img/gallery/gallery-5.jpg' />
          </div>
          <div className='column is-4'>
            <img src='/img/gallery/gallery-6.jpg' />
          </div>
        </div>
        <div className='columns'>
          <div className='column is-4'>
            <img src='/img/gallery/gallery-7.jpg' />
          </div>
          <div className='column is-4'>
            <img src='/img/gallery/gallery-8.jpg' />
          </div>
          <div className='column is-4'>
            <img src='/img/gallery/gallery-9.jpg' />
          </div>
        </div>
        <div className='columns'>
          <div className='column is-4'>
            <img src='/img/gallery/gallery-10.jpg' />
          </div>
          <div className='column is-4'>
            <img src='/img/gallery/gallery-11.jpg' />
          </div>
        </div>
      </div>
    </section>
  </div>
)

GalleryPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
}

export default GalleryPageTemplate
