import React, {Component} from 'react';


import Header from './header/header/Header';
import ThreeColumns from './three_columns/ThreeColumns';
import MainSection from './main_section/MainSection';
import FourSteps from "./four_steps/FourSteps";



class Home extends Component
{
    render() {
        return (
            <>
                <Header/>
                <MainSection name="main"/>
                <ThreeColumns name="three-columns"/>
                <FourSteps name="four-steps"/>
            </>
        )
    }
}

export default Home;