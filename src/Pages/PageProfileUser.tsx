import React from 'react'
import {NavbarApp} from '../Component/Navbar'
import {Footer} from '../Component/Footer'
import {UpdateForm} from '../Component/UpdateInfoUserForm'
import { loadProfileUser } from '../API/api'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { loadDataProfileUser } from '../redux/profileUser/action'
import avatar from '../avatar.png'
import {Spinner} from 'react-bootstrap'
import {AgeIcon, BatsIcon, HeightIcon, WeightIcon, ThrowsIcon, ProgressBar, EditIcon} from '../icons'
import {Dropdown, DropdownButton, Button} from 'react-bootstrap'

export const ProfileUserPage = () => {
  const [load, setLoad] = React.useState(false)
  const [edit, setEdit] = React.useState(false)
  const [screen, setScreen] = React.useState(0)
  const header = useAppSelector((state:any) => state.session.session)
  const dataUser = useAppSelector((state: any) => state.data_user.data_user)
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    async function loadDataUser() {
      if(!load) {
        const answer = await loadProfileUser(header)
        if(answer.success) {
          dispatch(loadDataProfileUser(answer.data))
        }
        setLoad(true)
      }
    }
    loadDataUser()
  }, [load])

  const updateEdit = () => {
      setEdit(!edit)
  }

  const renderScreen = () => {
      switch(screen){
        case 0: {
          return (
            <div className='container-screen'>
              There's no info yet!
            </div>
          )
        }
        case 1: {
          return (
            <div className='container-screen'>
              There's no info yet!
            </div>
          )
        }
        case 2: {
          return (
            <div className='container-screen'>
              There's no info yet!
            </div>
          )
        }
        case 3: {
          return (
            <div className='container-screen'>
              The player haven't had any sessions yet!
            </div>
          )
        }
        case 4: {
          return (
            <div className='container-screen'>
              There's no info yet!
            </div>
          )
        }
      }
  }
    return (
        <>
        <NavbarApp activeButton={load}/>
        {load ? (
          <div className='container-profile'>
          <aside className='aside-form-profile'>
            { !edit ? (
              <>
              <div className='user-info'>
              <div className='edit-btn' onClick={() => {setEdit(true)}}>
                <EditIcon/>
              </div>
                <div className='avatar-user' 
                style={dataUser.avatar === null ? {backgroundImage: `url(${avatar})`} : {backgroundImage: `url(${dataUser.avatar})`}}>
                </div>
                <p className='user-name'>{dataUser.first_name + ' ' + dataUser.last_name}</p>
                <p className='position-one'>{dataUser.position}</p>
                <p className='position-two'>{dataUser.position2}</p>
              </div>
              <div className="personalInfoContent">
                <div className='item-info'>
                  <AgeIcon/>
                  <div style={{width: 130}}>Age</div>
                  <div style={{width: 60, textAlign: 'end'}}>{dataUser.age}</div>
                </div>
                <div className='item-info'>
                  <HeightIcon/>
                  <div style={{width: 130}}>Height</div>
                  <div style={{width: 60, textAlign: 'end'}}>{dataUser.feet} ft {dataUser.inches} in</div>
                </div>
                <div className='item-info'>
                  <WeightIcon/>
                  <div style={{width: 130}}>Weight</div>
                  <div style={{width: 60, textAlign: 'end'}}>{dataUser.weight} lbs</div>
                </div>
                <div className='item-info'>
                  <ThrowsIcon/>
                  <div style={{width: 130}}>Throws</div>
                  <div style={{width: 60, textAlign: 'end', textTransform: 'uppercase'}}>{dataUser.throws_hand}</div>
                </div>
                <div className='item-info'>
                  <BatsIcon/>
                  <div style={{width: 130}}>Bats</div>
                  <div style={{width: 60, textAlign: 'end', textTransform: 'uppercase'}}>{dataUser.bats_hand}</div>
                </div>
              </div>
              <div className="personalInfoContent otstup-top">
                <div className='item-school-info'>
                  <div className='title-item'>School</div>
                  <div className='content-item'>{dataUser.school.name}</div>
                </div>
                <div className='item-school-info'>
                <div className='title-item'>School Year</div>
                  <div className='content-item'>{dataUser.school_year}</div>
                </div>
                <div className='item-school-info'>
                <div className='title-item'>Team</div>
                  <div className='content-item'>{dataUser.teams.map((team:any) => team.name)}</div>
                </div>
              </div>
              <div className='about-title-container'>
                  <div className='about-title'>
                  About
                  </div>
              </div>
              <div className='about-container'>
                {dataUser.biography}
              </div>
              </>) : (
              <>
              <div className='user-info'>
                <div className='avatar-user' 
                style={dataUser.avatar === null ? {backgroundImage: `url(${avatar})`} : {backgroundImage: `url(${dataUser.avatar})`}}>
                </div>
              </div>
              <UpdateForm updateEdit={updateEdit}/>
              </>
              )}
          </aside>
          <main className='main-form-profile'>
            <div className='card-container'>
              <div className='title-card'>
                Top Batting Values
              </div>
              <div className='content-card'>
                  <div className='bar-content'>
                    <div className='bar-title-container'>
                      <div className='bar-title'>Exit Velocity</div>
                      <div className='bar-title' style={{fontWeight:700}}>N/A</div>
                    </div>
                    <ProgressBar maxValue={160} value={0}/>
                  </div>
                  <div className='bar-content'>
                    <div className='bar-title-container'>
                      <div className='bar-title'>Carry Distance</div>
                      <div className='bar-title' style={{fontWeight:700}}>N/A</div>
                    </div>
                    <ProgressBar maxValue={500} value={0}/>
                  </div>
                  <div className='bar-content'>
                    <div className='bar-title-container'>
                      <div className='bar-title'>Launch Angle</div>
                      <div className='bar-title' style={{fontWeight:700}}>N/A</div>
                    </div>
                    <ProgressBar maxValue={50} value={0}/>
                  </div>
              </div>
            </div>
            <div className='card-container'>
            <div className='title-card'>
                <DropdownButton id={(screen === 0 || screen === 1 || screen === 2) ? 'card-nav-btn-active' : 'card-nav-btn'} size="sm" title='Batting'>
                <Dropdown.Item onClick={() => setScreen(0)}>Summary</Dropdown.Item>
                <Dropdown.Item onClick={() => setScreen(1)}>Charts</Dropdown.Item>
                <Dropdown.Item onClick={() => setScreen(2)}>Log</Dropdown.Item>
                </DropdownButton>
                <Button size='sm' id={screen === 3 ? 'card-nav-btn-active' : 'card-nav-btn'} onClick={() => setScreen(3)}>Session Reports</Button>
                <Button size='sm' id={screen === 4 ? 'card-nav-btn-active' : 'card-nav-btn'} onClick={() => setScreen(4)}>Comparison</Button>
              </div>
              <div className='content-card'>
                  {renderScreen()}
              </div>
            </div>
            <div style={{color: 'rgba(0,0,0,0)', fontSize:1}}>1</div>
          </main>
          </div>
        ) : (
          <div className='container-form'>
            <Spinner animation="border" variant="dark" />
          </div>
        )}
        <Footer/>
        </>
      )
}