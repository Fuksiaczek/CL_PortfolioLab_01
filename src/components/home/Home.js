import React, {Component} from 'react';

import Header from '../general/header/header/Header';
import ThreeColumns from './2.three_columns/ThreeColumns';
import MainSection from './1.main_section/MainSection';
import FourSteps from "./3.four_steps/FourSteps";
import AboutUs from "./4.about_us/AboutUs";
import WhoWeHelp from "./5.who_we_help/WhoWeHelp";
import ContactForm from "./6.contact_form/ContactForm";

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