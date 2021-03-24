import React, {createContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory, useLocation} from "react-router-dom";
import {AuthicationPage} from './Pages/PageAuth'
import {RegisterPage} from './Pages/PageRegister'
import {ProfileUserPage} from './Pages/PageProfileUser'
import { useAppSelector } from './redux/hooks';

function App() {
  const activeUser = useAppSelector((state:any) => state.user.user)
  return (
    <Router>
        <Switch>
        <Route path="/reg" render={({ location }) => 
          activeUser.active ? (<Redirect to={{ pathname: "/profile", state: { from: location }}}/>) : (<RegisterPage />)} />
          <Route path='/profile'render={({ location }) =>
            activeUser.active ? (<ProfileUserPage/>) : (<Redirect to={{ pathname: "/", state: { from: location }}}/>)}
          />
          <Route path="/" render={({ location }) => 
          activeUser.active ? (<Redirect to={{ pathname: "/profile", state: { from: location }}}/>) : (<AuthicationPage/>)} />
        </Switch>
    </Router>
  );
}

export default App;
