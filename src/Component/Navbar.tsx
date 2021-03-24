import React from 'react'
import {Navbar, Nav, DropdownButton, Dropdown} from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import { signOut } from '../API/api'
import {Logo} from '../icons'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { resetStoreAction } from '../redux/storeAction'
import { setActiveUserAction } from '../redux/users/action'

type NavbarProps = {
    activeButton:boolean
}

export const NavbarApp:React.FC<NavbarProps> = (props) => {
    const dispatch = useAppDispatch()
    const session = useAppSelector((state: any) => state.session.session)
    const dataUser = useAppSelector((state: any) => state.data_user.data_user)
    let history = useHistory()
    const logout = async () => {
        const answer:boolean = await signOut(session)
        if(answer){
        dispatch(resetStoreAction())
        history.push("/")
        }
    }
    return (
        <Navbar className="justify-content-between" >
            <Navbar.Brand href="/">
            <Logo/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            {
            props.activeButton ? (
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
                <Nav.Link onClick={() => {history.push('/leaders')}} className='nav-link'>Leaderboard</Nav.Link>
                <Nav.Link onClick={() => {history.push('/network')}} className='nav-link'>Network</Nav.Link>
                <DropdownButton id="dropdown" title={dataUser.first_name + ' ' + dataUser.last_name} menuAlign='right'>
                <Dropdown.Item onClick={() => {history.push('/profile')}}>My Profile</Dropdown.Item>
                <Dropdown.Item onClick={logout}>Log out</Dropdown.Item>
                </DropdownButton>
            </Nav>
            </Navbar.Collapse>
            ) : (
                <Navbar.Collapse id="responsive-navbar-nav">
                </Navbar.Collapse> 
            )
            }
        </Navbar>
    )
}