import React, {Component} from 'react';
import '../../App.css';


import Header from './header/header/Header';
import ThreeColumns from './three_columns/ThreeColumns';
import MainSection from './main_section/MainSection';



class Home extends Component
{
    render() {
        return (
            <>
                <Header/>
                <MainSection name="main"/>
                <ThreeColumns name="three-columns"/>
            </>
        )
    }
}

export default Home;