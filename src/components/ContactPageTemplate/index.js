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
          <form
            name='contact'
            method='post'
            action='/success'
            data-netlify='true'
            data-netlify-honeypot='bot-field'
          >
            <input type='hidden' name='bot-field' />
            <input type='hidden' name='form-name' value='contact' />
            <div>
              <label htmlFor='name'>Name</label>
              <input type='text' name='name' id='name' />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input type='text' name='email' id='email' />
            </div>
            <div>
              <label htmlFor='message'>Message</label>
              <textarea name='message' id='message' rows='6' required />
            </div>
            <div>
              <input type='submit' value='Drop a line' />
              <input type='reset' value='Eraser' />
            </div>
          </form>
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
