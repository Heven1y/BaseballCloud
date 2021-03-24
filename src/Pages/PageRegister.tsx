import React from 'react'
import {NavbarApp} from '../Component/Navbar'
import {Footer} from '../Component/Footer'
import {RegisterForm} from '../Component/RegForm'
import {ButtonGroup} from 'react-bootstrap'

export const RegisterPage = () => {
    const [check, setCheck] = React.useState(true)
    return (
        <>
        <NavbarApp activeButton={false}/>
        <div className='back-img'/>
        <div className='container-form'>
        <div className='form-login'>
        <ButtonGroup toggle size="lg" className="mb-2" style={{width: '100%'}}>
        <button className={check ? 'tog-button btn-toggle-active tog-left' : 'tog-button btn-toggle-disable tog-left'} 
        type='button' onClick={() => {setCheck(!check)}}>Sing Up as Player</button>
        <button className={!check ? 'tog-button btn-toggle-active tog-right' : 'tog-button btn-toggle-disable tog-right'} 
        type='button' onClick={() => {setCheck(!check)}}>Sing Up as Scout</button>
        </ButtonGroup>
            <div className='cartochka'>
                <h2 style={{color: '#fff', fontWeight: 700}}>{check ? 'Players' : 'Scouts'}</h2>
                <h6 style={{textAlign: 'center', color: '#fff'}}>
                {check ? 'Players have their own profile within the system and plan on having data collected.' : 
                'Coaches and scouts can view players in the system but do not have their own profile.'}</h6>
            </div>
            <RegisterForm role={check}/>
            <p>Already registered? <a href='/'>Sign In</a></p>
        </div>
        </div>
        <Footer/>
        </>
      )
}