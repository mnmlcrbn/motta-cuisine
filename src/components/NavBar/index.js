import React from 'react'
import {Link, graphql, StaticQuery} from 'gatsby'

const NavBar = ({toggleNavbar, isActive}) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='container'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item'>
              Motta Cuisine
            </Link>
            <button
              className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
              data-target='navMenu'
              onClick={toggleNavbar}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

            <div className='navbar-end'>
              <Link className='navbar-item' to='/about'>
                             Our Story
              </Link>
              <Link className='navbar-item' to='/services'>
                              Services
              </Link>
              <Link className='navbar-item' to='/journal'>
                              Food Journal
              </Link>
              <Link className='navbar-item' to='/gallery'>
                              Gallery
              </Link>
              <Link className='navbar-item' to='/press'>
                              Our Press
              </Link>
              
              <div className='navbar-item'>
                <div className='field is-grouped'>
                  <p className='control'>
                    <Link
                      className='button mc-contact__btn is-outlined'
                      to='/contact'>
                              Contact Us
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
