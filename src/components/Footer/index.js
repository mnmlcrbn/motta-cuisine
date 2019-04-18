import React from 'react'
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='motta-footer'>
      <div className='container'>
        <div className='content'>
          <p>
            {config.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
