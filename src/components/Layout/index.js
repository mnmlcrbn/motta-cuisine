import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import '../../assets/sass/styles.sass'
import config from '../../../config'
import NavBar from '../NavBar'
import Footer from '../Footer'

class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = {isActive: false}
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({isActive: !this.state.isActive})
  }

  render () {
    return (
      <Fragment>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name='description' content={config.siteDescription} />
          <meta property='og:url' content='https://www.mottacuisine.com' />
          <meta property='og:title' content='Motta Cuisine | Eat Well' />
          <meta property='og:description' content='Motta Cuisine is a boutique catering company located on the big island of St. Croix. Our company specializing in Wedding Catering, Private Chef Services and all types of Event Catering. We take pride in crafting unique dining experience for all of our clients no matter the budget.' />
          <meta property='og:image' content='https://www.mottacuisine.com/img/intro-img.jpg' />
        </Helmet>
        <NavBar isActive={this.state.isActive} toggleNavbar={() => this.toggleNavbar()} />
        <main>
          <Fragment>{this.props.children}</Fragment>
        </main>
        <Footer />
      </Fragment>
    )
  }
}

export default Layout
