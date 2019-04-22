import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const PressPageTemplate = ({
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
            <div className='press-holder'>
              <h5 className='press-title'>Floss Magazine</h5>
              <p><a className='press-link' target='_blank' href='http://www.flossmagazine.com/2017/05/chef-ralph-motta-named-u-s-virgin-islands-culinary-ambassador/'>Chef Ralph Motta Named U.S. Virgin Islands Culinary Ambassador</a></p>
            </div>
            <div className='press-holder'>
              <h5 className='press-title'>The Virgin Islands Consortium</h5>
              <p><a className='press-link' target='_blank' href='http://viconsortium.com/virgin-islands-2/st-croix-chef-ralph-motta-is-named-usvi-culinary-ambassador-by-dept-of-tourism/'>St.Croix Chef Ralph Motta is named U.S.V.I Culinary Ambassador by Dept. of Tourism</a></p>
            </div>
            <div className='press-holder'>
              <h5 className='press-title'>TravPR</h5>
              <p><a className='press-link' target='_blank' href='http://www.travpr.com/pr-60697-chef-ralph-motta.html'>CHEF RALPH MOTTA NAMED U.S. VIRGIN ISLANDS CULINARY AMBASSADOR</a></p>
            </div>
            <div className='press-holder'>
              <h5 className='press-title'>eTurbo News</h5>
              <p><a className='press-link' target='_blank' href='https://www.eturbonews.com/155661/us-virgin-islands-tourism-names-new-culinary-ambassador'>US Virgin Islands Tourism names new Culinary Ambassador</a></p>
            </div>
           
          </div>
          <div className='column is-6'>
            <div className='press-holder'>
              <h5 className='press-title'>st.lucian news online</h5>
              <p><a className='press-link' target='_blank' href='https://www.stlucianewsonline.com/regional-chef-ralph-motta-named-united-states-virgin-islands-culinary-ambassador/'>REGIONAL: Chef Ralph Motta named United States Virgin Islands Culinary Ambassador</a></p>
            </div>
            <div className='press-holder'>
              <h5 className='press-title'>black enterprise</h5>
              <p><a className='press-link' target='_blank' href='http://www.blackenterprise.com/bemodernman/2015/10/19/passion-to-purpose-chef-ralph-motta/'>[Passion to Purpose]: Chef Ralph Motta</a></p>
            </div>
            <div className='press-holder'>
              <h5 className='press-title'>feastly</h5>
              <p><a className='press-link' target='_blank' href='http://blog.eatfeastly.com/2015/03/25/behind-the-feast-meet-st-croix-native-chef-ralph-motta/'>Behind the Feast: Meet St. Croix-Native Chef Ralph Motta</a></p>
            </div>
            <div className='press-holder'>
              <h5 className='press-title'>Ny Daily News</h5>
              <p><a className='press-link' target='_blank' href='http://m.nydailynews.com/new-york/caribbeat-u-s-virgin-islands-gov-promotes-tourism-article-1.2375866'>CARIBBEAT: PR blitz for U.S. Virgin Islands, Gov. Mapp promotes tourism during Labor Day holiday</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

PressPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
}

export default PressPageTemplate
