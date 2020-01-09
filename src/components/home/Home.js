import React, {Component} from 'react';


import Header from './header/header/Header';
import ThreeColumns from './three_columns/ThreeColumns';
import MainSection from './main_section/MainSection';
import FourSteps from "./four_steps/FourSteps";
import AboutUs from "./about_us/AboutUs";



class Home extends Component
{

    render() {
        return (
            <>
                <Header />
                <MainSection name="main"/>
                <ThreeColumns/>
                <FourSteps name="four_steps"/>
                <AboutUs name="about_us"/>
            </>
        )
    }
}

export default Home;