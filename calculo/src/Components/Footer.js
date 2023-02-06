import React from 'react'
import './Footer.css';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='social-media'>
          <h2 className='footer-title'>Diseño:</h2>
          <p>Mercedes Gomez</p>
            <a href="https://www.mozilla.com/" className='link'>Linkedin</a>
            <a href="https://www.mozilla.com/" className='link'>Instagram</a>
            <p>merudarena@gmail.com</p>
        </div>
        <div className='social-media'>
            <h2 className='footer-title'>Código:</h2>
            <p>Cecilia Biagiola</p>
            <a href="https://www.mozilla.com/" className='link'>Linkedin</a>
            <a href="https://www.mozilla.com/" className='link'>Instagram</a>
            <p>biagiolacecilia@gmail.com</p>
            
        </div>
    </div>
  )
}

export{ Footer}