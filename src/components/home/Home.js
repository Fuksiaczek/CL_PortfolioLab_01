import React, {Component} from 'react';

import Header from './1.header/header/Header';
import ThreeColumns from './3.three_columns/ThreeColumns';
import MainSection from './2.main_section/MainSection';
import FourSteps from "./4.four_steps/FourSteps";
import AboutUs from "./5.about_us/AboutUs";
import WhoWeHelp from "./6.who_we_help/WhoWeHelp";
import ContactForm from "./7.contact_form/ContactForm";

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