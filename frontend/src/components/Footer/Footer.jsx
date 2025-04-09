import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo}/>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} />
                <img src={assets.twitter_icon} />
                <img src={assets.linkedin_icon} />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>0711882749</li>
                <li>dulitha.22@cse.mrt.ac.lk</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copytright">Copyright 2025 © Tomato.com - All RIghts Reserved</p>
    </div>
  )
}

export default Footer
