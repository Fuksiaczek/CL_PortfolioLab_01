import React, {Component} from 'react';

import Header from "../home/0.header/header/Header";
import ContactForm from "../home/6.contact_form/ContactForm";
import FourStepsPanelMainSection from "./four_steps_panel_main_section/FourStepsPanelMainSection"
import InfoBar from "./info_bar/InfoBar";
import ContentSectionStep1 from "./content_section/ContentSectionStep1";
import ContentSectionStep2 from "./content_section/ContentSectionStep2";
class FourStepsPanel extends Component
{
    componentDidMount;

    state =
    {
        step1: "",
        step2: "",
        currentStep: 1,
        yellowBarInfo: "Uzupełnij szczegóły dotyczące Twoich rzeczy. " +
            "Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.",
    };

    stepUpdate = (stepValue) =>
    {
        if(this.state.currentStep === 1)
        {
            this.setState({
                step1: stepValue,
                currentStep: this.state.currentStep + 1,
                yellowBarInfo: "Wszystkie rzeczy do oddania zapakuj w 60l worki. " +
                    "Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."
            })
        }

        if(this.state.currentStep === 2)
        {
            this.setState({
                step2: stepValue,
                currentStep: this.state.currentStep + 1,
                yellowBarInfo: "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. " +
                    "Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.",
            })
        }
    };

    goBack = () =>
    {
        this.setState({
            currentStep: this.state.currentStep - 1,
        })
    };

    render() {
        const {currentStep, yellowBarInfo,} = this.state;
        return (
            <>
                <Header/>
                <FourStepsPanelMainSection/>
                {currentStep < 5 && <InfoBar yellowBarInfo={yellowBarInfo}/>}
                {currentStep === 1 &&
                <ContentSectionStep1 stepUpdate={(stepValue)=>this.stepUpdate(stepValue)}
                                     currentStep={currentStep}/>}
                {currentStep === 2 &&
                <ContentSectionStep2 stepUpdate={(stepValue)=>this.stepUpdate(stepValue)}
                                     currentStep={currentStep}
                                     goBack={this.goBack}/>}
                <ContactForm/>
            </>
        )
    }
}

export default FourStepsPanel;