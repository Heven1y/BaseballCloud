import React from 'react'
import {NavbarApp} from '../Component/Navbar'
import {Footer} from '../Component/Footer'
import {LoginForm} from '../Component/LogForm'

export const AuthicationPage = () => {
    return (
        <>
        <NavbarApp activeButton={false}/>
        <div className='back-img'/>
        <div className='container-form'>
        <div className='form-login'>
            <h4 className='welcome'>Welcome to BaseballCloud!</h4>
            <h6 className='sub-welcome'>Sign into your account here:</h6>
            <LoginForm/>
            <a href='#'>Forgot password?</a>
            <p>Don’t have an account? <a href='/reg'>Sign Up</a></p>
        </div>
        </div>
        <Footer/>
        </>
      )
}