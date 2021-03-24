import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

export const Footer:React.FC = () => {
    return (
    <Navbar className="justify-content-between" fixed='bottom'>
    <div className="inline-link-nav otp">
        <p>© 2018 BaseballCloud</p>
        <a href="https://baseballcloud-front.herokuapp.com/legal/terms" className='foot-link'>Term of Service</a>
        <a href="https://baseballcloud-front.herokuapp.com/legal/privacy" className='foot-link'>Privacy Policy</a>
    </div>
    <div className="inline-link-nav">
      <a href="https://baseballcloud.blog/" className='foot-link'>Blog</a>
      <a href="http://twitter.com/baseballcloudus" className='foot-link'>Twitter</a>
      <a href="http://www.instagram.com/baseballcloudus/" className='foot-link'>Instagram</a>
      <a href="http://www.facebook.com/BaseballCloudUS/" className='foot-link'>Facebook</a>
    </div>
        </Navbar>
    )
}