import React, {Component} from 'react';

import Header from "../home/0.header/header/Header";
import ContactForm from "../home/6.contact_form/ContactForm";
import FourStepsPanelMainSection from "./four_steps_panel_main_section/FourStepsPanelMainSection"

class FourStepsPanel extends Component
{
    render() {
        return (
            <>
                <Header/>
                <FourStepsPanelMainSection/>
                <ContactForm/>
            </>
        )
    }
}

export default FourStepsPanel;