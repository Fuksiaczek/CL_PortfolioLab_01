import React, {Component} from 'react';

import Header from "../home/0.header/header/Header";
import ContactForm from "../home/6.contact_form/ContactForm";
import FourStepsPanelMainSection from "./four_steps_panel_main_section/FourStepsPanelMainSection"
import InfoBar from "./info_bar/InfoBar";
import ContentSectionStep1 from "./content_section/ContentSectionStep1";

class FourStepsPanel extends Component
{
    state =
    {
      step1: "",
      step2: "",
      step3: "",
      step4: "",
    };

    step1Update = (e, step1Value) =>
    {
        this.setState({
            step1: step1Value,
        })
    };


    render() {
        return (
            <>
                <Header/>
                <FourStepsPanelMainSection/>
                <InfoBar/>
                <ContentSectionStep1 step1Update={(step1Value)=>this.step1Update(step1Value)}/>
                <ContactForm/>
            </>
        )
    }
}

export default FourStepsPanel;