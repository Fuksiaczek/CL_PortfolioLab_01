import React, {Component} from 'react';


import Header from './header/header/Header';
import ThreeColumns from './three_columns/ThreeColumns';
import MainSection from './main_section/MainSection';
import FourSteps from "./four_steps/FourSteps";
import AboutUs from "./about_us/AboutUs";
import WhoWeHelp from "./who_we_help/WhoWeHelp";
import ContactForm from "./contact_form/ContactForm";



class Home extends Component
{

    render() {
        return (
            <>
                <Header/>
                <MainSection/>
                <ThreeColumns/>
                <FourSteps/>
                <AboutUs/>
                <WhoWeHelp/>
                <ContactForm/>
            </>
        )
    }
}

export default Home;