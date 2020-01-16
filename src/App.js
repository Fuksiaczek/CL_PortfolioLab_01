import React from 'react';
import './App.css';

import {
    HashRouter,
    Route,

} from 'react-router-dom';

import Home from './components/home/Home';
import LoginPanel from './components/login_panel/LoginPanel';
import RegistrationPanel from "./components/registration_panel/RegistrationPanel";

function App() {
    return (
        <HashRouter>
            <>
                <Route exact path='/' render={() => <Home/>}/>
                <Route exact path='/login' render={() => <LoginPanel/>}/>
                <Route exact path='/registration' render={() => <RegistrationPanel/>}/>
            </>
        </HashRouter>
    )}

export default App;