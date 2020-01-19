import React from 'react';
import './App.css';

import {
    HashRouter,
    Route,

} from 'react-router-dom';

import Home from './components/home/Home';
import LoginPanel from './components/login_panel/LoginPanel';
import RegistrationPanel from "./components/registration_panel/RegistrationPanel";
import LogoutPanel from "./components/logout_panel/LogoutPanel";
import FourStepsPanel from "./components/four_steps_panel/FourStepsPanel";

function App() {
    return (
        <HashRouter>
            <>
                <Route exact path='/' render={() => <Home/>}/>
                <Route exact path='/login' render={() => <LoginPanel/>}/>
                <Route exact path='/registration' render={() => <RegistrationPanel/>}/>
                <Route exact path='/wylogowano' render={() => <LogoutPanel/>}/>
                <Route exact path='/oddaj-rzeczy' render={() => <FourStepsPanel/>}/>
            </>
        </HashRouter>
    )}

export default App;