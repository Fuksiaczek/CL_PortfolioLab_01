import React, {Component} from 'react';

import Header from "../home/0.header/header/Header";
import ContactForm from "../home/6.contact_form/ContactForm";
import FourStepsPanelMainSection from "./four_steps_panel_main_section/FourStepsPanelMainSection"
import InfoBar from "./info_bar/InfoBar";
import ContentSectionStep1 from "./content_section/content_section_step_1/ContentSectionStep1";
import ContentSectionStep2 from "./content_section/content_section_step_2/ContentSectionStep2";
import ContentSectionStep3 from "./content_section/content_section_step_3/ContentSectionStep3";
import ContentSectionStep4 from "./content_section/content_section_step_4/ContentSectionStep4";
import ContentSectionSummary from "./content_section/content_section_summary/ContentSectionSummary";
import ContentSectionThanks from "./content_section/content_section_thanks/ContentSectionThanks";


class FourStepsPanel extends Component
{

    state =
    {
        step1: "",
        step2: "",
        step3: {},
        step4: {},
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

        if(this.state.currentStep === 3)
        {
            this.setState({
                step3: stepValue,
                currentStep: this.state.currentStep + 1,
                yellowBarInfo: "Podaj adres oraz termin odbioru rzeczy. Pola oznaczone * są obowiązkowe."
            })
        }

        if(this.state.currentStep === 4)
        {
            this.setState({
                step4: stepValue,
                currentStep: this.state.currentStep + 1,
            })
        }

        if(this.state.currentStep === 5) {
            this.setState({
                currentStep: this.state.currentStep + 1,
            });
        }

    };

    goBack = () =>
    {
        this.setState({
            currentStep: this.state.currentStep - 1,
        })
    };

    render() {
        const {currentStep, yellowBarInfo, step1, step2, step3, step4} = this.state;
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
                {currentStep === 3 &&
                <ContentSectionStep3 stepUpdate={(stepValue)=>this.stepUpdate(stepValue)}
                                     currentStep={currentStep}
                                     goBack={this.goBack}/>}
                {currentStep === 4 &&
                <ContentSectionStep4 stepUpdate={(stepValue)=>this.stepUpdate(stepValue)}
                                     currentStep={currentStep}
                                     goBack={this.goBack}/>}
                {currentStep === 5 &&
                <ContentSectionSummary step1={step1}
                                       step2={step2}
                                       step3={step3}
                                       step4={step4}
                                       stepUpdate={()=>this.stepUpdate()}
                                       currentStep={currentStep}
                                       goBack={this.goBack}/>}
                {currentStep === 6 &&
                <ContentSectionThanks/>}
                <ContactForm/>
            </>
        )
    }
}

export default FourStepsPanel;