import React from 'react';
import './App.css';

import {
    HashRouter,
    Route,

} from 'react-router-dom';

import Home from './components/home/Home';
import LoginPanel from './components/login_panel/LoginPanel';

function App() {
    return (
        <HashRouter>
            <>
                <Route exact path='/' render={() => <Home/>}/>
                <Route exact path='/login' render={() => <LoginPanel/>}/>
            </>
        </HashRouter>
    )}

export default App;