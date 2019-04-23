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
            <h1 className='mc-heading'>{title}</h1>
            <div className='columns'>
              <div className='column is-6'>
                <div>
                  <div className='press-holder'>
                    <h5 className='press-title'>By Phone</h5>
                    <p className='press-link'>(786)-218-3506</p>
                  </div>
                  <div className='press-holder'>
                    <h5 className='press-title'>By Email</h5>
                    <p className='press-link'>mottacuisine@gmail.com</p>
                  </div>
                  <div className='press-holder'>
                    <h5 className='press-title'>By Mail</h5>
                    <p className='press-link'>P.O. Box 1047 <br /> Christiansted, VI 00821</p>
                  </div>
                </div>

                <h2 className='mc-heading'>Send Us a Message</h2>
                <form
                  name='contact'
                  method='post'
                  action='/success'
                  data-netlify='true'
                  data-netlify-honeypot='bot-field'
                >
                  <input type='hidden' name='bot-field' />
                  <input type='hidden' name='form-name' value='contact' />
                  <div className='field'>
                    <label className='label' htmlFor='name'>Name</label>
                    <div className='control'>
                      <input className='input' type='text' name='name' id='name' />
                    </div>
                  </div>
                  <div className='field'>
                    <label className='label' htmlFor='email'>Email</label>
                    <div className='control'>
                      <input className='input' type='text' name='email' id='email' />
                    </div>
                  </div>
                  <div className='field'>
                    <label htmlFor='contact-reason'>Contact Reason</label>
                    <div className='control'>
                      <div className='select'>
                        <select id='contact-reason'>
                          <option value='General Message'>General Message</option>
                          <option value='Testimonial'>Testimonial</option>
                          <option value='Booking Infomation'>Booking Infomation</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='field'>
                    <label htmlFor='message'>Message</label>
                    <div className='control'>
                      <textarea className='textarea' name='message' id='message' rows='6' required />
                    </div>
                  </div>
                  <div className='field is-grouped is-pulled-right'>
                    <div className='control'>
                      <button className='button is-text' type='reset'>Cancel</button>
                    </div>
                    <div className='control'>
                      <button className='button is-primary' type='submit' disabled=''>Submit</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className='column is-5 is-offset-1'>
                <img src='/img/contact-us.jpg' />
              </div>
            </div>
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
