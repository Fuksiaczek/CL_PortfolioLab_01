import React from 'react';
import './App.css';

import {
    HashRouter,
    Route,

} from 'react-router-dom';

import Home from './components/home/Home';

function App() {
    return (
        <HashRouter>
            <>
                <Route exact path='/' render={() => <Home/>} />
            </>
        </HashRouter>
    )}

export default App;