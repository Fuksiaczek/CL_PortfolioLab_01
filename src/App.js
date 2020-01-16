import React from 'react';
import './App.css';

import {
    HashRouter,
    Route,

} from 'react-router-dom';

import Home from './components/home/Home';
import LoginPanel from './components/login_panel/LoginPanel';
import LogoutPanel from "./components/logout_panel/LogoutPanel";

function App() {
    return (
        <HashRouter>
            <>
                <Route exact path='/' render={() => <Home/>}/>
                <Route exact path='/login' render={() => <LoginPanel/>}/>
                <Route exact path='/wylogowano' render={() => <LogoutPanel/>}/>
            </>
        </HashRouter>
    )}

export default App;