import React, {Component} from 'react'
import { navigate } from 'gatsby-link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactPageTemplate extends Component {
  constructor (props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    // eslint-disable-next-line
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      // eslint-disable-next-line
      .catch(error => alert(error))
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
