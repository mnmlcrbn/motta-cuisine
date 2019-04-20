import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class ContactPageTemplate extends Component {
  constructor (props) {
    super(props)
    this.state = { isValidated: false }
  }

  render () {
    const {title, subtitle, meta_title, meta_description} = this.props
    return (
      <div>
        <Helmet>
          <title>{meta_title}</title>
          <meta name='description' content={meta_description} />
        </Helmet>
        <section className='section'>
          <div className='container'>
            <form name='contact-form' method='POST' data-netlify='true'>
              <p>
                <label>Your Name: <input type='text' name='name' /></label>
              </p>
              <p>
                <label>Your Email: <input type='email' name='email' /></label>
              </p>
              <p>
                <label>Your Role: <select name='role[]' multiple>
                  <option value='leader'>Leader</option>
                  <option value='follower'>Follower</option>
                </select></label>
              </p>
              <p>
                <label>Message: <textarea name='message' /></label>
              </p>
              <p>
                <button type='submit'>Send</button>
              </p>
            </form>
          </div>
        </section>
      </div>
    )
  }
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
}

export default ContactPageTemplate
